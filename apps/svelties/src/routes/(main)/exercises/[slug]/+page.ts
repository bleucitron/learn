import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { slug } = params;

	try {
		const Component = (await import(`#lib/exercises/${slug}/index.svelte`)).default;

		return {
			Component
		};
	} catch (e: unknown) {
		if (e instanceof Error && e.message.includes('Unknown')) {
			error(404);
		}
		error(500, `Oops, something broke, you should check the code in ${slug}.svelte`);
	}
}
