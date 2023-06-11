import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnScreen(
	ref: string | React.RefObject<any>,
	throttleMilliseconds = 100
): boolean {
	let objectRef!: HTMLElement
	if (typeof ref === 'string') {
		objectRef = document.getElementById(ref as string) as HTMLElement
	} else if (typeof ref === 'object' && 'current' in ref) {
		objectRef = ref.current as HTMLElement
	}
	const [isVisible, setIsVisible] = React.useState(false)

	const onScroll = throttle(() => {
		if (!objectRef) {
			setIsVisible(false)
			return
		}
		const rect = objectRef.getBoundingClientRect()
		const isTopVisible = rect.top >= 0 && rect.top <= window.innerHeight
		const isBottomVisible =
			rect.bottom >= 0 && rect.bottom <= window.innerHeight
		const isMiddleVisible = rect.top < 0 && rect.bottom > window.innerHeight
		setIsVisible(isTopVisible || isBottomVisible || isMiddleVisible)
	}, throttleMilliseconds)

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true)
		return () => document.removeEventListener('scroll', onScroll, true)
	})

	return isVisible
}
