<script lang="ts">
	import Trainer from './Trainer.svelte';

	const yourPokemons = [1, 45, 140, 60, 75];
	const myPokemons = [3, 25, 120, 55, 92];
</script>

<Trainer team={yourPokemons}></Trainer>
<Trainer team={myPokemons} isPlayer></Trainer>
