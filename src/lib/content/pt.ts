// Portuguese copy is the translation schema. Keep all keys in en.ts aligned.
const navigation = [
	{ href: '#servicos', mobileLabel: 'Serviços', label: 'Serviços' },
	{ href: '#como-funciona', mobileLabel: 'Passos', label: 'Como funciona' },
	{ href: '#zona-de-servico', mobileLabel: 'Zona', label: 'Onde estamos' },
	{ href: '#contactos', mobileLabel: 'Contacto', label: 'Contactos' }
];
const services = [
	{
		number: '01',
		title: 'Estores manuais',
		image: 'manual.jpg',
		alt: 'Estore interior acionado manualmente junto a uma janela',
		description:
			'Uma fita partida ou um estore que já não sobe? Tratamos dos mecanismos para voltar a abrir e fechar sem esforço.',
		details: ['Fitas, enroladores e manivelas', 'Lamelas, eixos e alinhamento']
	},
	{
		number: '02',
		title: 'Estores elétricos',
		image: 'placeholder.jpg',
		alt: 'Estore elétrico acionado com um comando',
		description:
			'Mais conforto, à distância de um botão. Diagnosticamos avarias e encontramos a solução para o seu sistema motorizado.',
		details: ['Motores, comandos e interruptores', 'Instalação e motorização']
	},
	{
		number: '03',
		title: 'Interiores e exteriores',
		image: 'exterior.jpg',
		alt: 'Técnico a trabalhar num estore exterior junto a uma janela',
		description:
			'Privacidade, luz e proteção à medida do seu espaço. Instalamos e reparamos estores para a sua casa ou negócio.',
		details: ['Soluções em PVC e alumínio', 'Montagem, substituição e manutenção']
	}
];
const steps = [
	{
		title: 'Conte-nos o que se passa',
		description: 'Ligue ou envie uma mensagem. Uma fotografia pode ajudar a perceber o problema.'
	},
	{
		title: 'Conheça a solução',
		description: 'Avaliamos a situação e esclarecemos o trabalho necessário e o orçamento.'
	},
	{
		title: 'Combine a visita',
		description: 'Encontramos consigo uma data e um horário, de acordo com a disponibilidade.'
	},
	{
		title: 'Volte ao seu conforto',
		description: 'Realizamos o serviço e verificamos o funcionamento do estore consigo.'
	}
];
const questions = [
	{
		question: 'Que tipos de estores reparam?',
		answer:
			'Reparamos estores manuais e elétricos, interiores e exteriores. Diga-nos o tipo de estore e o problema que encontrou. Se possível, envie uma fotografia por WhatsApp para nos ajudar a avaliar a situação.'
	},
	{
		question: 'Quanto custa a reparação?',
		answer:
			'O valor depende da avaria, do tipo de estore e das peças necessárias. Entre em contacto para avaliarmos o seu caso e esclarecermos o orçamento antes de avançar com o serviço.'
	},
	{
		question: 'Quanto tempo demora o serviço?',
		answer:
			'Uma substituição de fita costuma ser mais simples do que uma intervenção num motor. Após percebermos o problema, indicamos o tempo previsto e combinamos a visita de acordo com a disponibilidade.'
	},
	{
		question: 'É possível transformar um estore manual em elétrico?',
		answer:
			'Em muitos casos, sim. É necessário avaliar o estado e as dimensões do estore, o espaço disponível e a alimentação elétrica. Podemos ajudar a perceber se a motorização é adequada ao seu caso.'
	},
	{
		question: 'Em que zonas trabalham?',
		answer:
			'Prestamos serviço em Leiria, Marinha Grande, Batalha, Pombal e Ourém. Se está numa localidade próxima, contacte-nos para confirmar a possibilidade de deslocação.'
	},
	{
		question: 'Como posso esclarecer as condições de garantia?',
		answer:
			'As condições dependem do serviço e das peças utilizadas. Peça-nos essa informação ao solicitar o orçamento, para conhecer as condições aplicáveis à sua reparação ou instalação.'
	}
];

export const pt = {
	lang: 'pt-PT',
	ogLocale: 'pt_PT',
	path: '/',
	title: 'Reparação de Estores em Leiria | Estores Sem Problema',
	description:
		'Reparação, instalação e manutenção de estores manuais e elétricos em Leiria e arredores. Fale connosco e peça um orçamento.',
	mobileContact: { label: 'Contactos rápidos', call: 'Ligar' },
	common: {
		menu: 'Menu',
		skip: 'Saltar para o conteúdo',
		home: 'início',
		mainNav: 'Navegação principal',
		mobileNav: 'Navegação móvel',
		footerNav: 'Navegação do rodapé',
		language: 'Idioma',
		location: 'Leiria e arredores',
		trades: 'Reparação · Instalação · Manutenção',
		call: 'Ligar para',
		callNote: 'Chamada para a rede móvel nacional',
		quote: 'Pedir orçamento',
		faq: 'Perguntas frequentes'
	},
	hero: {
		eyebrow: 'O conforto começa em casa',
		title: ['Estores?', 'Sem', 'problema.'],
		intro: 'Reparação e instalação de estores em',
		location: 'Leiria e arredores.',
		description:
			'Soluções para voltar a dar à sua casa a luz, a privacidade e o conforto que merece.',
		contact: 'Fale connosco',
		benefits: ['Manuais e elétricos', 'Interiores e exteriores'],
		imageAlt: 'Fachada azul com estores exteriores de lâminas',
		label: 'A sua casa, em boas mãos.',
		caption: 'Pequenos detalhes.',
		comfort: 'Mais conforto todos os dias.',
		explore: 'Conhecer os nossos serviços'
	},
	servicesHeading: {
		eyebrow: 'O que fazemos',
		title: ['Uma solução para', 'cada estore.'],
		description:
			'Do mecanismo mais simples ao sistema elétrico, cuidamos do que faz a diferença no seu dia a dia.'
	},
	process: {
		eyebrow: 'Simples, do início ao fim',
		title: ['Menos complicações.', 'Mais soluções.'],
		description: 'Desde o primeiro contacto até ao estore a funcionar, saiba com o que contar.'
	},
	area: {
		eyebrow: 'Perto de si',
		title: ['De Leiria,', 'até à sua casa.'],
		description:
			'Prestamos serviço em Leiria e nas localidades à volta. Fale connosco para combinar uma deslocação à sua casa ou ao seu espaço de trabalho.',
		confirm: 'Confirmar a minha localidade',
		panelTitle: 'A nossa zona de serviço',
		note: 'Está noutra localidade próxima? Vamos perceber como podemos ajudar.'
	},
	faqHeading: {
		eyebrow: 'Antes de ligar',
		title: ['Boas perguntas.', 'Respostas claras.'],
		description:
			'Cada estore tem a sua história. Se a sua dúvida não está aqui, estamos à distância de uma chamada.'
	},
	contact: {
		eyebrow: 'Vamos resolver?',
		title: ['O seu estore precisa', 'de uma ajuda?'],
		description: ['Conte-nos o que se passa.', 'Encontramos consigo o próximo passo.'],
		message: 'Enviar mensagem no WhatsApp'
	},
	footer: {
		tagline: 'Mais luz. Mais conforto. Sem problema.',
		description: 'Reparação e instalação de estores · Leiria, Portugal'
	},
	serviceType: 'Reparação e instalação de estores',
	navigation,
	services,
	steps,
	questions
};
