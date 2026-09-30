<script lang="ts">
	let { question, answer }: { question: string; answer: string } = $props();
</script>

<details class="question" name="service-faq">
	<summary>{question}<span class="question-indicator" aria-hidden="true"></span></summary>
	<div class="question-answer"><p>{answer}</p></div>
</details>
