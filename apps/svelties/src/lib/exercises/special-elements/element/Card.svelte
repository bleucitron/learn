<script lang="ts">
	import { getPokemon } from '$lib/pokemons';

	type Props = {
		id: number;
	};
	const { id }: Props = $props();

	const { name, sprites, types: _types } = $derived(getPokemon(id));
	const types = $derived(_types.map((t) => t.type.name));
</script>

<div class="Card">
	<div class="id">
		<p>#{id}</p>
		<!-- TODO: use a <Button> with an href to https://en.wikipedia.org/wiki/{id} -->
		<p>{name}</p>
	</div>

	<img src={sprites.front_default} alt={name} />

	<ul class="types">
		{#each types as type (type)}
			<li>
				{type}
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.Card {
		display: flex;
		flex-flow: column;
		justify-content: center;

		width: 15rem;
		height: 20rem;

		outline: 3px solid #888888;
		outline-offset: -3px;
		border-radius: 1rem;

		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		overflow: hidden;

		p {
			margin: 0;
		}

		.id {
			display: flex;
			align-items: center;
			border-bottom: 3px solid #333333;

			> :global(*) {
				display: flex;
				padding: 0.5rem;
				text-align: center;
				flex: 2 0;

				&:first-child {
					display: grid;
					place-content: center;
					flex: 1 0;

					width: 5ch;

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
	}
</style>
