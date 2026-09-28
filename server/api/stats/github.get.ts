// Cached for 1 hour — parses the auto-updating GitHub Actions metrics SVG (lowlighter/metrics) for hattvr.
export default defineCachedEventHandler(
	async () => {
		try {
			const svg = await $fetch<string>(
				"https://raw.githubusercontent.com/hattvr/hattvr/main/github-metrics.svg",
				{responseType: "text"},
			);
			const text = svg.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

			const commitsMatch = text.match(/([\d,]+)\s*Commits/i);
			const languagesMatch = text.match(/([\d,]+)\s*Languages/i);

			return {
				commits: commitsMatch
					? Number(commitsMatch[1].replace(/,/g, ""))
					: null,
				languages: languagesMatch
					? Number(languagesMatch[1].replace(/,/g, ""))
					: null,
			};
		} catch {
			return {commits: null, languages: null};
		}
	},
	{maxAge: 60 * 60},
);
