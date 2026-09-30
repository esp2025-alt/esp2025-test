import type { Handle } from '@sveltejs/kit';

// Set the language in prerendered HTML, including when JavaScript is disabled.
export const handle: Handle = ({ event, resolve }) => {
	const language = /\/en\/?$/.test(event.url.pathname) ? 'en' : 'pt-PT';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('lang="pt-PT"', `lang="${language}"`)
	});
};
