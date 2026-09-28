<script setup lang="ts">
import {projects} from "~/data/projects";

const router = useRouter();
const goToProject = (slug: string) => router.push(`/project/${slug}`);

const tabs = ["About Me", "Resume", "Experience", "Contact"] as const;
type Tab = (typeof tabs)[number];
const activeTab = ref<Tab>("About Me");

const sectionEls: Partial<Record<Tab, HTMLElement>> = {};
const setSectionRef = (tab: Tab) => (el: unknown) => {
	if (el) sectionEls[tab] = el as HTMLElement;
};

const scrollToTab = (tab: Tab) => {
	activeTab.value = tab;
	sectionEls[tab]?.scrollIntoView({behavior: "smooth", block: "start"});
};

onMounted(() => {
	const spy = new IntersectionObserver(
		(entries) => {
			const visible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]) {
				const tab = (visible[0].target as HTMLElement).dataset.tab as
					| Tab
					| undefined;
				if (tab) activeTab.value = tab;
			}
		},
		{rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1]},
	);
	Object.values(sectionEls).forEach((el) => el && spy.observe(el));

	const reveal = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					reveal.unobserve(entry.target);
				}
			});
		},
		{threshold: 0.15},
	);
	document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
});

const frameworks = [
	{name: "Python", icon: "/images/frameworks/python.png"},
	{name: "Java", icon: "/images/frameworks/java.png"},
	{name: "C", icon: "/images/frameworks/c.png"},
	{name: "HTML", icon: "/images/frameworks/html.png"},
	{name: "MongoDB", icon: "/images/frameworks/mongodb.png"},
	{name: "Redis", icon: "/images/frameworks/redis.png"},
	{name: "Docker", icon: "/images/frameworks/docker.png"},
	{name: "Kubernetes", icon: "/images/frameworks/kubernetes.png"},
	{name: "Jenkins", icon: "/images/frameworks/jenkins.png"},
	{name: "Red Hat", icon: "/images/frameworks/redhat.png"},
	{name: "Grafana", icon: "/images/frameworks/grafana.png"},
	{name: "Prometheus", icon: "/images/frameworks/prometheus.png"},
	{name: "Claude", icon: "/images/frameworks/claude.png"},
	{name: "Kiro", icon: "/images/frameworks/kiro.png"},
	{name: "Cinema 4D", icon: "/images/frameworks/c4d.png"},
	{name: "Photoshop", icon: "/images/frameworks/photoshop.png"},
];

const services = [
	{
		name: "Code",
		note: "Delving into the world of coding, I bring software applications to life using various programming languages, frameworks, and tools.",
		color: "lime",
	},
	{
		name: "API Management",
		note: "Adeptly design, implement, and optimize scalable solutions to seamlessly integrate and enhance the performance and security of your digital ecosystem.",
		color: "coral",
	},
	{
		name: "Database Design & Management",
		note: "Proficiency in designing and maintaining databases to ensure organized, secure, and optimized data for efficient software operation.",
		color: "blue",
	},
	{
		name: "Discord Bot Development",
		note: "Specializing in the creation and customization of Discord bots tailored for specific purposes, enhancing server functionality and user experiences on the Discord platform.",
		color: "lime",
	},
];

const funFacts = [
	{label: "Years Experience", value: "11"},
	{label: "Total Commits", value: "7711+"},
	{label: "Programming Languages", value: "11"},
];

const education = {
	school: "Rutgers University – New Brunswick, NJ",
	period: "09/2020 – 05/2024",
	degree: "Bachelor of Science, Computer Science",
	gpa: "3.76/4.00",
	minor: "Minor in Business Administration",
};

const skillGroups = [
	{
		category: "AI & Automation",
		items: [
			"AI Agents",
			"Agentic Workflows",
			"LLM Integration",
			"AI Automation",
			"Prompt Engineering",
			"Workflow Orchestration",
		],
	},
	{
		category: "Programming Languages",
		items: [
			"Python",
			"Java",
			"JavaScript",
			"C",
			"PowerShell",
			"HTML",
			"CSS",
		],
	},
	{
		category: "Cloud & Infrastructure",
		items: [
			"AWS",
			"Google Cloud",
			"Kubernetes",
			"Docker",
			"OpenShift",
			"Rancher",
			"Jenkins",
			"Infrastructure as Code (IaC)",
			"CI/CD",
		],
	},
	{
		category: "Backend & Data",
		items: [
			"Spring Boot",
			"MongoDB",
			"PostgreSQL",
			"Apache Solr",
			"REST APIs",
		],
	},
	{
		category: "DevOps & Observability",
		items: [
			"Git",
			"Bitbucket",
			"Grafana",
			"Container Registries",
			"Selenium WebDriver",
			"Apache",
			"Postman",
		],
	},
	{
		category: "Development & Collaboration",
		items: ["Jira", "Confluence", "Visual Studio Code"],
	},
];

const languages = [
	{name: "English", level: "Native"},
	{name: "Urdu", level: "Native"},
	{name: "Punjabi", level: "Basic"},
];

const workHistory = [
	{
		role: "Software Engineer",
		company: "ADP",
		location: "Roseland, New Jersey",
		period: "August 2026 – Present",
		bullets: [
			"Designed and implemented AI agents to automate engineering workflows, including release management and support ticket resolution, reducing manual effort and improving operational efficiency.",
			"Architected scalable backend services and cloud automation using Python, Java, AWS Lambda, Kubernetes, Jenkins, and Infrastructure as Code (IaC), supporting reliable CI/CD and production operations.",
			"Applied SRE and observability practices to improve system reliability, troubleshoot production issues, and collaborate across engineering teams on feature development, deployments, and technical decisions.",
		],
	},
	{
		role: "Associate Application Developer",
		company: "ADP",
		location: "Roseland, New Jersey",
		period: "July 2023 – August 2026",
		bullets: [
			"Developed Java/Spring Boot applications using Quartz and MongoDB to support ADP's search and payroll-related systems, with a focus on performance, reliability, and maintainability.",
			"Containerized and deployed applications using Docker and Kubernetes, integrating MongoDB for scalable data management and application functionality.",
			"Collaborated with cross-functional teams to deliver business-aligned features, improve search functionality, and enhance the overall user experience.",
		],
	},
	{
		role: "Senior Developer & Founder",
		company: "Genshin Wizard",
		location: "Remote",
		period: "February 2022 – Present",
		bullets: [
			"Founded and led development of a Discord platform serving 7.9M+ users across thousands of servers, architecting scalable Python services and database infrastructure.",
			"Designed and optimized backend systems handling millions of database records and high-volume concurrent requests while maintaining reliable performance at scale.",
			"Built and maintained a production SaaS ecosystem spanning Discord bots, REST APIs, web applications, cloud infrastructure, and automated deployment pipelines.",
		],
	},
];

const profilePicture = "https://zaeemz.com/wp-content/uploads/pictre.png";

const contactInfo = {
	location: "Carteret, New Jersey",
	phone: "+1-732-397-3252",
	email: "zaeemz123@gmail.com",
	website: "https://www.zaeemz.com",
};

const socials = [
	{label: "LinkedIn", href: "https://www.linkedin.com/in/zaeemz/"},
	{label: "GitHub", href: "https://github.com/hattvr"},
	{label: "Behance", href: "https://www.behance.net/hattvr"},
];
</script>

<template>
	<main id="top">
		<header class="site-header-bar">
			<div class="site-header page-width">
				<a class="wordmark" href="#top" aria-label="Zaeem Zahid home"
					>zaeemz<span>.</span></a
				>
				<nav class="main-nav" aria-label="Main navigation">
					<button
						v-for="tab in tabs"
						:key="tab"
						type="button"
						class="tab-link"
						:class="{active: activeTab === tab}"
						@click="scrollToTab(tab)"
					>
						{{ tab }}
					</button>
				</nav>
			</div>
		</header>

		<nav class="side-scroll-nav" aria-label="Section progress">
			<button
				v-for="tab in tabs"
				:key="tab"
				type="button"
				class="side-nav-dot"
				:class="{active: activeTab === tab}"
				@click="scrollToTab(tab)"
			>
				<span class="side-nav-marker" aria-hidden="true"></span>
				<span class="side-nav-label">{{ tab }}</span>
			</button>
		</nav>

		<div id="about-me" data-tab="About Me" :ref="setSectionRef('About Me')">
			<section
				class="hero page-width reveal"
				aria-labelledby="hero-title"
			>
				<div class="hero-copy">
					<p class="eyebrow">
						<span class="status-dot"></span> SOFTWARE ENGINEER @ ADP
					</p>
					<h1 id="hero-title">
						Zaeem<span class="hero-period">.</span>
					</h1>
					<p class="hero-lede">
						I'm a Rutgers University Computer Science graduate now
						working as a Software Engineer at ADP, with hands-on
						experience in full-stack software development. My
						expertise spans database management, API creation, image
						manipulation, asynchronous programming, and performance
						optimization. I'm always looking to keep expanding my
						professional experience and honing my soft skills.
					</p>
					<div class="hero-actions">
						<button
							type="button"
							class="button button-dark"
							@click="scrollToTab('Contact')"
						>
							Say hello <span aria-hidden="true">↗</span>
						</button>
						<p class="hero-location">
							Carteret, New Jersey<br />Rutgers University, CS
						</p>
					</div>
				</div>
				<div class="hero-visual">
					<img
						class="profile-picture"
						:src="profilePicture"
						alt="Zaeem Zahid"
						width="420"
						height="420"
						fetchpriority="high"
					/>
				</div>
			</section>

			<section class="work-section section-pad reveal">
				<div class="page-width">
					<div class="section-heading">
						<div>
							<p class="eyebrow">WHAT I DO</p>
							<h2>Skills, <span>in practice.</span></h2>
						</div>
					</div>
					<div class="project-list">
						<article
							v-for="service in services"
							:key="service.name"
							class="project-row service-row"
						>
							<div
								class="project-mark"
								:class="`mark-${service.color}`"
								aria-hidden="true"
							>
								<span></span><span></span><span></span>
							</div>
							<div class="project-copy">
								<h3>{{ service.name }}</h3>
								<p>{{ service.note }}</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section
				class="marquee-section reveal"
				aria-label="Frameworks and tools"
			>
				<div class="marquee">
					<div class="marquee-track">
						<div
							v-for="(framework, index) in [
								...frameworks,
								...frameworks,
							]"
							:key="framework.name + index"
							class="marquee-item"
						>
							<img
								:src="framework.icon"
								:alt="framework.name"
								loading="lazy"
							/>
							<span>{{ framework.name }}</span>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div id="resume" data-tab="Resume" :ref="setSectionRef('Resume')">
			<section class="section-pad resume-section reveal">
				<div class="page-width">
					<div class="section-heading">
						<div>
							<p class="eyebrow">FUN FACTS</p>
							<h2>By the <span>numbers.</span></h2>
						</div>
					</div>
					<div class="facts-grid">
						<div
							v-for="fact in funFacts"
							:key="fact.label"
							class="fact-card"
						>
							<p class="fact-value">{{ fact.value }}</p>
							<p class="fact-label">{{ fact.label }}</p>
						</div>
					</div>

					<div class="section-heading resume-frameworks-heading">
						<div>
							<p class="eyebrow">EDUCATION</p>
							<h2>School <span>days.</span></h2>
						</div>
					</div>
					<div class="education-card">
						<div>
							<h3>{{ education.school }}</h3>
							<p class="education-degree">
								{{ education.degree }}
							</p>
							<p class="education-minor">{{ education.minor }}</p>
						</div>
						<div class="education-meta">
							<p class="education-period">
								{{ education.period }}
							</p>
							<p class="education-gpa">
								GPA: {{ education.gpa }}
							</p>
						</div>
					</div>

					<div class="section-heading resume-frameworks-heading">
						<div>
							<p class="eyebrow">SKILLS &amp; OTHER</p>
							<h2>The <span>stack.</span></h2>
						</div>
					</div>
					<div class="skills-grid">
						<div
							v-for="group in skillGroups"
							:key="group.category"
							class="skill-group"
						>
							<p class="skill-category">{{ group.category }}</p>
							<ul class="frameworks-list">
								<li v-for="item in group.items" :key="item">
									{{ item }}
								</li>
							</ul>
						</div>
					</div>

					<div class="section-heading resume-frameworks-heading">
						<div>
							<p class="eyebrow">LANGUAGES</p>
							<h2>Spoken <span>fluently.</span></h2>
						</div>
					</div>
					<div class="languages-list">
						<div
							v-for="language in languages"
							:key="language.name"
							class="language-item"
						>
							<span>{{ language.name }}</span>
							<span class="language-level">{{
								language.level
							}}</span>
						</div>
					</div>
				</div>
			</section>
		</div>

		<div
			id="experience"
			data-tab="Experience"
			:ref="setSectionRef('Experience')"
		>
			<section class="work-section section-pad reveal">
				<div class="page-width">
					<div class="section-heading">
						<div>
							<p class="eyebrow">WORK EXPERIENCE</p>
							<h2>Where <span>I've worked.</span></h2>
						</div>
					</div>
					<div class="work-history-list">
						<article
							v-for="job in workHistory"
							:key="job.role + job.period"
							class="work-history-item"
						>
							<p class="work-history-period">{{ job.period }}</p>
							<div>
								<h3>
									{{ job.role }}
									<span>· {{ job.company }}</span>
								</h3>
								<p class="work-history-location">
									{{ job.location }}
								</p>
								<ul class="work-history-bullets">
									<li
										v-for="bullet in job.bullets"
										:key="bullet"
									>
										{{ bullet }}
									</li>
								</ul>
							</div>
						</article>
					</div>

					<div class="section-heading experience-projects-heading">
						<div>
							<p class="eyebrow">COMMUNITY PROJECTS</p>
							<h2>Things <span>I've built.</span></h2>
						</div>
					</div>
					<div class="project-list">
						<article
							v-for="project in projects"
							:key="project.number"
							class="project-row project-row-clickable reveal"
							role="link"
							tabindex="0"
							@click="goToProject(project.slug)"
							@keydown.enter="goToProject(project.slug)"
						>
							<div class="project-number">
								{{ project.number }}
							</div>
							<img
								class="project-banner"
								:src="project.banner"
								:alt="`${project.name} banner`"
								width="768"
								height="432"
								loading="lazy"
							/>
							<div class="project-copy">
								<h3>{{ project.name }}</h3>
								<p v-if="project.stack" class="project-stack">
									{{ project.stack }}
								</p>
								<p>{{ project.note }}</p>
								<div class="project-links">
									<span class="text-link"
										>View details
										<span aria-hidden="true">↗</span></span
									>
									<a
										:href="project.href"
										target="_blank"
										rel="noopener"
										class="text-link"
										@click.stop
										>Visit site
										<span aria-hidden="true">↗</span></a
									>
								</div>
							</div>
							<p class="project-kind">{{ project.kind }}</p>
						</article>
					</div>
				</div>
			</section>
		</div>

		<footer
			id="contact"
			data-tab="Contact"
			:ref="setSectionRef('Contact')"
			class="contact-section reveal"
		>
			<div class="page-width contact-inner">
				<p class="eyebrow">HAVE A GOOD ONE IN MIND?</p>
				<h2>Let’s make it <span>real.</span></h2>
				<a class="contact-link" :href="`mailto:${contactInfo.email}`"
					>{{ contactInfo.email }}
					<span aria-hidden="true">↗</span></a
				>
				<p class="contact-details">
					{{ contactInfo.location }} <span>·</span>
					{{ contactInfo.phone }} <span>·</span>
					<a
						:href="contactInfo.website"
						target="_blank"
						rel="noopener"
						>{{ contactInfo.website.replace("https://", "") }}</a
					>
				</p>
				<div class="contact-socials">
					<a
						v-for="social in socials"
						:key="social.label"
						:href="social.href"
						target="_blank"
						rel="noopener"
					>
						{{ social.label }} <span aria-hidden="true">↗</span>
					</a>
				</div>
				<div class="footer-bottom">
					<a class="wordmark footer-wordmark" href="#top"
						>zaeemz<span>.</span></a
					>
					<p>ZAEEM ZAHID <span>© 2026</span></p>
					<button
						type="button"
						class="back-top"
						@click="scrollToTab('About Me')"
					>
						BACK TO TOP ↑
					</button>
				</div>
			</div>
		</footer>
	</main>
</template>
