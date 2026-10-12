<script lang="ts">
	import Pokemon from './Pokemon.svelte';

	type Props = {
		ids: number[];
	};

	const { ids }: Props = $props();
</script>

<div class="team">
	<!-- eslint-disable-next-line svelte/require-each-key -->
	{#each ids as id}
		<Pokemon {id} />
	{/each}
</div>

<style>
	.team {
		display: flex;
	}
</style>
