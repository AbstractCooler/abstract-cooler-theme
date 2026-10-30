/**
 * Global site metadata and navigation.
 * The values live in ./content/site.json and are edited from the CMS (/admin).
 */
import data from './content/site.json';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = data.navItems;

export const site = {
  name: data.name,
  tagline: data.tagline,
  description: data.description,
  email: data.email,
  facebookUrl: data.facebookUrl,
  ctaLabel: data.ctaLabel,
  // Used by the sitemap and canonical URLs. Keep in sync with astro.config.mjs.
  url: data.url,
};
