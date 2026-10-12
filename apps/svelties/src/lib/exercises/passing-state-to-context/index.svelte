<script lang="ts">
	import { setLangContext, type Lang } from './context';
	import Lab from './Lab.svelte';

	const INITIAL_LANG = 'en';

	let lang = $state<Lang>(INITIAL_LANG);
	setLangContext(() => lang);
</script>

<Lab />

<menu>
	<button onclick={() => (lang = 'fr')} class={{ active: lang === 'fr' }}>FR</button>
	<button onclick={() => (lang = 'en')} class={{ active: lang === 'en' }}>EN</button>
</menu>

<style>
	menu {
		position: fixed;
		top: 0;
		right: 0;
	}

	.active {
		background-color: #333;
		color: #bbb;
	}
</style>
