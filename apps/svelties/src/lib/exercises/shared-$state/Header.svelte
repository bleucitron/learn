<script lang="ts">
	import { getAllPokemons } from '#lib/pokemons/index.js';
	import { pokedex } from './shared.svelte';

	const total = getAllPokemons().length;

	const found = $derived(pokedex.found.length);
</script>

<h2>Gotta catch'em all!</h2>

<p>{found}/{total}</p>
