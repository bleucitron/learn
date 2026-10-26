<script lang="ts">
	import { getPokemon } from '$lib/pokemons';
	import Card from './Card.svelte';

	const { name, id, types: _types } = getPokemon(25);
	const types = $derived(_types.map((t) => t.type.name));
</script>

<!-- TODO: provide the Card with a default snippet of your choice -->
<div>
	<Card>
		{#snippet header()}
			<div class="id">
				<p>#{id}</p>
				<p>{name}</p>
			</div>
		{/snippet}

		{#snippet footer()}
			<ul class="types">
				{#each types as type (type)}
					<li>
						{type}
					</li>
				{/each}
			</ul>
		{/snippet}
	</Card>
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: center;
	}

	p {
		margin: 0;
	}

	.id {
		display: flex;
		border-bottom: 3px solid #333333;

		p {
			display: flex;
			padding: 0.5rem;

			&:first-child {
				display: grid;
				place-content: center;

				background-color: #333333;
				color: #bbbbbb;
			}
		}
	}

	.types {
		display: flex;
		justify-content: center;
		gap: 0.5rem;

		padding: 0.5rem;
		background-color: #888888;
	}
</style>
