<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import type { Pokemon } from '#lib/pokemons/types.js';

	let myIds = $state<number[]>([25, 123, 12, 96, 4]);
	const myPokemons = $derived(myIds.map(getPokemon));

	let yourIds = $state<number[]>([24, 89, 69, 74, 1]);
	const yourPokemons = $derived(yourIds.map(getPokemon));
</script>

{#snippet team(pokemons: Pokemon[], type: 'front' | 'back' = 'front')}
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each pokemons as { name, sprites }}
		<img src={sprites[`${type}_default`]} alt={name} />
	{/each}
{/snippet}

<div class="pokemons yours">
	{@render team(yourPokemons)}
</div>

<div class="pokemons mine">
	{@render team(myPokemons, 'back')}
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
