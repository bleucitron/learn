<script lang="ts">
	import { getPokemon } from '$lib/pokemons';

	const ID = 25;
	const pokemon = getPokemon(ID);

	function showID() {
		alert(`ID: ${pokemon.id}`);
	}
</script>

<img src={pokemon.sprites.front_default} alt={pokemon.name} />
<p>{pokemon.name}</p>

<!-- TODO: add an event listener to this button to use `showID`  -->
<button>Show ID</button>
