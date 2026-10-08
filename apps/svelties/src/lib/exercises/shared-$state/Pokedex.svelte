<script lang="ts">
	import { getAllPokemons } from '#lib/pokemons/index.js';
	import { pokedex } from './shared.svelte';

	const pokemons = getAllPokemons();
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
