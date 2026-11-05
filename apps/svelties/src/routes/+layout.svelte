<script lang="ts">
	import '#lib/assets/global.css';
	import favicon from '#lib/assets/pika.webp';

	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();

	const { data, url } = $derived(page);
	const { exercise } = $derived(data);
	const segments = $derived(url.pathname.split('/').filter(Boolean));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if segments.length}
	{const current = $derived(segments.at(-1))}
	{const crumbs = $derived(segments.slice(0, -1))}

	{const name = $derived(exercise?.name ?? current)}
	{const docs = $derived(exercise?.docs)}
	<header>
		<nav>
			<a href={resolve('/')}>svelties</a>/
			{#each crumbs as crumb (crumb)}
				<a href="/{crumb}">{crumb}</a>/
			{/each}
			<h1>
				{name}
			</h1>
		</nav>
		{#if docs}
			<nav>
				<a href={docs} target="_blank">docs</a>
			</nav>
		{/if}
	</header>
{/if}
{@render children()}

<style lang="scss">
	header {
		position: sticky;
		top: 0;

		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.5rem;
		padding: 0.5rem;

		background: white;

		z-index: 1;
	}

	h1 {
		display: inline;
		font-size: 1.2rem;
	}

	header {
		font-size: 0.8rem;
	}

	nav {
		margin-inline: 1rem;
	}
</style>
