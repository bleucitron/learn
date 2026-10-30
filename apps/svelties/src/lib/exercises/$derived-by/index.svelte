<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	const MAX_HP = 100;
	const id = 25;

	const { name, sprites } = getPokemon(id);

	let hp = $state(0);

	const status = $derived.by(() => {
		if (hp >= 80) return 'great';
		if (hp >= 50) return 'ok';
		if (hp >= 20) return 'weak';

		return 'dying';
	});

	function heal() {
		hp = Math.min(hp + 10, MAX_HP);
	}
</script>

<div class={['Pokemon', status]}>
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

	.great {
		color: green;
	}
	.ok {
		color: yellow;
	}
	.weak {
		color: red;
	}
	.dying {
		color: brown;
	}

	button {
		color: black;
	}
</style>
