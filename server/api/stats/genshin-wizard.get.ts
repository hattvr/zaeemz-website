interface CommandCategory {
	commands: unknown[];
}

interface CommandsResponse {
	categories: CommandCategory[];
}

// Cached for 5 minutes so we don't hammer the public Genshin Wizard API on every page view.
export default defineCachedEventHandler(
	async () => {
		const [guilds, users, commands] = await Promise.allSettled([
			$fetch<{count: number}>(
				"https://api.genshinwizard.com/info/guilds",
			),
			$fetch<{count: number}>("https://api.genshinwizard.com/info/users"),
			$fetch<CommandsResponse>(
				"https://api.genshinwizard.com/info/commands",
			),
		]);

		return {
			guilds: guilds.status === "fulfilled" ? guilds.value.count : null,
			users: users.status === "fulfilled" ? users.value.count : null,
			commands:
				commands.status === "fulfilled"
					? commands.value.categories.reduce(
							(total, category) =>
								total + category.commands.length,
							0,
						)
					: null,
		};
	},
	{maxAge: 60 * 5},
);
