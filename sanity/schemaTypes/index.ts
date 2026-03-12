import { type SchemaTypeDefinition } from 'sanity'
import { page } from './page'
import { siteSettings } from './siteSettings'
import { homePage } from './homePage'
import { sponsor } from './sponsor'
import { hero } from './blocks/hero'
import { textSection } from './blocks/textSection'
import { ctaSection } from './blocks/ctaSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, siteSettings, homePage, sponsor, hero, textSection, ctaSection],
}
