<script lang="ts">
	import { getAllPokemons, getPokemonTypes } from '#lib/pokemons/index.js';
	import { outsideClick } from './outsideClick';

	type Props = { found: number[] };

	const pokemons = getAllPokemons();
	const types = getPokemonTypes();

	const { found }: Props = $props();

	let menuOpen = $state(false);
	let selectedType = $state<string>();
	let query = $state('');

	const filtered = $derived(
		pokemons
			.filter((p) => p.name.includes(query))
			.filter((p) => (selectedType ? p.types.map((t) => t.type.name).includes(selectedType) : true))
	);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function selectType(type: string) {
		selectedType = type === selectedType ? undefined : type;
		toggleMenu();
	}
</script>

<section>
	<input placeholder="Search" bind:value={query} />
	<menu {@attach outsideClick(() => (menuOpen = false))}>
		<button onclick={toggleMenu}>Filters</button>

		{#if menuOpen}
			<menu>
				{#each types as type (type)}
					<button class={{ active: type === selectedType }} onclick={() => selectType(type)}
						>{type}</button
					>
				{/each}
			</menu>
		{/if}
	</menu>
</section>

<div class="pokedex">
	{#each filtered as { id, name, sprites } (id)}
		<img src={sprites.front_default} alt={name} class={{ found: found.includes(id) }} />
	{/each}
</div>

<style>
	.pokedex {
		height: 100%;
	}

	section {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		menu menu {
			position: absolute;
			background-color: #cccccc;
			z-index: 1;

			button {
				display: block;
				width: 100%;
				text-align: left;

				&.active {
					background-color: #aaaaaa;
				}
			}
		}
	}

	img {
		filter: contrast(0) brightness(200%);
	}

	.found {
		filter: none;
	}
</style>
