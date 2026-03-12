import { defineType, defineField } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const eventPost = defineType({
  name: 'eventPost',
  title: 'Event Post',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Embed URL (YouTube or Vimeo)',
      type: 'url',
      description: 'Paste a YouTube or Vimeo URL — shown in the modal instead of the image.',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket / RSVP Link',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'image' },
    prepare({ title, date, media }) {
      return { title, subtitle: date, media }
    },
  },
  orderings: [
    {
      title: 'Event Date, newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
