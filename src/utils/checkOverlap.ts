import React from 'react'

function extractReference(
	ref: string | React.RefObject<any>
): HTMLElement | undefined {
	if (typeof ref === 'string') {
		return document.getElementById(ref as string) as HTMLElement
	} else if (typeof ref === 'object' && 'current' in ref) {
		return ref.current as HTMLElement
	}
}
export function checkOverlap(
	ref1: string | React.RefObject<any>,
	ref2: string | React.RefObject<any>
): boolean {
	const ref_1 = extractReference(ref1) as HTMLElement
	const ref_2 = extractReference(ref2) as HTMLElement

	if (!ref1 || !ref2 || ref_1 === null || ref_2 === null) {
		return false
	}
	const div1Rect = ref_1.getBoundingClientRect()
	const div2Rect = ref_2.getBoundingClientRect()

	return (
		div1Rect.right >= div2Rect.left &&
		div1Rect.left <= div2Rect.right &&
		div1Rect.bottom >= div2Rect.top &&
		div1Rect.top <= div2Rect.bottom
	)
}
