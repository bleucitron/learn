<script lang="ts">
	import { getPokemon } from '#lib/pokemons/index.js';

	type Props = {
		id: number;
	};

	const { id }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const src = $derived(sprites.front_default);
</script>

<img {src} alt={name} />
