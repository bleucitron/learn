<script lang="ts">
	type Props = {
		label: string;
		href?: string;
		onclick?: () => void;
	};

	const { label, href, onclick }: Props = $props();

	const type = $derived(href ? 'a' : 'button');
	const role = $derived(href ? 'link' : 'button');
</script>

<svelte:element this={type} class="Button" {role} {href} {onclick}>{label}</svelte:element>

<style lang="scss">
	link {
		text-decoration: underline;
	}
</style>
