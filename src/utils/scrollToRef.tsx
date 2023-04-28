import React from 'react'
import { animateScroll } from 'react-scroll'

export function scrollToRef(ref: string | React.RefObject<any>, topOffset = 0) {
	let objectRef!: HTMLElement
	if (typeof ref === 'string') {
		objectRef = document.getElementById(ref as string) as HTMLElement
	} else if (typeof ref === 'object' && 'current' in ref) {
		objectRef = ref.current as HTMLElement
	}

	const targetOffset = objectRef.offsetTop
	const start = window.scrollY
	const scrollDistance = Math.abs(targetOffset - start)
	let duration = Math.max(1000, scrollDistance)
	duration = Math.min(3000, duration)
	const scrollPosition = targetOffset + window.innerHeight + topOffset - 64
	animateScroll.scrollTo(scrollPosition, {
		duration: duration,
		smooth: true
	})
}

export function scrollToStart() {
	animateScroll.scrollToTop({
		duration: 2000,
		smooth: true
	})
}

export function scrollOneScreenHeight() {
	const scrollDistance = window.innerHeight + window.scrollY - 64
	animateScroll.scrollTo(scrollDistance, {
		duration: Math.min(1000, scrollDistance),
		smooth: true
	})
}
