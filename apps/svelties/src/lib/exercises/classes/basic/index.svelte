<script lang="ts">
	import { getAllPokemons } from '$lib/pokemons';

	const pokemons = getAllPokemons();

	const found = [4, 12, 50, 140];
</script>

<div class="pokedex">
	{#each pokemons as { id, name, sprites } (id)}
		<!-- TODO: use `found` array to add a class to found Pokemons -->
		<img src={sprites.front_default} alt={name} />
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
