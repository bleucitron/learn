<script lang="ts">
	import { getAllPokemons } from '#lib/pokemons/index.js';

	type Props = { found: number[] };

	const pokemons = getAllPokemons();

	const { found }: Props = $props();
</script>

<div class="pokedex">
	{#each pokemons as { id, name, sprites } (id)}
		<img src={sprites.front_default} alt={name} class={{ found: found.includes(id) }} />
	{/each}
</div>

<style>
	.pokedex {
		height: 100%;
	}

	img {
		filter: contrast(0) brightness(200%);
	}

	.found {
		filter: none;
	}
</style>
