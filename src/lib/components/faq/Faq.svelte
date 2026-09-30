<script lang="ts">
	import { useContent } from '$lib/content/context';
	import Question from './Question.svelte';

	const content = useContent();
	let copy = $derived(content());
</script>

<section class="section faq-section" id="perguntas" aria-labelledby="faq-title">
	<div class="container faq-grid">
		<div>
			<p class="eyebrow">{copy.faqHeading.eyebrow}</p>
			<h2 id="faq-title">{copy.faqHeading.title[0]}<br />{copy.faqHeading.title[1]}</h2>
			<p class="faq-intro">
				{copy.faqHeading.description}
			</p>
		</div>
		<div class="questions">
			{#each copy.questions as item}<Question question={item.question} answer={item.answer} />{/each}
		</div>
	</div>
</section>
