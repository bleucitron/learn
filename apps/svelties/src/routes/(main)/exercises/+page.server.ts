import { readExercises } from '#lib/utils/exercises.js';

export async function load() {
	const exercises = await readExercises();

	return {
		exercises
	};
}
