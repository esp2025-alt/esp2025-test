import { getContext, setContext } from 'svelte';
import { pt } from './pt';
import { en } from './en';

export const translations = { pt, en };
export type Locale = keyof typeof translations;
export type SiteContent = typeof pt;
const contentKey = Symbol('site-content');

// A getter keeps all sections in sync when navigating between language routes.
export function provideContent(content: () => SiteContent) {
	setContext(contentKey, content);
}
export function useContent() {
	return getContext<() => SiteContent>(contentKey);
}
