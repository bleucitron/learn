import { readExercise } from '#lib/utils/exercises.js';

export async function load({ params }) {
	const exercise = await readExercise(params.slug);

	return {
		exercise
	};
}
