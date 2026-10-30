<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	type Props = { id: number; hp: number };

	const MAX_HP = 50;

	let { id, hp = MAX_HP }: Props = $props();
	const { name, sprites } = $derived(getPokemon(id));

	function heal() {
		hp = Math.min(hp + 10, MAX_HP);
	}
</script>

<div class="Pokemon">
	<img src={sprites.front_default} alt={name} />
	<p>{hp}/{MAX_HP}</p>
	<button onclick={heal}>Heal</button>
</div>

<style lang="scss">
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 0.5rem;
		flex: 1 0;
	}
</style>
