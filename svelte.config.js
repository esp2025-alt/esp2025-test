import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// GitHub Pages publishes the committed /docs directory.
		adapter: adapter({ pages: 'docs', assets: 'docs', precompress: false, strict: true }),
		// The custom domain serves the site at the root, not /esp2025-test.
		paths: { base: '' }
	}
};
export default config;
