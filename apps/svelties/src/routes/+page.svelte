<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div>
	<h1>Svelties</h1>

	<nav>
		<a href={resolve('/topics')}>Topics</a>
		<a href={resolve('/exercises')}>Exercises</a>
	</nav>
</div>

<style>
	div {
		display: grid;
		place-content: center;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}
</style>
