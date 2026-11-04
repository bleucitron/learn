export async function load() {
	const content = [
		{
			section: 'Svelte 5 basic syntax',
			paths: [
				'events',
				'classes',
				'$props',
				'$props-let',
				'$state',
				'$derived',
				'$derived-by',
				'$effect',
				'$inspect',
				'{const}',
				'{let}',
				'{const}-with-$derived'
			]
		},
		{
			section: 'Reactivity patterns',
			paths: ['deep-reactivity', 'runtime-reactivity']
		},
		{
			section: 'Other general syntax',
			paths: ['key', 'svelte:window', 'svelte:element']
			// NOTE: projet recherche
		},
		{
			section: 'State management',
			paths: ['$state-factories', '$state-classes', '$state-shared']
		},
		// NOTE: projet team
		{
			section: 'Context',
			paths: ['context', 'passing-state-to-context']
		},
		{
			section: 'Reusing markup',
			paths: [
				'snippet',
				'snippet-export',
				'snippet-explicit',
				'snippet-implicit',
				'snippet-children'
			]
		},
		// NOTE: projet slideshow
		{
			section: 'DOM interactions',
			paths: ['@attach', 'attachments-factories', 'attachments-spreading']
		}
		// NOTE: projet scrollytelling
	];

	return {
		content
	};
}
