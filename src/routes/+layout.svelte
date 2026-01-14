<script lang="ts">
	import './layout.css';
	import "../app.css";
	import favicon from '$lib/assets/window-blind.svg';

	export const prerender = true
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://estoresemproblema.com/" />
	
	<title>Reparação de Estores - Leiria</title>
	<meta name="description" content="A description of this page." />
	<!-- <meta http-equiv="Content-Language" content="pt-PT"> -->

	<meta property="og:title" content="Reparação de Estores" />
	<meta property="og:description" content="
		Descubra serviços profissionais de instalação e reparação de estores em Leiria e áreas circundantes com a nossa equipa de especialistas 
		qualificados de confiança. Trabalhamos com todos os tipos de estores — manuais, elétricas, interiores e exteriores — utilizando materiais de alta qualidade e técnicas modernas para garantir 
		durabilidade, segurança e funcionamento suave. Quer precise de instalar um novo sistema de obturadores, de uma atualização de manual para elétrico, ou de reparações rápidas para componentes, 
		motores, correias ou problemas de alinhamento danificados, os nossos especialistas fornecem soluções fiáveis e eficientes, adaptadas à sua casa ou negócio. Servindo Leiria, Marinha Grande,
		Batalha, Pombal, Ourém e regiões próximas, combinamos conhecimento técnico com um serviço ao cliente ágil para manter a sua propriedade segura, confortável e visualmente apelativa. 
		Com anos de experiência na indústria, preços competitivos e um compromisso com a excelência, somos os profissionais de estandartes de referência no distrito de Leiria para instalações, manutenção e reparações urgentes.
		Escolha uma empresa local que priorize o artesanato de qualidade e resultados duradouros para cada tipo de sistema de persianas." />
	<!-- <meta property="og:image" content="/images/preview.jpg" />   -->
</svelte:head>

{@render children()}
