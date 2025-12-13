
<script lang="ts">
    export let title:string = "";
    export let desc:string = "";
</script>

<div class="border-neutral-300 border-b md:border-l">
    <div class="flex  items-center px-8 py-4 gap-8">
        <div>
            <slot></slot>
        </div>
        <div>
            <h6 class="font-bold text-xl mb-2">
                {title}
            </h6>
            <p class="text-sm ml-1">
                {desc}
            </p>
        </div>
    </div>    
</div>