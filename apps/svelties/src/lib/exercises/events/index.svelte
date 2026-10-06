<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	const ID = 25;
	const pokemon = getPokemon(ID);

	function showID() {
		alert(`ID: ${pokemon.id}`);
	}
</script>

<img src={pokemon.sprites.front_default} alt={pokemon.name} />
<p>{pokemon.name}</p>

<button onclick={showID}>Show ID</button>
