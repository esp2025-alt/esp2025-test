<script lang="ts">
	import Question from './Question.svelte';
	import { getContext, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import { useIntersection } from '$lib/func/useIntersect';

	let dragWidth:any = getContext('ajustableWidth');

	export let title:string = "";
	export let text:string = "";

    export let questions:Array<[string, string]> = [];

	let openAns: number | null = null;
	const toggleAnswer = (divId: number | null) => {
		if (openAns === divId) {
			openAns = null;
		} else {
			openAns = divId;
		}
	};

	let sectionRef:HTMLElement;

	let isMounted:boolean = false;
	onMount(() => {
        useIntersection(sectionRef, { threshold: 0.1 }, () => {
            isMounted = true;
        });
    });
</script>

<div class="z-10 pt-[16%] md:pt-8 overflow-hidden">
	<div class="md:flex items-center">
		<div class="relatve md:block md:sticky top-[6rem] md:w-[40%] md:px-12">
			<h1 class="text-center text-xl md:text-[2.0vw] mx-12 md:mx-0 font-bold mb-6 md:mb-3">
				{title}
			</h1>
			<div class="hidden md:block absolute bottom-0 left-1/6 rotate-1 w-2/3 h-0.5 bg-action-300"></div>
			<p class="text-sm w-full text-center md:text-left md:w-[80%] mt-4">
				{text}
			</p>
		</div>

		<div 
			bind:this={sectionRef} 
			class:mounted={isMounted} 
		 	class="w-full md:w-[60%]"
		>
			{#each { length: questions.length } as x, i}
				<!-- svelte-ignore empty-block -->
				
				{#if isMounted}
					<div transition:fly={{ delay: (i * 250) + 250, duration: 600, x: 300, easing: quintIn }}
						class="{i + 1 < questions.length ? 'border-b' : ''} {dragWidth > 50 ? 'border-amber-500' : 'border-neutral-950'} duration-500"
					>
						<div class="mx-8 md:mr-[6vw]">
							<Question
								onBtnClick={toggleAnswer}
								{openAns}
								btnNum={i}
								qst={questions[i][0]}
								ans={questions[i][1]}
							></Question>				
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
