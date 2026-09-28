import {MongoClient} from "mongodb";

let clientPromise: Promise<MongoClient> | null = null;

function getClient() {
	const uri = process.env.SWIFTRU_MONGODB_URI;
	if (!uri) return null;
	if (!clientPromise) {
		clientPromise = new MongoClient(uri).connect();
	}
	return clientPromise;
}

// Cached for 2 minutes — these counts come straight from SwiftRU's own database.
export default defineCachedEventHandler(
	async () => {
		const client = await getClient();
		if (!client) {
			return {
				users: null,
				sectionsMonitored: null,
				activeSnipes: null,
				error: "SWIFTRU_MONGODB_URI is not configured",
			};
		}

		try {
			const db = client.db();
			const [users, sectionsMonitored, activeSnipes] = await Promise.all([
				db.collection("users").countDocuments(),
				db.collection("courses").countDocuments(),
				db.collection("snipes").countDocuments(),
			]);
			return {users, sectionsMonitored, activeSnipes, error: null};
		} catch (error) {
			return {
				users: null,
				sectionsMonitored: null,
				activeSnipes: null,
				error:
					error instanceof Error
						? error.message
						: "Failed to query SwiftRU database",
			};
		}
	},
	{maxAge: 60 * 2},
);
