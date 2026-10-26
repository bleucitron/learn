<script lang="ts">
	import { getPokemon } from '$lib/pokemons';
	import { getRandomNumber } from '$lib/utils/getRandomNumber';

	const MAX = 6;

	let ids = $state<number[]>([25]);

	const pokemons = $derived(ids.map(getPokemon));
	const teamSize = $derived(ids.length);
	const full = $derived(teamSize === MAX);

	// TODO: use $inspect to log each captured Pokemon data

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
