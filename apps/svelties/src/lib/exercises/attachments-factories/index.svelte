<script lang="ts">
	import { outsideClick } from './outsideClick';
	import Pokedex from './Pokedex.svelte';
	import Team from './Team.svelte';

	type Tab = 'pokedex' | 'team';

	const ids = [4, 16, 61, 74];

	let navOpen = $state(false);
	let tab = $state<Tab>('team');

	function toggleNav() {
		navOpen = !navOpen;
	}

	function selectTab(selected: Tab) {
		tab = selected;
		toggleNav();
	}
</script>

<div>
	<menu {@attach outsideClick(() => (navOpen = false))}>
		<button onclick={toggleNav}>Menu</button>

		{#if navOpen}
			<nav>
				<button onclick={() => selectTab('pokedex')}>Pokedex</button>
				<button onclick={() => selectTab('team')}>Team</button>
			</nav>
		{/if}
	</menu>

	<section>
		{#if tab === 'pokedex'}
			<Pokedex found={ids} />
		{:else}
			<Team {ids}></Team>
		{/if}
	</section>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-flow: column;
		height: 100%;
		width: 100%;
	}

	menu {
		position: fixed;
		top: 0;
		left: 0;
		margin: 1rem;

		nav {
			display: flex;
			margin-left: 1rem;
			background-color: #999999;
		}
	}

	section {
		flex: 1 0;

		display: flex;
		flex-flow: column;
		place-items: center;
		justify-content: center;
		padding-top: 5rem;
		width: 95%;
		margin: auto;
	}
</style>
