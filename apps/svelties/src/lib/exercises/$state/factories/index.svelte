<script lang="ts">
	import { getPokemon } from '$lib/pokemons';
	import { getRandomNumber } from '$lib/utils/getRandomNumber';

	const MAX = 6;

	let ids = $state<number[]>([25]);

	const pokemons = $derived(ids.map(getPokemon));
	const teamSize = $derived(ids.length);
	const full = $derived(teamSize === MAX);

	function add() {
		const id = getRandomNumber(151);

		ids.push(id);
	}

	// TODO: factorize the $state creation and management logic
	let ids_2 = $state<number[]>([4]);

	const pokemons_2 = $derived(ids_2.map(getPokemon));
	const teamSize_2 = $derived(ids_2.length);
	const full_2 = $derived(teamSize_2 === MAX);

	function add_2() {
		const id = getRandomNumber(151);

		ids_2.push(id);
	}
</script>

<div class="pokemons yours">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each pokemons as { name, sprites }}
		<img src={sprites.front_default} alt={name} />
	{/each}

	<button onclick={add} disabled={full}>Add</button>
</div>

<div class="pokemons mine">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each pokemons_2 as { name, sprites }}
		<img src={sprites.back_default} alt={name} />
	{/each}

	<button onclick={add_2} disabled={full_2}>Add</button>
</div>

<style>
	.pokemons {
		display: flex;
	}

	.yours {
		position: relative;
		left: 96px;
	}

	button {
		width: 96px;
	}
</style>
