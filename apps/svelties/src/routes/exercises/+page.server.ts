import { join } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';
import markdownit from 'markdown-it';
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter';
import type { MarkdownItEnv } from '@mdit-vue/types';

export async function load() {
	const exercises = await readExercises();

	return {
		exercises
	};
}

const md = new markdownit({ html: true }).use(frontmatterPlugin);

async function readExercises() {
	const dirs = await readdir('./src/lib/exercises', { withFileTypes: true });

	return Promise.all(dirs.map(({ parentPath, name }) => readExercise(parentPath, name)));
}

async function readExercise(parentPath: string, path: string) {
	return readFile(join(parentPath, path, 'readme.md'))
		.then((b) => b.toString())
		.then((s) => {
			const env: MarkdownItEnv = {};

			const html = md.render(s, env);
			const tags = env.frontmatter?.tags;

			return { html, tags, path };
		});
}
