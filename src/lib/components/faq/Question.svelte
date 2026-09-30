<script lang="ts">
	let { question, answer }: { question: string; answer: string } = $props();
</script>

<details class="question">
	<summary>{question}<span class="question-indicator" aria-hidden="true"></span></summary>
	<p>{answer}</p>
</details>
