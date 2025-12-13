<script lang="ts">
    let { 
        title = "",
        imgurl = "",
        desc = "",
        id,
    } = $props();  
</script>

<div class="hidden md:block group shadow-md hover:shadow-2xl rounded-3xl w-full hover:scale-110 duration-300 hover:bg-neutral-200">
    <div class="">
        <div class="">
            <img src={imgurl} alt="" class="h-[20rem] rounded-t-3xl object-cover grayscale group-hover:grayscale-0 duration-300 pb-[6%]">
        </div>
        <div class="px-[10%] pt-[4%]">
            <div class="pb-[8%]">
                <h5 class="desc-title text-center text-neutral-900 group-hover:text-primary-500 duration-300">
                    {title}
                </h5>
            </div>
            <div class="pb-[16%]">
                <p class="text-sm">
                    {desc}
                </p>
            </div>
        </div>
    </div>
</div>

<!-- small screen -->
<div class="md:hidden">
    <div class="base-margin-box">
        <img src={imgurl} alt="" class="w-full object-center">
        <div class="text-center pt-12 pb-8">
            <h5 class="desc-title">
                {title}
            </h5>
        </div>
        <div class="">
            <p class="">
                {desc}
            </p>
        </div>
    </div>
</div>