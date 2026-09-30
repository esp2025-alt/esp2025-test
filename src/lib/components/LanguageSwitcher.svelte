<script lang="ts">
	import { base } from '$app/paths';
	import { useContent } from '$lib/content/context';

	const content = useContent();
	let copy = $derived(content());
</script>

<div class="language-switch" role="group" aria-label={copy.common.language}>
	<a
		href={`${base}/`}
		lang="pt-PT"
		hreflang="pt-PT"
		aria-label="Português"
		aria-current={copy.path === '/' ? 'page' : undefined}>PT</a
	>
	<a
		href={`${base}/en/`}
		lang="en"
		hreflang="en"
		aria-label="English"
		aria-current={copy.path === '/en/' ? 'page' : undefined}>EN</a
	>
</div>
