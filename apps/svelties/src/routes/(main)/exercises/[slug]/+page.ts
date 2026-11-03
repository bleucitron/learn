import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;

	try {
		const Component = (await import(`#lib/exercises/${slug}/index.svelte`)).default;

		return {
			Component
		};
	} catch {
		error(404);
	}
}
