import type { MarkdownItEnv } from '@mdit-vue/types';

import { join } from 'node:path';
import { readdir, readFile } from 'node:fs/promises';
import markdownit from 'markdown-it';
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter';

const md = new markdownit({ html: true }).use(frontmatterPlugin);

const folder = './src/lib/exercises';

export async function readExercises() {
	const dirs = await readdir(folder, { withFileTypes: true });

	return Promise.all(dirs.map(({ name }) => readExercise(name)));
}

export async function readExercise(path: string) {
	return readFile(join(folder, path, 'readme.md'))
		.then((b) => b.toString())
		.then((s) => {
			const env: MarkdownItEnv = {};

			const html = md.render(s, env);

			if (!env.frontmatter) return { html };

			const name = cleanName((env.frontmatter.name ?? '') as string);
			const docs = env.frontmatter.docs as string;
			const tags = (env.frontmatter.tags ?? []) as string[];
			const needs = ((env.frontmatter.needs ?? []) as string[]).map(cleanName);

			return { slug: path, name, tags, needs, html, docs };
		});
}

function cleanName(name: string) {
	return name.replaceAll('\\', '');
}
