<script lang="ts">
	import { useContent } from '$lib/content/context';
	import { business } from '$lib/content/site';
	import Icon from './Icon.svelte';

	const content = useContent();
	let copy = $derived(content());
</script>

<section class="section contact" id="contactos" aria-labelledby="contact-title">
	<div class="container contact-grid">
		<div>
			<p class="eyebrow">{copy.contact.eyebrow}</p>
			<h2 id="contact-title">{copy.contact.title[0]}<br />{copy.contact.title[1]}</h2>
			<p>{copy.contact.description[0]}<br />{copy.contact.description[1]}</p>
		</div>
		<div class="contact-options">
			<a class="contact-phone" href={`tel:${business.phone}`}
				><Icon name="phone" size={29} />{business.phoneLabel}<Icon name="arrow" size={25} /></a
			>
			<p class="call-note">{copy.common.callNote}</p>
			<div class="contact-links">
				<a href={business.whatsapp}><Icon name="message" size={19} />{copy.contact.message}</a
				><a href={`mailto:${business.email}`}><Icon name="mail" size={19} />{business.email}</a>
			</div>
		</div>
	</div>
</section>
