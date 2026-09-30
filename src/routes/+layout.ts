import type { LayoutLoad } from './$types';

// Both language versions are complete static pages for GitHub Pages.
export const prerender = true;
export const trailingSlash = 'always';
export const csr = true;

export const load: LayoutLoad = ({ url }) => ({
	locale: /\/en\/?$/.test(url.pathname) ? ('en' as const) : ('pt' as const)
});
