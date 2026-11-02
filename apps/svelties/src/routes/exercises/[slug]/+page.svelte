<script lang="ts">
	import '#lib/assets/exercise.css';

	const { data } = $props();
	const { Component } = $derived(data);
</script>

<div class="exercise">
	<Component></Component>
</div>

<style lang="scss">
	.exercise {
		position: relative;
		display: grid;
		flex-flow: column;
		align-items: center;
		place-content: center;

		margin: 0;
		padding: 3rem;

		box-sizing: border-box;

		font-family: 'PokemonGb';
		color: #333;
		background: #bbb;
		line-height: 1.5;
	}
</style>
