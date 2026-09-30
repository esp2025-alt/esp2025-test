<script lang="ts">
	import { useContent } from '$lib/content/context';
	import { base } from '$app/paths';
	import { business } from '$lib/content/site';
	import Icon from './Icon.svelte';

	const content = useContent();
	let copy = $derived(content());
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow"><span class="eyebrow-line"></span> {copy.hero.eyebrow}</p>
			<h1 id="hero-title">{copy.hero.title[0]}<br />{copy.hero.title[1]} <span>{copy.hero.title[2]}</span></h1>
			<p class="hero-description">
				{copy.hero.intro} <strong>{copy.hero.location}</strong> {copy.hero.description}
			</p>
			<div class="button-group" id="hero-contact-actions">
				<a class="button" href={`tel:${business.phone}`}
					><Icon name="phone" size={18} /> {copy.hero.contact} <Icon name="arrow" size={18} /></a
				>
				<a class="button button-outline" href={business.whatsapp}
					><Icon name="message" size={19} /> WhatsApp</a
				>
			</div>
			<p class="call-note">{business.phoneLabel} · {copy.common.callNote}</p>
			<div class="hero-benefits">
				<span><Icon name="check" size={17} /> {copy.hero.benefits[0]}</span><span
					><Icon name="check" size={17} /> {copy.hero.benefits[1]}</span
				>
			</div>
		</div>
		<div class="hero-visual">
			<img
				class="hero-image"
				src={`${base}/images/hero-1600.webp`}
				srcset={`${base}/images/hero-800.webp 800w, ${base}/images/hero-1600.webp 1600w`}
				sizes="(max-width: 760px) 100vw, 50vw"
				alt={copy.hero.imageAlt}
				width="1600"
				height="1091"
				fetchpriority="high"
			/>
			<div class="image-label"><span class="label-dot"></span> {copy.hero.label}</div>
			<div class="hero-caption">
				<span>{copy.hero.caption}</span><strong>{copy.hero.comfort}</strong><a
					href="#servicos"
					aria-label={copy.hero.explore}><Icon name="arrow" size={23} /></a
				>
			</div>
		</div>
	</div>
</section>
