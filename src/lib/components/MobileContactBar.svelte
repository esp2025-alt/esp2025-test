<script lang="ts">
	import { onMount } from 'svelte';
	import { useContent } from '$lib/content/context';
	import { business } from '$lib/content/site';
	import Icon from './Icon.svelte';

	const content = useContent();
	let copy = $derived(content());
	let visible = $state(false);
	let bar: HTMLElement;

	onMount(() => {
		const heroActions = document.getElementById('hero-contact-actions');
		if (!heroActions) return;

		const mobile = window.matchMedia('(max-width: 760px)');
		let frame = 0;
		const updateVisibility = () => {
			frame = 0;
			visible = mobile.matches && heroActions.getBoundingClientRect().bottom <= 0;
		};
		const scheduleUpdate = () => {
			if (!frame) frame = requestAnimationFrame(updateVisibility);
		};
		// Check position even when an anchor jumps from below to above the viewport.
		updateVisibility();
		window.addEventListener('scroll', scheduleUpdate, { passive: true });
		window.addEventListener('resize', scheduleUpdate);
		window.addEventListener('pageshow', scheduleUpdate);
		const heroObserver = new ResizeObserver(scheduleUpdate);
		heroObserver.observe(heroActions.closest('.hero') ?? heroActions);

		// Reserve the actual height, including enlarged text and the phone's safe area.
		const resizeObserver = new ResizeObserver(() => {
			document.documentElement.style.setProperty(
				'--mobile-contact-height', `${bar.getBoundingClientRect().height}px`
			);
		});
		resizeObserver.observe(bar);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', scheduleUpdate);
			window.removeEventListener('resize', scheduleUpdate);
			window.removeEventListener('pageshow', scheduleUpdate);
			heroObserver.disconnect();
			resizeObserver.disconnect();
			document.documentElement.style.removeProperty('--mobile-contact-height');
		};
	});
</script>

<div class="mobile-contact-spacer" aria-hidden="true"></div>
<nav bind:this={bar} class="mobile-contact-bar" aria-label={copy.mobileContact.label} hidden={!visible}>
	<a class="button" href={`tel:${business.phone}`} aria-label={`${copy.common.call} ${business.phone}`}>
		<Icon name="phone" size={20} />{copy.mobileContact.call}
	</a>
	<a class="button button-outline" href={business.whatsapp} aria-label={copy.contact.message}>
		<Icon name="message" size={20} />WhatsApp
	</a>
</nav>
