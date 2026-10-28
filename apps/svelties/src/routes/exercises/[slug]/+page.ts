export async function load({ params }) {
	const { slug } = params;

	const Component = (await import(`#lib/exercises/${slug}/index.svelte`)).default;

	return {
		Component
	};
}
