<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import ServiceArea from '$lib/components/ServiceArea.svelte';
	import Faq from '$lib/components/faq/Faq.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileContactBar from '$lib/components/MobileContactBar.svelte';
</script>

<Header />
<main id="conteudo" tabindex="-1">
	<Hero />
	<Services />
	<Process />
	<ServiceArea />
	<Faq />
	<Contact />
</main>
<Footer />
<MobileContactBar />
