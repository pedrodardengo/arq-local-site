import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnMiddleOfScreen(
	ref: string | React.RefObject<any>,
	throttleMilliseconds = 100
): boolean {
	const [isVisible, setIsVisible] = React.useState(false)

	React.useEffect(() => {
		let objectRef: HTMLElement | null = null
		if (typeof ref === 'string') {
			objectRef = document.getElementById(ref)
		} else if (typeof ref === 'object' && 'current' in ref) {
			objectRef = ref.current
		}
		const onScroll = throttle(() => {
			if (!objectRef) {
				setIsVisible(false)
				return
			}
			const rect = objectRef.getBoundingClientRect()
			const windowHeight = window.innerHeight
			const linePosition = windowHeight / 4
			const isLineBelowTop = linePosition >= rect.top
			const isLineAboveBottom = linePosition <= rect.bottom
			setIsVisible(isLineBelowTop && isLineAboveBottom)
		}, throttleMilliseconds)
		if (window) {
			document.addEventListener('scroll', onScroll, true)
			return () => document.removeEventListener('scroll', onScroll, true)
		}
	}, [ref, throttleMilliseconds])

	return isVisible
}
