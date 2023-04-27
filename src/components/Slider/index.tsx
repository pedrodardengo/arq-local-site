import React from 'react'
import * as S from './styles'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useOnInterval } from '@/utils/useOnInterval'
import { useOnEventListener } from '@/utils/useOnEventListener'

export type CarouselProps = {
	itemsWidth?: number
	itemsHeight?: number
	sliderDuration?: number
	children: React.ReactNode[]
}

function Slider({
	itemsWidth = 200,
	sliderDuration = 30,
	children
}: CarouselProps) {
	const listBaseWidth = children.length * (itemsWidth + 80)
	const [baseOffset, setBaseOffset] = React.useState(200)
	const startTimeRef = React.useRef(performance.now())
	const windowDimensions = useWindowDimensions()
	const [numberOfCloneLists, setNumberOfCloneLists] = React.useState(2)

	useOnInterval(() => {
		startTimeRef.current = performance.now()
	}, sliderDuration * 1000)

	React.useEffect(() => {
		function moveLists() {
			const elapsed = performance.now() - startTimeRef.current
			const distance = (elapsed / (sliderDuration * 1000)) * listBaseWidth
			setBaseOffset(-distance % listBaseWidth)
		}
		requestAnimationFrame(moveLists)
	}, [baseOffset, sliderDuration, listBaseWidth])

	function onResizeHandler() {
		const numberOfClones = Math.ceil(
			(2 * windowDimensions.width) / listBaseWidth
		)
		setNumberOfCloneLists(Math.max(2, numberOfClones))
	}
	useOnEventListener(onResizeHandler, 'resize', true)
	const allSliderLists = Array.from({ length: numberOfCloneLists }, (_, i) => {
		const offset = baseOffset + i * listBaseWidth
		const offsetStyle: React.CSSProperties = {
			transform: `translateX(${offset}px) translateY(-50%)`
		}
		return (
			<S.CarouselList key={i} style={offsetStyle}>
				{React.Children.map(children, (child: React.ReactNode) => (
					<S.CarouselItem width={itemsWidth}>{child}</S.CarouselItem>
				))}
			</S.CarouselList>
		)
	})

	return <S.Wrapper>{allSliderLists}</S.Wrapper>
}

export default Slider
