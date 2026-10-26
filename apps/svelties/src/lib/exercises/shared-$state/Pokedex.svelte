<script lang="ts">
	import { getAllPokemons } from '$lib/pokemons';

	const pokemons = getAllPokemons();

	class Pokedex {
		found = $state<number[]>([]);

		find = (id: number) => {
			if (!this.found.includes(id)) {
				this.found.push(id);
			}
		};

		has = (id: number) => {
			return this.found.includes(id);
		};
	}

	const pokedex = new Pokedex();
</script>

<div class="pokedex">
	{#each pokemons as { id, name, sprites } (id)}
		<button onclick={() => pokedex.find(id)} disabled={pokedex.has(id)}>
			<img src={sprites.front_default} alt={name} class={{ found: pokedex.found.includes(id) }} />
		</button>
	{/each}
</div>

<style>
	.pokedex {
		display: flex;
		flex-wrap: wrap;
		overflow-y: scroll;
	}

	img {
		filter: contrast(0) brightness(200%);
	}

	.found {
		filter: none;
	}
</style>
