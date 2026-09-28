<script setup lang="ts">
import {projects, type ProjectStat} from "~/data/projects";

const route = useRoute();
const project = computed(() =>
	projects.find((item) => item.slug === route.params.slug),
);

if (!project.value) {
	throw createError({statusCode: 404, statusMessage: "Project not found"});
}

useHead(() => ({
	title: `${project.value?.name} | Zaeem Zahid`,
}));

interface GenshinWizardStats {
	guilds: number | null;
	users: number | null;
	commands: number | null;
}

interface SwiftruStats {
	users: number | null;
	sectionsMonitored: number | null;
	activeSnipes: number | null;
	error: string | null;
}

const {data: liveStats} = await useAsyncData<
	GenshinWizardStats | SwiftruStats | null
>(`project-stats-${route.params.slug}`, () =>
	project.value?.statsEndpoint
		? $fetch(project.value.statsEndpoint)
		: Promise.resolve(null),
);

function formatCount(value: number | null | undefined, suffix = "+") {
	return typeof value === "number"
		? `${value.toLocaleString()}${suffix}`
		: null;
}

const displayStats = computed<ProjectStat[]>(() => {
	if (!project.value) return [];

	if (project.value.slug === "genshin-wizard" && liveStats.value) {
		const live = liveStats.value as GenshinWizardStats;
		const mapped = [
			{label: "Servers", value: formatCount(live.guilds)},
			{label: "Users Registered", value: formatCount(live.users)},
			{label: "Commands", value: formatCount(live.commands, "")},
		].filter((stat): stat is ProjectStat => stat.value !== null);
		if (mapped.length) return mapped;
	}

	if (project.value.slug === "swiftru" && liveStats.value) {
		const live = liveStats.value as SwiftruStats;
		if (!live.error) {
			const mapped = [
				{label: "SwiftRU Users", value: formatCount(live.users)},
				{
					label: "Sections Monitored",
					value: formatCount(live.sectionsMonitored, ""),
				},
				{
					label: "Active Snipes",
					value: formatCount(live.activeSnipes, ""),
				},
			].filter((stat): stat is ProjectStat => stat.value !== null);
			if (mapped.length) return mapped;
		}
	}

	return project.value.stats;
});

const statEls: HTMLElement[] = [];
const setStatRef = (el: unknown) => {
	if (el) statEls.push(el as HTMLElement);
};

function animateCount(el: HTMLElement) {
	const raw = el.dataset.value ?? "";
	const match = raw.match(/^([\d,]+)(.*)$/);
	if (!match) return;
	const target = Number(match[1].replace(/,/g, ""));
	const suffix = match[2];
	const duration = 1400;
	const start = performance.now();
	function tick(now: number) {
		const progress = Math.min((now - start) / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3);
		el.textContent = Math.round(target * eased).toLocaleString() + suffix;
		if (progress < 1) requestAnimationFrame(tick);
	}
	requestAnimationFrame(tick);
}

onMounted(() => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateCount(entry.target as HTMLElement);
					observer.unobserve(entry.target);
				}
			});
		},
		{threshold: 0.4},
	);
	statEls.forEach((el) => observer.observe(el));
});
</script>

<template>
	<main v-if="project" id="top" class="project-detail">
		<header class="site-header page-width">
			<a class="wordmark" href="/" aria-label="Zaeem Zahid home"
				>zaeemz<span>.</span></a
			>
			<NuxtLink to="/" class="text-link back-link"
				>← Back to zaeemz.com</NuxtLink
			>
		</header>

		<section class="project-hero page-width">
			<p class="eyebrow">{{ project.kind }}</p>
			<h1>{{ project.name }}</h1>
			<img
				class="project-hero-banner"
				:src="project.banner"
				:alt="`${project.name} banner`"
			/>
		</section>

		<section class="section-pad">
			<div class="page-width project-content-grid">
				<div class="project-main">
					<div class="feature-grid">
						<article
							v-for="feature in project.features"
							:key="feature.title"
							class="feature-card"
						>
							<FeatureIcon :icon="feature.icon" />
							<p class="feature-eyebrow">{{ feature.title }}</p>
							<p>{{ feature.note }}</p>
						</article>
					</div>

					<div class="project-insight">
						<p class="eyebrow">PROJECT INSIGHT</p>
						<p>{{ project.insight }}</p>
					</div>

					<div v-if="displayStats.length" class="facts-grid">
						<div
							v-for="stat in displayStats"
							:key="stat.label"
							class="fact-card"
						>
							<p
								class="fact-value"
								:data-value="stat.value"
								:ref="setStatRef"
							>
								{{ stat.value }}
							</p>
							<p class="fact-label">{{ stat.label }}</p>
						</div>
					</div>
				</div>

				<aside class="project-sidebar">
					<div class="project-sidebar-sticky">
						<div>
							<p class="eyebrow">DESCRIPTION</p>
							<ul class="project-description-list">
								<li
									v-for="item in project.description"
									:key="item.label"
								>
									<span class="project-description-label">{{
										item.label
									}}</span>
									<a
										v-if="item.href"
										:href="item.href"
										target="_blank"
										rel="noopener"
										>{{
											item.href.replace("https://", "")
										}}</a
									>
									<span v-else>{{ item.value }}</span>
								</li>
							</ul>
						</div>
						<div>
							<p class="eyebrow">TECHNOLOGY</p>
							<div class="tech-tags">
								<span
									v-for="tech in project.technology"
									:key="tech"
									class="tech-tag"
									>{{ tech }}</span
								>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</section>
	</main>
</template>
