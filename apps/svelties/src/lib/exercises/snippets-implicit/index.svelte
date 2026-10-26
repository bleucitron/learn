<script lang="ts">
	import Pokemon from './Pokemon.svelte';
</script>

<!-- TODO: refactor the snippets as implicit props -->
{#snippet health(current: number, max: number)}
	<p>{current}/{max}</p>
{/snippet}

{#snippet healthBar(current: number, max: number)}
	<div class="health-bar">
		<!-- eslint-disable-next-line svelte/require-each-key -->
		{#each Array.from({ length: max }), i}
			<div class={['hp', { full: i < current }]}></div>
		{/each}
	</div>
{/snippet}

<div>
	<Pokemon id={27} {health}></Pokemon>
	<Pokemon id={7} health={healthBar}></Pokemon>
</div>

<style lang="scss">
	div {
		display: flex;
	}

	p {
		margin: 0;
		line-height: 1rem;
	}

	.health-bar {
		display: flex;
		align-items: center;
		height: 1rem;
		width: 100%;
	}

	.hp {
		height: 0.5rem;
		width: 0.5rem;
		border: 1px solid black;
		border-left: none;

		&:first-of-type {
			border: 1px solid black;
		}

		&.full {
			background-color: #888;
		}
	}
</style>
