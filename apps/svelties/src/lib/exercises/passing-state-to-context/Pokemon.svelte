<script lang="ts">
	import { getPokemon, translations } from '#lib/pokemons/index.js';
	import { getLangContext } from './context';

	const getLang = getLangContext();

	type Props = {
		id: number;
	};

	const { id }: Props = $props();

	const { name, sprites } = $derived(getPokemon(id));
	const src = $derived(sprites.front_default);

	const lang = $derived(getLang());
	const translated = $derived(translations[lang]?.[name] ?? name);
</script>

<div class="Pokemon">
	<img {src} alt={translated} />
	<p>{translated}</p>
</div>

<style>
	.Pokemon {
		display: flex;
		flex-flow: column;
		align-items: center;
	}
</style>
