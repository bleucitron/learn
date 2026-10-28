<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	let myIds = $state<number[]>([25]);
	const myPokemons = $derived(myIds.map(getPokemon));

	let yourIds = $state<number[]>([4]);
	const yourPokemons = $derived(yourIds.map(getPokemon));
</script>

<!-- TODO: use a {#snippet} and {@render} to factorize both {#each} blocks -->
<div class="pokemons yours">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each yourPokemons as { name, sprites }}
		<img src={sprites.front_default} alt={name} />
	{/each}
</div>

<div class="pokemons mine">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each myPokemons as { name, sprites }}
		<img src={sprites.back_default} alt={name} />
	{/each}
</div>

<style>
	.pokemons {
		display: flex;
	}

	.yours {
		position: relative;
		left: 96px;
	}
</style>
