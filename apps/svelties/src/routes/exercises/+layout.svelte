<script lang="ts">
	import { page } from '$app/state';

	let { children } = $props();
</script>

<div class="exercise">
	<header>
		<nav>
			<a href="/exercises">exercises</a>
			<h1>
				{page.params.slug}
			</h1>
		</nav>
	</header>
	{@render children()}
</div>

<style>
	header {
		position: absolute;
		top: 0;
		left: 1rem;

		display: flex;
		gap: 0.5rem;
		margin: 0.5rem;

		z-index: 1;
	}

	h1 {
		display: inline;
	}

	header,
	h1 {
		font-size: 0.8rem;
	}

	nav {
		margin-inline: 1rem;
	}

	.exercise {
		position: relative;
		display: grid;
		flex-flow: column;
		align-items: center;
		place-content: center;
		height: 100%;

		:global(p) {
			margin: 0;
		}
	}
</style>
