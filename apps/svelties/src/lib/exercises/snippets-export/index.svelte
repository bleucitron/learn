<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import Card, { img } from './Card.svelte';

	const ids = $state<number[]>([25, 44, 75, 2, 150]);
	const pokemons = $derived(ids.map(getPokemon));

	let current = $derived(ids[0]);

	function view(id: number) {
		current = id;
	}
</script>

<Card id={current} />

<div class="pokemons mine">
	{#each pokemons as { id, name, sprites } (id)}
		<button onclick={() => view(id)}>
			{@render img(sprites.front_default, name)}
		</button>
	{/each}
</div>

<style>
	.pokemons {
		display: flex;
		margin: 1rem;
	}
</style>
