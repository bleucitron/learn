<script lang="ts">
	import Pokemon from './Pokemon.svelte';
</script>

<div>
	<Pokemon id={27}>
		{#snippet health(current: number, max: number)}
			<p>{current}/{max}</p>
		{/snippet}
	</Pokemon>
	<Pokemon id={7}>
		{#snippet health(current: number, max: number)}
			<div class="health-bar">
				<!-- eslint-disable-next-line svelte/require-each-key -->
				{#each Array.from({ length: max }), i}
					<div class={['hp', { full: i < current }]}></div>
				{/each}
			</div>
		{/snippet}
	</Pokemon>
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
