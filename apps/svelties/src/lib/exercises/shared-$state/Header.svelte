<script lang="ts">
	import { getAllPokemons } from '#lib/pokemons/index.js';

	const total = getAllPokemons().length;

	//  TODO: make `found` value follow the Pokedex state by creating a shared state
	const found = 0;
</script>

<h2>Gotta catch'em all!</h2>

<p>{found}/{total}</p>
