<script lang="ts">
	import { useContent } from '$lib/content/context';

	const content = useContent();
	let copy = $derived(content());
</script>

<section class="section process" id="como-funciona" aria-labelledby="process-title">
	<div class="container">
		<div class="section-heading">
			<div>
				<p class="eyebrow">{copy.process.eyebrow}</p>
				<h2 id="process-title">{copy.process.title[0]}<br />{copy.process.title[1]}</h2>
			</div>
			<p>{copy.process.description}</p>
		</div>
		<ol class="steps-grid">
			{#each copy.steps as step, i}<li>
					<span class="step-number">0{i + 1}</span>
					<h3>{step.title}</h3>
					<p>{step.description}</p>
				</li>{/each}
		</ol>
	</div>
</section>
