<script lang="ts">
	import { getPokemon } from '$lib/pokemons';
	import Card from './Card.svelte';

	const ids = $state<number[]>([25, 44, 75, 2, 150]);
	const pokemons = $derived(ids.map(getPokemon));

	let current = $derived(ids[0]);

	function view(id: number) {
		current = id;
	}
</script>

<!-- TODO: create an snippet export in Card to reuse the <img> -->

<Card id={current} />

<div class="pokemons mine">
	{#each pokemons as { id, name, sprites } (id)}
		<button onclick={() => view(id)}>
			<img src={sprites.front_default} alt={name} />
		</button>
	{/each}
</div>

<style>
	.pokemons {
		display: flex;
		margin: 1rem;
	}
</style>
