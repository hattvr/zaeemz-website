export type ProjectFeatureIcon =
	| "scale"
	| "database"
	| "globe"
	| "sparkles"
	| "layers"
	| "monitor"
	| "bell"
	| "chat";

export interface ProjectFeature {
	title: string;
	note: string;
	icon: ProjectFeatureIcon;
}

export interface ProjectDescriptionItem {
	label: string;
	value?: string;
	href?: string;
}

export interface ProjectStat {
	label: string;
	value: string;
}

export interface Project {
	slug: string;
	number: string;
	name: string;
	kind: string;
	note: string;
	color: "lime" | "coral" | "blue";
	banner: string;
	href: string;
	stack?: string;
	insight: string;
	/** When set, the detail page fetches live counters from this API route and falls back to `stats` on error. */
	statsEndpoint?: string;
	stats: ProjectStat[];
	features: ProjectFeature[];
	description: ProjectDescriptionItem[];
	technology: string[];
}

export const projects: Project[] = [
	{
		slug: "genshin-wizard",
		number: "01",
		name: "Genshin Wizard",
		kind: "Discord Platform",
		note: "A Discord platform serving 7.9M+ users across thousands of servers.",
		color: "lime",
		banner: "/images/projects/gw-banner.png",
		href: "https://genshinwizard.com",
		insight:
			"Uses advanced python functionality and MongoDB (for database management) to create a Discord bot that supports a multitude of tools for Genshin users. This bot can track in-game statistics, progression, display guides, and showcase them beautifully via embedded messages on Discord. This project has reached over 7.9 million users and is currently used across thousands of different servers on the Discord space; the Genshin Wizard databases maintain and process millions of entries as efficiently as possible.",
		statsEndpoint: "/api/stats/genshin-wizard",
		stats: [
			{label: "Servers", value: "80,600+"},
			{label: "Users Registered", value: "135,800+"},
			{label: "Commands", value: "200+"},
		],
		features: [
			{
				title: "Autoscaling Architecture",
				note: "Utilizing Kubernetes orchestration, the Genshin Wizard project dynamically adjusts the application's scaling in accordance with its shard count, ensuring optimal resource allocation and operational efficiency.",
				icon: "scale",
			},
			{
				title: "Optimized Database Management",
				note: "The Genshin Wizard Project leverages MongoDB in a highly optimized manner to deliver efficient data management. This strategic utilization of MongoDB ensures streamlined data storage and retrieval, enhancing the overall performance and responsiveness of the application.",
				icon: "database",
			},
			{
				title: "Localization Support",
				note: "The Genshin Wizard Project strategically employs CrowdIn for localization efforts, allowing for a systematic and efficient approach to translating and adapting the application's content for diverse language audiences, ensuring a seamless and inclusive user experience.",
				icon: "globe",
			},
		],
		description: [
			{label: "Website", href: "https://www.genshinwizard.com/"},
			{
				label: "Documentation",
				href: "https://docs.genshinwizard.com/",
			},
			{
				label: "Localization",
				href: "https://www.genshinwizard.com/translate",
			},
			{label: "Founded", value: "February 2021"},
		],
		technology: [
			"Python",
			"TypeScript",
			"Kubernetes",
			"Docker",
			"Redis",
			"MongoDB",
		],
	},
	{
		slug: "alternalize",
		number: "02",
		name: "Alternalize",
		kind: "AI-Powered Localization Platform",
		note: "An AI-powered localization platform that streamlines internationalization for companies, automating translation and localization workflows across products and content.",
		color: "blue",
		banner: "/images/projects/alternalize-banner.png",
		href: "https://alternalize.com",
		stack: "Python, AI/LLMs, Nuxt, Vue, APIs, MongoDB",
		insight:
			"An AI-powered localization platform that streamlines internationalization for companies by automating translation and localization workflows across products and content. Designed full-stack workflows integrating AI services and APIs to efficiently generate, manage, and organize localized content for multiple languages and markets, reducing manual localization effort and enabling companies to efficiently expand their products to international audiences.",
		stats: [],
		features: [
			{
				title: "AI-Powered Translation",
				note: "Automates translation and localization workflows across products and content using integrated AI services and large language models.",
				icon: "sparkles",
			},
			{
				title: "Full-Stack Workflow Design",
				note: "Full-stack workflows integrate AI services and APIs to efficiently generate, manage, and organize localized content for multiple languages and markets.",
				icon: "layers",
			},
			{
				title: "Scalable Web Platform",
				note: "A scalable web platform focused on reducing manual localization effort and enabling companies to expand their products to international audiences.",
				icon: "monitor",
			},
		],
		description: [
			{label: "Website", href: "https://alternalize.com"},
			{label: "Founded", value: "April 2025"},
		],
		technology: ["Python", "AI/LLMs", "Nuxt", "Vue", "APIs", "MongoDB"],
	},
	{
		slug: "swiftru",
		number: "03",
		name: "SwiftRU",
		kind: "Rutgers Course Sniper",
		note: "A Discord bot that instantly notifies users of an available class section at Rutgers University, New Brunswick, using asynchronous API requests to detect and alert within one second of an opening.",
		color: "coral",
		banner: "/images/projects/swiftru-banner.png",
		href: "https://www.swiftru.com/",
		stack: "Discord.py, MongoDB, Python",
		insight:
			"Uses advanced python functionality and MongoDB (for database management) to create a Discord bot that instantly notifies users of an available class section at Rutgers University, New Brunswick. The bot uses asynchronous API requests and advanced logic to send notifications to users within one second of detection of an opening. This bot is currently used by a community with hundreds of thousands of users, allowing Rutgers students an easy and simple way to never miss their classes.",
		statsEndpoint: "/api/stats/swiftru",
		stats: [
			{label: "SwiftRU Users", value: "10,838+"},
			{label: "Sections Monitored", value: "12,094+"},
			{label: "Active Snipes", value: "3,200+"},
		],
		features: [
			{
				title: "Asynchronous Programming",
				note: "Asynchronous programming in the SwiftRU project enables real-time monitoring and automated enrollment in Rutgers courses by efficiently managing concurrent tasks and asynchronous callbacks.",
				icon: "bell",
			},
			{
				title: "Optimized Database Management",
				note: "The SwiftRU project leverages MongoDB in a highly optimized manner to deliver efficient data management. This strategic utilization of MongoDB ensures streamlined data storage and retrieval, enhancing the overall performance and responsiveness of the application.",
				icon: "database",
			},
			{
				title: "Efficient API Utilization",
				note: "The SwiftRU project leverages the Rutgers API to seamlessly notify students of course openings, optimizing enrollment processes and enhancing accessibility to desired classes.",
				icon: "chat",
			},
		],
		description: [
			{label: "Website", href: "https://www.swiftru.com/"},
			{label: "Discord Server", href: "https://swiftru.com/discord"},
			{label: "Founded", value: "September 2021"},
		],
		technology: ["Python", "Redis", "MongoDB"],
	},
];
