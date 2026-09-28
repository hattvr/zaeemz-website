export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: {enabled: true},
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			title: "Zaeem Zahid | Full-Stack Developer",
			meta: [
				{
					name: "description",
					content:
						"Zaeem Zahid — Full-Stack Developer. Resume, experience, and projects.",
				},
			],
			link: [
				{rel: "icon", href: "/favicon/favicon.svg", type: "image/svg+xml"},
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
		},
	},
});
