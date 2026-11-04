<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div>
	<h1>Svelties</h1>

	<div>
		<a href={resolve('/(main)/course')}>Course</a>
	</div>
	<nav>
		<a href={resolve('/(main)/tags')}>Tags</a>
		<a href={resolve('/(main)/exercises')}>Exercises</a>
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
