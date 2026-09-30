<script lang="ts">
	import { useContent } from '$lib/content/context';
	import { business } from '$lib/content/site';
	import Icon from './Icon.svelte';

	const content = useContent();
	let copy = $derived(content());
</script>

<section class="section service-area" id="zona-de-servico" aria-labelledby="area-title">
	<div class="container area-grid">
		<div>
			<p class="eyebrow">{copy.area.eyebrow}</p>
			<h2 id="area-title">{copy.area.title[0]}<br />{copy.area.title[1]}</h2>
			<p class="area-description">
				{copy.area.description}
			</p>
			<a class="text-link" href={`tel:${business.phone}`}
				>{copy.area.confirm} <Icon name="arrow" size={18} /></a
			>
		</div>
		<div class="area-panel">
			<div class="area-panel-heading">
				<span class="location-icon"><Icon name="pin" size={25} /></span>
				<div>
					<h3>{copy.area.panelTitle}</h3>
					<p>{copy.common.location}</p>
				</div>
			</div>
			<ul>
				{#each business.areas as area}<li><Icon name="check" size={16} />{area}</li>{/each}
			</ul>
			<p class="area-note">{copy.area.note}</p>
		</div>
	</div>
</section>
