<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	type Props = {
		id: number;
		isPlayer: boolean;
	};

	const { id, isPlayer }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const side = $derived(isPlayer ? 'back' : 'front');
	const src = $derived(sprites[`${side}_default`]);
</script>

<img {src} alt={name} />
