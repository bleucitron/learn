import { readExercises } from '#lib/utils/exercises.js';

export async function load() {
	const exercises = await readExercises();

	const tagMap = new Map<string, number>();

	exercises.forEach((e) => {
		e.tags.forEach((t) => {
			const nb = tagMap.get(t) ?? 0;
			tagMap.set(t, nb + 1);
		});
	});

	const tags = [...tagMap.entries()].map(([name, nb]) => ({ name, nb }));

	return {
		tags
	};
}
