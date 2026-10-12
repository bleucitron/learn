<script lang="ts">
	import Bench from './Bench.svelte';
	import { setPlayerContext } from './context';
	import Team from './Team.svelte';

	type Props = {
		team: number[];
		isPlayer?: boolean;
	};

	const ON_FIELD = 2;

	const { team, isPlayer = false }: Props = $props();

	setPlayerContext(isPlayer);

	const onField = $derived(team.slice(0, ON_FIELD - 1));
	const bench = $derived(team.slice(ON_FIELD - 1));
</script>

<div class="Trainer">
	<section class="field">
		<Team ids={onField} />
	</section>
	<section class="info">
		<Bench ids={bench} />
	</section>
</div>

<style lang="scss">
	.Trainer {
		display: flex;
		flex-flow: column;
		flex: 1 0;
		width: 100%;

		&:first-of-type {
			flex-flow: column-reverse;

			.info {
				justify-content: flex-end;
			}
		}
	}

	section {
		place-items: center;
	}

	.field {
		display: grid;

		flex: 1 0;
	}

	.info {
		display: flex;
	}
</style>
