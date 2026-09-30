<script lang="ts">
	import { useContent } from '$lib/content/context';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { business } from '$lib/content/site';
	import LogoIcon from './LogoIcon.svelte';
	import Icon from './Icon.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	const content = useContent();
	let copy = $derived(content());

	let compact = $state(false);
	let header: HTMLElement;
	let mobileMenu: HTMLDetailsElement;

	onMount(() => {
		const updateHeader = () => {
			// Separate thresholds prevent flickering when the header changes height.
			if (window.scrollY > 64) compact = true;
			else if (window.scrollY <= 8) compact = false;
		};

		updateHeader();
		// Keep anchor destinations visible when larger text makes the header taller.
		const resizeObserver = new ResizeObserver(() => {
			document.documentElement.style.setProperty(
				'--sticky-header-height',
				`${header.getBoundingClientRect().height}px`
			);
		});
		resizeObserver.observe(header);
		const dismissMenu = (event: PointerEvent) => {
			if (event.target instanceof Node && !mobileMenu.contains(event.target)) mobileMenu.open = false;
		};
		document.addEventListener('pointerdown', dismissMenu);
		window.addEventListener('scroll', updateHeader, { passive: true });
		window.addEventListener('pageshow', updateHeader);
		return () => {
			resizeObserver.disconnect();
			document.documentElement.style.removeProperty('--sticky-header-height');
			document.removeEventListener('pointerdown', dismissMenu);
			window.removeEventListener('scroll', updateHeader);
			window.removeEventListener('pageshow', updateHeader);
		};
	});
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape' && mobileMenu.open) {
			mobileMenu.open = false;
			mobileMenu.querySelector('summary')?.focus();
		}
	}}
/>

<a class="skip-link" href="#conteudo">{copy.common.skip}</a>
<div class="utility-bar">
	<div class="container utility-inner">
		<span><Icon name="pin" size={14} /> {copy.common.location}</span><span
			>{copy.common.trades}</span
		>
	</div>
</div>
<div class="header-shell">
	<header bind:this={header} class="site-header" class:is-compact={compact}>
		<div class="container header-inner">
			<a
				class="brand"
				href={`${base}${copy.path}`}
				aria-label={`${business.name} — ${copy.common.home}`}
			>
				<span class="brand-mark"><LogoIcon size={36} /></span>
				<span class="brand-name"
					>Estores<span>Sem Problema<span class="brand-dot">.</span></span></span
				>
			</a>
			<nav class="desktop-nav" aria-label={copy.common.mainNav}>
				{#each copy.navigation as item}<a href={item.href}>{item.label}</a>{/each}
			</nav>
			<div class="header-actions">
				<div class="desktop-language"><LanguageSwitcher /></div>
				<a
					class="button button-small"
					href={`tel:${business.phone}`}
					aria-label={`${copy.common.call} ${business.phoneLabel}`}
					><Icon name="phone" size={17} /><span>{business.phoneLabel}</span></a
				>
			</div>
		</div>
		<nav class="mobile-nav" aria-label={copy.common.mobileNav}>
			<details class="mobile-menu" bind:this={mobileMenu}>
				<summary>{copy.common.menu}<span aria-hidden="true" class="menu-chevron"></span></summary>
				<div class="mobile-menu-links">
					{#each copy.navigation as item}
						<a
							href={item.href}
							onclick={() => {
								mobileMenu.open = false;
							}}>{item.label}</a
						>
					{/each}
				</div>
			</details>
			<LanguageSwitcher />
		</nav>
	</header>
</div>
