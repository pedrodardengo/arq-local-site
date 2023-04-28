import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnEntireBoxVisible(
	ref: string | React.RefObject<any>
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
		const { top, bottom } = objectRef.getBoundingClientRect()
		const isVisibleTop = top >= 0 && top <= window.innerHeight + 200
		const isVisibleBottom = bottom >= 0 && bottom <= window.innerHeight + 200
		setIsVisible(isVisibleTop && isVisibleBottom)
	}, 100)

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true)
		return () => document.removeEventListener('scroll', onScroll, true)
	})

	return isVisible
}
