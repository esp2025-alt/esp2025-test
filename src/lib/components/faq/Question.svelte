<script lang="ts">
	import { quintInOut } from "svelte/easing";
	import { slide } from "svelte/transition";

	export let onBtnClick: any;
	export let openAns: number | null;
	export let btnNum: number;

	export let qst: string = '';
	export let ans: string = '';
</script>

<div class="relative w-full">
	<button on:click={onBtnClick(btnNum)} 
		class="py-8 w-full duration-500 z-10 cursor-pointer"
	>
		<div class="flex justify-between hover:text-nuclear-mango-500 duration-500 items-center py-3 px-6">
			<p class="text-lg font-semibold text-left">
				{qst}
			</p>
			<div class="rotate-45">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="w-6 h-6 text-basic {openAns === btnNum ? "rotate45" : "rotateback"}"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</div>
		</div>
	</button>

	{#if openAns === btnNum}
		<div 
            transition:slide={{ duration: 500, easing: quintInOut, axis: 'y' }} 
            class="relative px-8 pt-2 pb-8 md:pb-12"
        >
			<slot name="ans"></slot>
			<p class="text-basic mt-3">
				{ans}
			</p>
		</div>
	{/if}
</div>

<style>
    .rotate45 {
        transform: rotate(45deg);
        transition:transform 0.5s ease;
    }
    .rotateback {
        transform: rotate(0deg);
        transition:transform 0.5s ease;
    }
</style>

