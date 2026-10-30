/** True for absolute http(s) links that leave the site. */
export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

/** Extra anchor attributes: external links open in a new tab, safely. */
export function linkAttrs(href: string): { target?: string; rel?: string } {
  return isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
