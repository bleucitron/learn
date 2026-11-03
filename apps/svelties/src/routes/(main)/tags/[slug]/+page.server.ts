import { readExercises } from '#lib/utils/exercises.js';

export async function load({ params: { slug } }) {
	const allExercises = await readExercises();

	const exercises = allExercises.filter((ex) => ex.tags.includes(slug));

	return {
		exercises
	};
}
