import { readdir } from 'node:fs/promises';

export async function load() {
	const paths = await readdir('./src/lib/exercises');

	return {
		paths
	};
}
