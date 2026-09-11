<script lang="ts">
	import './layout.css';
	import "../app.css";
	// import favicon from '/window-blind.ico';

	export const prerender = true
	
	let { children } = $props();
</script>

<!-- <svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://estoresemproblema.com/" />
	
	<title>Reparação de Estores - Leiria</title>

	<meta property="og:title" content="Reparação de Estores" />
	<meta property="og:description" content="
		Descubra serviços profissionais de instalação e reparação de estores em Leiria e áreas circundantes com a nossa equipa de especialistas 
		qualificados de confiança. Trabalhamos com todos os tipos de estores — manuais, elétricas, interiores e exteriores — utilizando materiais de alta qualidade e técnicas modernas para garantir 
		durabilidade, segurança e funcionamento suave. Quer precise de instalar um novo sistema de obturadores, de uma atualização de manual para elétrico, ou de reparações rápidas para componentes, 
		motores, correias ou problemas de alinhamento danificados, os nossos especialistas fornecem soluções fiáveis e eficientes, adaptadas à sua casa ou negócio. Servindo Leiria, Marinha Grande,
		Batalha, Pombal, Ourém e regiões próximas, combinamos conhecimento técnico com um serviço ao cliente ágil para manter a sua propriedade segura, confortável e visualmente apelativa. 
		Com anos de experiência na indústria, preços competitivos e um compromisso com a excelência, somos os profissionais de estandartes de referência no distrito de Leiria para instalações, manutenção e reparações urgentes.
		Escolha uma empresa local que priorize o artesanato de qualidade e resultados duradouros para cada tipo de sistema de persianas." />
</svelte:head> -->

<svelte:head>
	<link rel="icon" href="/window-blind.ico" />
	<link rel="canonical" href="https://estoresemproblema.com/" />

	<title>Reparação de Estores em Leiria | Estores Sem Problema</title>

	<meta
		name="description"
		content="Reparação e montagem de estores em Leiria. Reparação de estores manuais e elétricos, interiores e exteriores, com serviço rápido e profissional."
	/>

	<meta property="og:title" content="Reparação de Estores em Leiria | Estores Sem Problema" />
	<meta
		property="og:description"
		content="Reparação e montagem de estores em Leiria. Reparação de estores manuais e elétricos, interiores e exteriores, com serviço rápido e profissional."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://estoresemproblema.com/" />

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "HomeAndConstructionBusiness",
			"name": "Estores Sem Problema",
			"url": "https://estoresemproblema.com/",
			"telephone": "+351935783857",
			"description": "Reparação, instalação e manutenção de estores manuais e elétricos na zona de Leiria e arredores.",
			"image": "https://estoresemproblema.com/images/hero.jpg",
			"address": {
				"addressLocality": "Leiria",
				"addressCountry": "PT"
			},
			"areaServed": [
				{
					"@type": "City",
					"name": "Leiria"
				},
				{
					"@type": "City",
					"name": "Marinha Grande"
				},
				{
					"@type": "City",
					"name": "Batalha"
				},
				{
					"@type": "City",
					"name": "Pombal"
				},
				{
					"@type": "City",
					"name": "Ourém"
				}
			],
			"makesOffer": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Reparação de estores",
						"serviceType": "Reparação de estores"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Instalação de estores",
						"serviceType": "Instalação de estores"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Reparação de estores elétricos",
						"serviceType": "Reparação de estores elétricos"
					}
				}
			]
		})}
	</script>

</svelte:head>

{@render children()}