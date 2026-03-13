# Domain DNS Migration: GoDaddy → Vercel + Google Workspace

Migrating 404day.com from Wix-managed DNS to GoDaddy DNS, pointing the website to Vercel and email to Google Workspace — with minimal downtime.

---

## Context

- Domain registrar: **GoDaddy**
- Current nameservers: pointed to **Wix** (live site currently hosted on Wix)
- Website host: **Vercel** (destination)
- Email provider: **Google Workspace**

There is a live site on Wix. Expect a brief window of downtime between Wix going offline and Vercel coming online as DNS propagates. This is typically minutes to a few hours depending on ISP propagation speed. **Do the switchover at a low-traffic time (e.g. midnight).** Email risk is separate — see Phase 3.

---

## Phase 1 — Prepare before touching DNS

Do this first. Have all records ready before changing anything.

### 1. Add domain to Vercel

1. Go to your Vercel project → **Settings** → **Domains**
2. Add both `404day.com` and `www.404day.com`
3. Set **`404day.com` as the primary domain** — Vercel will automatically redirect `www.404day.com` → `404day.com`
4. Vercel will display the DNS records you need — **copy them directly from your Vercel dashboard**, as the CNAME value is project-specific. They will look like:
   - `A record: @ → 76.76.21.21`
   - `CNAME: www → [your-project-specific-value].vercel-dns.com`

> **Note:** Vercel technically recommends `www` as the primary domain for better CDN routing, but `404day.com` (apex) is set as primary here per project preference. Both work fine.

### 2. Set up Google Workspace

1. Complete signup at [workspace.google.com](https://workspace.google.com)
2. During setup, Google will provide **MX records** for email routing — save these before proceeding to Phase 2
3. Google also requires a **TXT verification record** during initial account setup to prove domain ownership — this is a one-time step done when you first create the Workspace account, not during DNS migration. If your account is already set up, this record already exists in your current DNS and will carry over automatically.

---

## Phase 2 — Switch nameservers to GoDaddy

> **Do this at a low-traffic time (e.g. midnight).** This is the step that takes the Wix site offline. The new Vercel site will come up as DNS propagates — typically within minutes to a few hours for most visitors.

1. Log into **GoDaddy** → your domain → **DNS**
2. Find the **Nameservers** section → click **Change**
3. Select **GoDaddy default nameservers**:
   - `ns1.domaincontrol.com`
   - `ns2.domaincontrol.com`
4. Save

GoDaddy nameservers take effect within minutes. Full global propagation can take up to 48 hours, but is usually much faster.

---

## Phase 3 — Add DNS records in GoDaddy

Once nameservers are pointing to GoDaddy, add the following records in the GoDaddy DNS panel.

### Website (Vercel)

| Type  | Name  | Value                  | TTL     |
|-------|-------|------------------------|---------|
| A     | `@`   | `76.76.21.21`          | 1 hour  |
| CNAME | `www` | `cname.vercel-dns.com` | 1 hour  |

### Email (Google Workspace)

| Type | Name          | Priority | Value              | TTL    |
|------|---------------|----------|--------------------|--------|
| MX   | `@` or blank  | `1`      | `smtp.google.com`  | 1 hour |

> Note: Some registrars require a trailing period: `smtp.google.com.` — GoDaddy does not require this.

### Google Workspace domain verification TXT record

> **Only needed if setting up a new Workspace account.** If your Workspace account already exists and email is working on Wix, this record is already verified — just carry it over to GoDaddy DNS as-is.

| Type | Name | Value                              | TTL    |
|------|------|------------------------------------|--------|
| TXT  | `@`  | `google-site-verification=XXXXXXX` | 1 hour |

Replace `XXXXXXX` with the value from your Google Workspace Admin Console → **Domains** → **Manage domains**.

### SPF record (prevents email spoofing — required)

| Type | Name | Value                              | TTL    |
|------|------|------------------------------------|--------|
| TXT  | `@`  | `v=spf1 include:_spf.google.com ~all` | 1 hour |

### DKIM (prevents email spoofing — strongly recommended)

DKIM requires generating a key in Google Admin first — you cannot pre-stage this record.

1. Go to **Google Admin Console** → **Apps** → **Google Workspace** → **Gmail** → **Authenticate email**
2. Select your domain and click **Generate new record** (keep default 2048-bit key)
3. Google will give you a TXT record to add — it will look like:

| Type | Name                        | Value                  | TTL    |
|------|-----------------------------|------------------------|--------|
| TXT  | `google._domainkey`         | `v=DKIM1; k=rsa; p=...` | 1 hour |

4. Add the record in GoDaddy DNS, then return to Google Admin and click **Start authentication**

### DMARC (recommended — add after SPF and DKIM are working)

Start with `p=none` (monitoring only) — this lets you receive reports without risking email delivery.

| Type | Name      | Value                                                              | TTL    |
|------|-----------|--------------------------------------------------------------------|--------|
| TXT  | `_dmarc`  | `v=DMARC1; p=none; rua=mailto:info@404day.com`                    | 1 hour |

> Once you've confirmed SPF and DKIM are working and reviewed a few DMARC reports, change `p=none` to `p=quarantine` or `p=reject` for stronger protection.

---

## Phase 4 — Verify in Vercel and Google

### Vercel
- Go to your project → **Settings** → **Domains**
- Vercel auto-checks DNS and shows a green checkmark when records resolve
- SSL certificate is issued automatically once DNS resolves — this can take up to 48 hours if DNS is slow to propagate
- **If SSL fails to provision:** Check whether your domain has existing CAA records from a prior host. If so, add `0 issue "letsencrypt.org"` as a CAA record in GoDaddy. Also remove any existing `_acme-challenge` TXT records left over from Wix.

### Google Workspace
- Go to your Google Workspace **Admin Console**
- Follow the domain verification flow — Google checks for your TXT record
- Once verified, it checks MX records and activates email routing

---

## Timeline

| Action                        | Expected Time          |
|-------------------------------|------------------------|
| Nameserver switch takes effect | 15 minutes – 2 hours  |
| Full global DNS propagation    | Up to 48 hours         |
| Vercel SSL certificate issued  | Minutes after DNS resolves |
| Google email working           | 1–4 hours after MX records propagate |
| Wix site goes offline          | As soon as nameservers switch |
| Vercel site goes live          | As DNS propagates per visitor's ISP — typically minutes to a few hours |

---

## Verify propagation

Use [dnschecker.org](https://dnschecker.org) to check your A, MX, and TXT records from multiple locations worldwide and confirm propagation status.

---

## Phase 5 — Set up Google Analytics (post deployment)

Do this after the site is live on your domain.

### 1. Create a Google Analytics 4 property

1. Go to [analytics.google.com](https://analytics.google.com) and sign in with your Google Workspace account
2. Click **Admin** (gear icon, bottom left) → **Create** → **Property**
3. Enter a property name (e.g. `404Day`), select your timezone and currency
4. Under **Business details**, fill in industry and size → click **Next**
5. Select **Web** as the platform
6. Enter your domain (e.g. `https://404day.com`) and a stream name → click **Create stream**
7. You'll land on the **Web stream details** page — copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Add the tracking script to the Next.js site

Install the `@next/third-parties` package (included in Next.js 14+, no install needed if already on 14):

```bash
npm install @next/third-parties
```

In `/app/layout.tsx`, add the Google Analytics component:

```tsx
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### 3. Deploy and verify

1. Deploy the updated site to Vercel
2. Visit your live site and navigate around a few pages
3. In Google Analytics, go to **Reports** → **Realtime** — you should see yourself as an active user within 1–2 minutes
4. If no data appears after 5 minutes, open browser DevTools → Network tab → filter for `gtag` or `google-analytics` to confirm the script is loading

### 4. Optional — exclude internal traffic

To avoid counting your own visits in analytics:

1. In GA Admin → **Data Streams** → your stream → **Configure tag settings**
2. Click **Define internal traffic** → **Create** → add your IP address
3. Then go to **Admin** → **Data Filters** → **Create filter** → select **Internal Traffic** → set to **Active**
