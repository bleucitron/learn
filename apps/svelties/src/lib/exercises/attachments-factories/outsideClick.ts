export function outsideClick(cb: (event: MouseEvent) => void) {
	return (element: HTMLElement) => {
		function executeIfOutside(event: MouseEvent) {
			if (!event.target) return;

			if (!element.contains(event.target as HTMLElement)) {
				cb(event);
			}
		}

		document.body.addEventListener('click', executeIfOutside, true);

		return () => document.body.removeEventListener('click', executeIfOutside, true);
	};
}
