import type { pt } from './pt';

export const en: typeof pt = {
	lang: 'en',
	ogLocale: 'en_GB',
	path: '/en/',
	title: 'Blind & Roller Shutter Repairs in Leiria | Estores Sem Problema',
	description:
		'Repairs, installation and maintenance for manual and electric blinds and roller shutters in Leiria and nearby towns. Contact us for a quote.',
	mobileContact: { label: 'Quick contact', call: 'Call' },
	common: {
		menu: 'Menu',
		skip: 'Skip to content',
		home: 'home',
		mainNav: 'Main navigation',
		mobileNav: 'Mobile navigation',
		footerNav: 'Footer navigation',
		language: 'Language',
		location: 'Leiria and nearby towns',
		trades: 'Repairs · Installation · Maintenance',
		call: 'Call',
		callNote: 'Portuguese mobile number. Your provider’s rates apply.',
		quote: 'Request a quote',
		faq: 'Frequently asked questions'
	},
	hero: {
		eyebrow: 'Comfort starts at home',
		title: ['Blinds?', 'No', 'problem.'],
		intro: 'Blind and roller shutter repairs and installation in',
		location: 'Leiria and nearby towns.',
		description: 'Let the light back in and bring privacy and comfort to your home.',
		contact: 'Get in touch',
		benefits: ['Manual and electric', 'Indoor and outdoor'],
		imageAlt: 'Blue building facade with exterior slatted blinds',
		label: 'Your home, in good hands.',
		caption: 'Small details.',
		comfort: 'More comfort, every day.',
		explore: 'Explore our services'
	},
	servicesHeading: {
		eyebrow: 'What we do',
		title: ['A solution for', 'every blind.'],
		description:
			'From simple mechanisms to electric systems, we take care of the details that make everyday life easier.'
	},
	process: {
		eyebrow: 'Simple, from start to finish',
		title: ['Less hassle.', 'More solutions.'],
		description: 'From your first enquiry to a working blind, here is what to expect.'
	},
	area: {
		eyebrow: 'Close to home',
		title: ['From Leiria,', 'to your door.'],
		description:
			'We work in Leiria and the surrounding towns. Contact us to arrange a visit to your home or workplace.',
		confirm: 'Check my location',
		panelTitle: 'Our service area',
		note: 'In another nearby town? Get in touch to see how we can help.'
	},
	faqHeading: {
		eyebrow: 'Before you call',
		title: ['Good questions.', 'Clear answers.'],
		description:
			'Every blind has its own story. If your question is not covered here, we are just a phone call away.'
	},
	contact: {
		eyebrow: 'Ready to get it sorted?',
		title: ['Do your blinds', 'need a hand?'],
		description: ['Tell us what is happening.', 'We will help you find the next step.'],
		message: 'Send a message on WhatsApp'
	},
	footer: {
		tagline: 'More light. More comfort. No problem.',
		description: 'Blind and roller shutter repairs and installation · Leiria, Portugal'
	},
	serviceType: 'Blind and roller shutter repairs and installation',
	navigation: [
		{ href: '#servicos', mobileLabel: 'Services', label: 'Services' },
		{ href: '#como-funciona', mobileLabel: 'Process', label: 'How it works' },
		{ href: '#zona-de-servico', mobileLabel: 'Area', label: 'Service area' },
		{ href: '#contactos', mobileLabel: 'Contact', label: 'Contact' }
	],
	services: [
		{
			number: '01',
			title: 'Manual blinds',
			image: 'manual.jpg',
			alt: 'An indoor blind being operated manually beside a window',
			description:
				'A broken strap or a blind that will not open? We repair the mechanism so it can move smoothly again.',
			details: ['Straps, winders and cranks', 'Slats, shafts and alignment']
		},
		{
			number: '02',
			title: 'Electric blinds',
			image: 'placeholder.jpg',
			alt: 'An electric roller shutter operated with a remote control',
			description:
				'More comfort at the touch of a button. We diagnose faults and find the right solution for your motorised system.',
			details: ['Motors, remotes and switches', 'Installation and motorisation']
		},
		{
			number: '03',
			title: 'Indoor and outdoor',
			image: 'exterior.jpg',
			alt: 'A technician working on an exterior roller shutter beside a window',
			description:
				'Privacy, light and protection to suit your space. We install and repair blinds and shutters for homes and businesses.',
			details: ['PVC and aluminium options', 'Installation, replacement and maintenance']
		}
	],
	steps: [
		{
			title: 'Tell us what is wrong',
			description: 'Call or send a message. A photo can help us understand the problem.'
		},
		{
			title: 'Understand the solution',
			description: 'We assess the situation and explain the work needed and the quote.'
		},
		{
			title: 'Arrange a visit',
			description: 'We agree on a date and time with you, subject to availability.'
		},
		{
			title: 'Enjoy your comfort again',
			description: 'We carry out the work and check that the blind operates correctly with you.'
		}
	],
	questions: [
		{
			question: 'What types of blinds do you repair?',
			answer:
				'We repair manual and electric blinds and roller shutters, indoors and outdoors. Tell us what type you have and what has gone wrong. If possible, send a photo on WhatsApp to help us assess the situation.'
		},
		{
			question: 'How much does a repair cost?',
			answer:
				'The price depends on the fault, the type of blind and any parts needed. Contact us so we can assess your case and explain the quote before proceeding with the work.'
		},
		{
			question: 'How long does the work take?',
			answer:
				'Replacing a strap is usually simpler than repairing a motor. Once we understand the problem, we can estimate the time needed and arrange a visit, subject to availability.'
		},
		{
			question: 'Can a manual blind be converted to electric?',
			answer:
				'In many cases, yes. We need to check the condition and dimensions of the blind, the available space and the electrical supply. We can help you decide whether motorisation is suitable.'
		},
		{
			question: 'Which areas do you cover?',
			answer:
				'We work in Leiria, Marinha Grande, Batalha, Pombal and Ourém. If you are in a nearby town, contact us to check whether we can visit.'
		},
		{
			question: 'How can I check the warranty terms?',
			answer:
				'The terms depend on the work and the parts used. Ask us when requesting a quote so you know which conditions apply to your repair or installation.'
		}
	]
};
