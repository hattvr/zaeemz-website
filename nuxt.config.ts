export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: {enabled: true},
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			titleTemplate: "%s | Software Engineer",
			title: "Zaeem Zahid",
			meta: [
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1.0",
				},
				{name: "theme-color", content: "#eef6fa"},
				{
					name: "description",
					content:
						"Zaeem Zahid is a Software Engineer at ADP and full-stack developer specializing in scalable software, APIs, databases, cloud infrastructure, and AI-powered workflows.",
				},
				{
					name: "keywords",
					content:
						"Zaeem Zahid, Software Engineer, Full-Stack Developer, ADP, Python, Java, Spring Boot, AWS, Kubernetes, AI, APIs, MongoDB",
				},
				{name: "author", content: "Zaeem Zahid"},
				{name: "robots", content: "index, follow"},
				{name: "application-name", content: "Zaeem Zahid"},
				{
					name: "apple-mobile-web-app-title",
					content: "Zaeem Zahid",
				},
				{name: "mobile-web-app-capable", content: "yes"},
				{property: "og:title", content: "Zaeem Zahid | Software Engineer"},
				{
					property: "og:description",
					content:
						"Software Engineer at ADP and full-stack developer building scalable software, APIs, cloud systems, and AI-powered workflows.",
				},
				{
					property: "og:image",
					content: "https://zaeemz.com/images/misc/profile.png",
				},
				{property: "og:image:width", content: "1122"},
				{property: "og:image:height", content: "1122"},
				{property: "og:image:type", content: "image/png"},
				{property: "og:image:alt", content: "Zaeem Zahid"},
				{property: "og:url", content: "https://zaeemz.com"},
				{property: "og:type", content: "website"},
				{property: "og:site_name", content: "Zaeem Zahid"},
				{name: "twitter:card", content: "summary_large_image"},
				{name: "twitter:title", content: "Zaeem Zahid | Software Engineer"},
				{
					name: "twitter:description",
					content:
						"Software Engineer at ADP and full-stack developer building scalable software, APIs, cloud systems, and AI-powered workflows.",
				},
				{
					name: "twitter:image",
					content: "https://zaeemz.com/images/misc/profile.png",
				},
				{name: "twitter:image:alt", content: "Zaeem Zahid"},
			],
			link: [
				{rel: "canonical", href: "https://zaeemz.com"},
				{
					rel: "icon",
					href: "/favicon/favicon.svg",
					type: "image/svg+xml",
				},
				{rel: "icon", href: "/favicon/favicon.ico", sizes: "any"},
				{
					rel: "icon",
					href: "/favicon/favicon-96x96.png",
					type: "image/png",
					sizes: "96x96",
				},
				{
					rel: "apple-touch-icon",
					href: "/favicon/apple-touch-icon.png",
					sizes: "180x180",
				},
				{rel: "manifest", href: "/favicon/site.webmanifest"},
				{rel: "preconnect", href: "https://fonts.googleapis.com"},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "anonymous",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap",
				},
			],
			script: [
				{
					type: "application/ld+json",
					innerHTML: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Zaeem Zahid",
						url: "https://zaeemz.com",
						image: "https://zaeemz.com/images/misc/profile.png",
						jobTitle: "Software Engineer",
						email: "mailto:zaeemz123@gmail.com",
						alumniOf: [
							{
								"@type": "CollegeOrUniversity",
								name: "Rutgers University",
							},
							{
								"@type": "EducationalOrganization",
								name: "Carteret High School",
							},
						],
						sameAs: [
							"https://www.linkedin.com/in/zaeemz/",
							"https://github.com/hattvr",
							"https://www.behance.net/hattvr",
						],
					}),
				},
			],
		},
	},
});
