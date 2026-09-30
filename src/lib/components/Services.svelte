<script lang="ts">
	import { useContent } from '$lib/content/context';
	import { base } from '$app/paths';
	import Icon from './Icon.svelte';

	const content = useContent();
	let copy = $derived(content());
</script>

<section class="section services" id="servicos" aria-labelledby="services-title">
	<div class="container">
		<div class="section-heading">
			<div>
				<p class="eyebrow">{copy.servicesHeading.eyebrow}</p>
				<h2 id="services-title">{copy.servicesHeading.title[0]}<br />{copy.servicesHeading.title[1]}</h2>
			</div>
			<p>
				{copy.servicesHeading.description}
			</p>
		</div>
		<div class="services-grid">
			{#each copy.services as service}
				<article class="service-card">
					<div class="service-image">
						<img
							src={`${base}/images/${service.image}`}
							alt={service.alt}
							width="600"
							height="400"
							loading="lazy"
							decoding="async"
						/><span>{service.number}</span>
					</div>
					<div class="service-body">
						<h3>{service.title}</h3>
						<p>{service.description}</p>
						<ul>
							{#each service.details as detail}<li>
									<Icon name="check" size={16} />{detail}
								</li>{/each}
						</ul>
						<a class="text-link" href="#contactos" aria-label={`${copy.common.quote}: ${service.title}`}
							>{copy.common.quote} <Icon name="arrow" size={18} /></a
						>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
