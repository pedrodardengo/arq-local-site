import { useEffect } from 'react'

export function useOnEventListener(
	handler: () => void,
	event: string,
	useOnceOnStart = false
) {
	useEffect(() => {
		if (useOnceOnStart) {
			handler()
		}
		window.addEventListener(event, handler)
		return () => {
			window.removeEventListener(event, handler)
		}
	}, [event, handler, useOnceOnStart])
}
