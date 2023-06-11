import { useEffect, useState } from 'react'
export type WindowDimension = {
	width: number
	height: number
}
export function useWindowDimensions(): WindowDimension {
	const [windowDimension, setWindowDimensions] = useState({
		width: 0,
		height: 0
	})
	useEffect(() => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight
		})
		function handleResize() {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return windowDimension
}
