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
