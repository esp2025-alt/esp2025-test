<script lang="ts">
	import { useContent } from '$lib/content/context';
	import { base } from '$app/paths';
	import { business } from '$lib/content/site';
	import LogoIcon from './LogoIcon.svelte';

	const content = useContent();
	let copy = $derived(content());
</script>

<footer class="site-footer">
	<div class="container footer-top">
		<div>
			<a class="brand" href={`${base}${copy.path}`} aria-label={`${business.name} — ${copy.common.home}`}
				><span class="brand-mark"><LogoIcon size={32} /></span><span class="brand-name"
					>Estores<span>Sem Problema<span class="brand-dot">.</span></span></span
				></a
			>
			<p>{copy.footer.tagline}</p>
		</div>
		<nav aria-label={copy.common.footerNav}>
			{#each copy.navigation as item}<a href={item.href}>{item.label}</a>{/each}<a href="#perguntas"
				>{copy.common.faq}</a
			>
		</nav>
	</div>
	<div class="container footer-bottom">
		<span>© {new Date().getFullYear()} {business.name}</span><span
			>{copy.footer.description}</span
		>
	</div>
</footer>
