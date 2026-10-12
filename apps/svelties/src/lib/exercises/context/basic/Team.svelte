<script lang="ts">
	import Pokemon from './Pokemon.svelte';

	type Props = {
		ids: number[];
		isPlayer: boolean;
	};

	const { ids, isPlayer }: Props = $props();
</script>

<div class="team">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each ids as id}
		<Pokemon {id} {isPlayer} />
	{/each}
</div>

<style>
	.team {
		display: flex;
	}
</style>
