<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { business } from '$lib/content/site';
	import { provideContent, translations } from '$lib/content/context';
	import type { LayoutProps } from './$types';

	let { children, data }: LayoutProps = $props();
	let copy = $derived(translations[data.locale]);
	let canonical = $derived(`${business.url}${copy.path}`);
	provideContent(() => copy);
	$effect(() => {
		document.documentElement.lang = copy.lang;
	});
	let structuredData = $derived({
		'@context': 'https://schema.org',
		'@type': 'HomeAndConstructionBusiness',
		name: business.name,
		url: canonical,
		telephone: business.phone,
		email: business.email,
		description: copy.description,
		image: `${business.url}/images/hero-1600.webp`,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Leiria',
			addressCountry: 'PT'
		},
		areaServed: business.areas.map((name) => ({ '@type': 'City', name })),
		makesOffer: copy.services.map((service) => ({
			'@type': 'Offer',
			itemOffered: {
				'@type': 'Service',
				name: service.title,
				serviceType: copy.serviceType
			}
		}))
	});
</script>

<svelte:head>
	<link rel="icon" href={`${base}/favicon.ico`} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="pt-PT" href={`${business.url}/`} />
	<link rel="alternate" hreflang="en" href={`${business.url}/en/`} />
	<link rel="alternate" hreflang="x-default" href={`${business.url}/`} />
	<title>{copy.title}</title>
	<meta name="description" content={copy.description} />
	<meta name="theme-color" content="#122e41" />
	<meta property="og:title" content={copy.title} />
	<meta property="og:description" content={copy.description} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={copy.ogLocale} />
	<meta property="og:site_name" content={business.name} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={`${business.url}/images/hero-1600.webp`} />
	<meta property="og:image:alt" content={copy.hero.imageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

{@render children()}
