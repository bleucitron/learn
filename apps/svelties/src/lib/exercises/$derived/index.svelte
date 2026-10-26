<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import { getRandomNumber } from '#lib/utils/getRandomNumber.js';

	const MAX = 6;

	let ids = $state<number[]>([25]);

	// TODO: use $derived to make this app work
	const pokemons = ids.map(getPokemon);
	const teamSize = ids.length;
	const full = teamSize === MAX;

	function findPokemon() {
		const id = getRandomNumber(151);

		ids.push(id);
	}
</script>

<button onclick={findPokemon} disabled={full}>Catch!</button>

<div class="pokemons">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each pokemons as { name, sprites }}
		<img src={sprites.front_default} alt={name} />
	{/each}
</div>

<p>{teamSize}/{MAX}</p>

<style>
	.pokemons {
		display: flex;
	}
</style>
