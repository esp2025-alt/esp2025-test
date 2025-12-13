<script lang="ts">
    import { split } from "$lib/func/contacts";
    import { onMount } from "svelte";

    export let phone = "";

    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 10;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<header
    class="{ scrolled ? "fixed top-0 left-0 bg-neutral-200 shadow-md" : "absolute top-0 left-0 bg-transparent" } 
    duration-300, z-50 transition-all w-full"
>
    <div class="{ scrolled ? "py-2" : "py-4"} px-6 duration-300 flex items-center justify-between">
        <div class="w-max">
            <a href="/" class="flex items-center gap-4">
                <div class="{ scrolled ? "text-primary-500" : "text-neutral-200" }">
                    <svg
                        fill="currentcolor"
                        height={ scrolled ? "28px" : "32px"}
                        width={ scrolled ? "28px" : "32px"}
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 438 438"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        enable-background="new 0 0 438 438"
                        class="duration-300"
                    >
                        <path
                            d="m399,381h-21.5v-157h8.5c4.143,0 7.5-3.358 7.5-7.5v-177.972c7.32-2.975 12.5-10.153 12.5-18.528 0-11.028-8.972-20-20-20s-20,8.972-20,20c0,8.375 5.18,15.553 12.5,18.528v20.472h-319v-20.472c7.32-2.975 12.5-10.153 12.5-18.528 0-11.028-8.972-20-20-20s-20,8.972-20,20c0,8.375 5.18,15.553 12.5,18.528v177.972c0,4.142 3.357,7.5 7.5,7.5h8.5v157h-21.5c-4.143,0-7.5,3.358-7.5,7.5v42c0,4.142 3.357,7.5 7.5,7.5h360c4.143,0 7.5-3.358 7.5-7.5v-42c0-4.142-3.357-7.5-7.5-7.5zm-339.5-269.5h319v22.5h-319v-22.5zm0,37.5h319v22.5h-319v-22.5zm326.5-134c2.757,0 5,2.243 5,5s-2.243,5-5,5-5-2.243-5-5 2.243-5 5-5zm-7.5,59v22.5h-319v-22.5h319zm-326.5-59c2.757,0 5,2.243 5,5s-2.243,5-5,5-5-2.243-5-5 2.243-5 5-5zm7.5,171.5h319v22.5h-319v-22.5zm277,95.876l-94.571,60.417v-118.793h94.571v58.376zm0,17.801v52.823h-82.685l82.685-52.823zm-140.429-17.786l-94.571,60.418v-16.2l94.571-60.417v16.199zm0,17.8v52.809h-82.661l82.661-52.809zm0-51.8l-94.571,60.418v-84.809h94.571v24.391zm-120.571-24.391h11v136.5c0,4.142 3.357,7.5 7.5,7.5h109.571c4.143,0 7.5-3.358 7.5-7.5v-136.5h15.857v136.5c0,4.142 3.357,7.5 7.5,7.5h109.572c4.143,0 7.5-3.358 7.5-7.5v-136.5h11v157h-287v-157zm316,199h-345v-27h345v27z"
                        />
                    </svg>
                </div>
                <div
                    class="{ scrolled ? "text-primary-500 text-2xl" : "text-neutral-200 text-3xl" } font-extrabold tracking-tight duration-300"
                >
                    ESP
                </div>
            </a>
        </div>
        {#if scrolled}
            <a href="https://wa.me/351{phone}">
                <div class="flex items-center bg-action-300 pl-6 pr-4 py-1 rounded-full text-neutral-100">
                    <div class="pr-4">
                        {split(phone)}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        width="22px"
                        height="22px"
                    >
                        <g fill="none" fill-rule="evenodd">
                            <path
                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                            />
                            <path fill="currentColor"
                                d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636"
                            />
                        </g>
                
                    </svg>            
                </div>
            </a>
        {/if}
    </div>
</header>
