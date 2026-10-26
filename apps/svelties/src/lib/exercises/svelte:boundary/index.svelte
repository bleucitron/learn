<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';
	import BrokenButton from './BrokenButton.svelte';
	import Pokemon from './Pokemon.svelte';

	const pokemons = [1, 4, 7].map(getPokemon);

	let current = $state(1);
</script>

<div class="pokedex">
	<ul>
		{#each pokemons as { id, name, sprites } (id)}
			<li
				onmouseenter={() => {
					current = id;
				}}
			>
				<img src={sprites.front_default} alt={name} />
			</li>
		{/each}
	</ul>

	<Pokemon id={current}></Pokemon>

	<!-- TODO: this can fail sometimes, add a <boundary> to display a recovery message -->
	<svelte:boundary>
		<BrokenButton />
		<!-- <button onclick={getPokemons}>More</button> -->
		{#snippet failed()}
			<p>Error</p>
		{/snippet}
	</svelte:boundary>
</div>

<style>
	.pokedex {
		height: 100%;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}

	button {
		display: block;
		margin: auto;
	}
</style>
