# Domain DNS Migration: GoDaddy → Vercel + Google Workspace

Migrating 404day.com from Wix-managed DNS to GoDaddy DNS, pointing the website to Vercel and email to Google Workspace — with zero downtime.

---

## Context

- Domain registrar: **GoDaddy**
- Current nameservers: pointed to **Wix** (no active DNS records in Wix)
- Website host: **Vercel**
- Email provider: **Google Workspace**

Because Wix currently has no active DNS records, there is no live site or email to interrupt. Migration risk is minimal.

---

## Phase 1 — Prepare before touching DNS

Do this first. Have all records ready before changing anything.

### 1. Add domain to Vercel

1. Go to your Vercel project → **Settings** → **Domains**
2. Add your domain (e.g. `404day.com`)
3. Vercel will display the DNS records you need. Save them. They will be:
   - `A record: @ → 76.76.21.21`
   - `CNAME: www → cname.vercel-dns.com`

### 2. Set up Google Workspace

1. Complete signup at [workspace.google.com](https://workspace.google.com)
2. During setup, Google will provide:
   - A **TXT verification record** (unique to your account)
   - **MX records** for email routing
3. Save all of these before proceeding to Phase 2

---

## Phase 2 — Switch nameservers to GoDaddy

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

**For accounts created after April 2023 — single MX record:**

| Type | Name          | Priority | Value              | TTL    |
|------|---------------|----------|--------------------|--------|
| MX   | `@` or blank  | `1`      | `smtp.google.com`  | 1 hour |

> Note: Some registrars require a trailing period: `smtp.google.com.` — GoDaddy does not require this.

**For existing accounts using the legacy setup (5 records) — still fully supported:**

| Type | Name | Priority | Value                    | TTL    |
|------|------|----------|--------------------------|--------|
| MX   | `@`  | 1        | `aspmx.l.google.com`     | 1 hour |
| MX   | `@`  | 5        | `alt1.aspmx.l.google.com`| 1 hour |
| MX   | `@`  | 5        | `alt2.aspmx.l.google.com`| 1 hour |
| MX   | `@`  | 10       | `alt3.aspmx.l.google.com`| 1 hour |
| MX   | `@`  | 10       | `alt4.aspmx.l.google.com`| 1 hour |

### Google Workspace domain verification

| Type | Name | Value                              | TTL    |
|------|------|------------------------------------|--------|
| TXT  | `@`  | `google-site-verification=XXXXXXX` | 1 hour |

> Replace `XXXXXXX` with the unique value Google provides in your Workspace admin console.

### SPF record (prevents email spoofing — required)

| Type | Name | Value                              | TTL    |
|------|------|------------------------------------|--------|
| TXT  | `@`  | `v=spf1 include:_spf.google.com ~all` | 1 hour |

---

## Phase 4 — Verify in Vercel and Google

### Vercel
- Go to your project → **Settings** → **Domains**
- Vercel auto-checks DNS and shows a green checkmark when records resolve
- SSL certificate is issued automatically once DNS resolves

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
