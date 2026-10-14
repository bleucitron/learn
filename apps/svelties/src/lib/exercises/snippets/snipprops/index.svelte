<script lang="ts">
	import Pokemon from './Pokemon.svelte';
</script>

<!-- TODO: create two different snippets to display the current health points -->
<!-- TODO: provide them as props -->

<div>
	<Pokemon id={27}></Pokemon>
	<Pokemon id={7}></Pokemon>
</div>

<style lang="scss">
	div {
		display: flex;
	}
</style>
