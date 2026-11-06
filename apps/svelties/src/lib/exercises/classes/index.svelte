<script lang="ts">
	import { getAllPokemons } from '#lib/pokemons/index.js';

	const pokemons = getAllPokemons();

	const found = [4, 12, 50, 140];
</script>

<div class="pokedex">
	{#each pokemons as { id, name, sprites } (id)}
		<img src={sprites.front_default} alt={name} class={{ found: found.includes(id) }} />
	{/each}
</div>

<style>
	.pokedex {
		display: flex;
		flex-wrap: wrap;
		height: 100%;
	}

	img {
		filter: contrast(0) brightness(200%);
	}

	.found {
		filter: none;
	}
</style>
