import { defineArrayMember, defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({
          name: 'tagline',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'dateLocation',
          title: 'Date & Location',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'primaryCtaLabel',
          title: 'Primary Button Label',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'Secondary Button Label',
          type: 'string',
        }),
        defineField({
          name: 'stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
              ],
              preview: {
                select: { title: 'value', subtitle: 'label' },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'premierSponsors',
      title: 'Premier Sponsors',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({
          name: 'sponsors',
          type: 'array',
          of: [defineArrayMember({ type: 'reference', to: [{ type: 'sponsor' }] })],
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', type: 'string', title: 'Badge Text' }),
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body1', title: 'First Paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'body2', title: 'Second Paragraph', type: 'text', rows: 3 }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
        defineField({ name: 'caption', type: 'string' }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'icon', type: 'string', description: 'Emoji icon' }),
                defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'description', type: 'text', rows: 2 }),
                defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
              ],
              preview: {
                select: { title: 'title', subtitle: 'icon' },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaBanner',
      title: 'CTA Banner',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subtext', type: 'text', rows: 2 }),
        defineField({ name: 'primaryCtaLabel', title: 'Primary Button Label', type: 'string' }),
        defineField({ name: 'secondaryCtaLabel', title: 'Secondary Button Label', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
})
