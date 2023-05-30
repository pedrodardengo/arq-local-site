import { useEffect } from 'react'

export function useOnEventListener(
	handler: () => void,
	event: string,
	useOnceOnStart = false,
	dependencies: any[] = []
) {
	const effectDependencies = [event, handler, useOnceOnStart].concat(
		dependencies
	)
	useEffect(() => {
		if (useOnceOnStart) {
			handler()
		}
		window.addEventListener(event, handler)
		return () => {
			window.removeEventListener(event, handler)
		}
	}, effectDependencies)
}
