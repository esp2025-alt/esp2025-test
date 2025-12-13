<script lang="ts">
    import { split } from "$lib/func/contacts";
	import { getContext, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintIn } from 'svelte/easing';
	import { useIntersection } from '$lib/func/useIntersect';

    let {
        phone = ""
    } = $props();
</script>

<section 
    class="relative h-screen bg-blue-200 bg-[url(/images/hero.jpg)] bg-cover"
>
    <div
        class="w-full md:w-2/3"
    >
        <div class="text-center pt-32 px-8">
            <div class="mb-16">
                <h1 transition:fly={{ delay: 250, duration: 600, x: 300, easing: quintIn }}
                    class="text-6xl md:text-7xl lg:text-8xl text-neutral-200 font-extrabold">
                    Estores? Sem problema.
                </h1>
            </div>
            <div class="md:flex justify-center items-center md:gap-8">
                <a href="tel:+351{phone}">
                    <div class="bg-action-300 rounded-full py-2.5 md:py-3.5 px-10 md:px-20 lg:px-24 w-[90%] md:w-auto">
                        <p class="text-neutral-200 font-extrabold text-2xl md:text-3xl">
                            +351 {split(phone)}
                        </p>
                    </div>
                </a>
                <a href="https://wa.me/351{phone}" class="hidden md:block">
                    <div
                        class="animate-wiggle text-neutral-200 cursor-pointer rounded-full hover:text-action-300 hover:-translate-y-2 duration-500 w-16 md:w-20 hover:shadow-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            ><g fill="none" fill-rule="evenodd"
                                ><path
                                    d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                                /><path
                                    fill="currentColor"
                                    d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"
                                />
                            </g>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="absolute bottom-12 right-8 hidden xl:block">
        <div class="flex justify-end px-12 pt-18">
            <h4 class="text-3xl font-bold text-neutral-200 w-[31%]">
                Fazemos montagem e reparacao de qualquer tipo de estores na zona de <span class="text-action-300 font-extrabold">Leiria</span>
            </h4>
        </div>
    </div>
</section>

<style lang="postcss">
    .wiggle {
        animate-wiggle: wiggle 1s ease-in-out infinite;
    }
    @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fade {
    animation: fadeIn 0.4s ease-out forwards;
  }
    @theme {
        @keyframes wiggle {
            0%,
            100% {
                transform: rotate(-3deg);
            }
            50% {
                transform: rotate(3deg);
            }
        }
    }
</style>
