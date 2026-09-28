<script setup lang="ts">
import type {ProjectFeatureIcon} from "~/data/projects";

defineProps<{icon: ProjectFeatureIcon}>();
</script>

<template>
	<svg
		class="feature-icon"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.6"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<template v-if="icon === 'scale'">
			<rect x="3" y="12" width="4" height="8" />
			<rect x="10" y="7" width="4" height="13" />
			<rect x="17" y="3" width="4" height="17" />
		</template>
		<template v-else-if="icon === 'database'">
			<ellipse cx="12" cy="5" rx="8" ry="3" />
			<path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
			<path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
		</template>
		<template v-else-if="icon === 'globe'">
			<circle cx="12" cy="12" r="9" />
			<path d="M3 12h18" />
			<path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
		</template>
		<template v-else-if="icon === 'sparkles'">
			<path
				d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z"
			/>
			<path
				d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"
			/>
		</template>
		<template v-else-if="icon === 'layers'">
			<path d="M12 3l9 5-9 5-9-5 9-5z" />
			<path d="M3 13l9 5 9-5" />
		</template>
		<template v-else-if="icon === 'monitor'">
			<rect x="3" y="4" width="18" height="12" rx="1" />
			<path d="M8 20h8" />
			<path d="M12 16v4" />
		</template>
		<template v-else-if="icon === 'bell'">
			<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
			<path d="M13.73 21a2 2 0 0 1-3.46 0" />
		</template>
		<template v-else-if="icon === 'chat'">
			<path
				d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
			/>
		</template>
	</svg>
</template>
