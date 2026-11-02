<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<header>
	<nav>
		<a href={resolve('/')}>svelties</a>/<a href={resolve('/exercises')}>exercises</a>/
		<h1>
			{page.params.slug}
		</h1>
	</nav>
</header>
{@render children()}

<style lang="scss">
	header {
		position: sticky;
		top: 0;

		display: flex;
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
