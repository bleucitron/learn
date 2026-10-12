<script lang="ts">
	import { getLangContext } from './context';
	import Pokemon from './Pokemon.svelte';

	const starters = [1, 4, 7];

	const getLang = getLangContext();

	const textByLang = {
		fr: 'Choisissez votre Pokémon',
		en: 'Choose your Pokemon'
	};

	const lang = $derived(getLang());
	const text = $derived(textByLang[lang]);
</script>

<div class="lab">
	<p>{text}</p>
	<div>
		<!-- eslint-disable-next-line svelte/require-each-key -->
		{#each starters as id}
			<Pokemon {id} />
		{/each}
	</div>
</div>

<style>
	.lab > div {
		display: flex;
		gap: 3rem;
	}

	p {
		text-align: center;
	}
</style>
