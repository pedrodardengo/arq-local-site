import React from 'react'
import * as S from './styles'
import { useOnEventListener } from '@/utils/useOnEventListener'
import { ImageDTO } from '@/types/ImageDTO'

const InteractiveSlides = ({
	title,
	description,
	images
}: {
	title: string
	description: string[]
	images: ImageDTO[]
}) => {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0)
	const [slideDivHeight, setSlideDivHeight] = React.useState<number>(200)
	const slideDivRef = React.useRef<HTMLDivElement>(null)
	function getSlideDivHeight() {
		if (slideDivRef.current) {
			setSlideDivHeight(slideDivRef.current.getBoundingClientRect().height)
		}
	}
	useOnEventListener(getSlideDivHeight, 'resize', true, [currentSlideIndex])

	const goToPreviousSlide = () => {
		setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	}

	const goToNextSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			Math.min(prevIndex + 1, images.length - 1)
		)
	}

	return (
		<S.Wrapper>
			<S.TextDiv height={slideDivHeight}>
				<h2>{title}</h2>
				<br />
				{description.map((text: string, index: number) => {
					return (
						<>
							<p key={index}>{text}</p>
							{index + 1 != description.length ? <br /> : ''}
						</>
					)
				})}
			</S.TextDiv>
			<S.SlideDiv ref={slideDivRef}>
				{images.map((image: ImageDTO, index: number) => {
					return (
						<S.SlideImage
							key={index}
							src={image.url}
							alt={image.alt}
							active={currentSlideIndex == index}
							onLoad={getSlideDivHeight}
						/>
					)
				})}
				<S.ButtonContainer>
					<S.Button
						onClick={goToPreviousSlide}
						disabled={currentSlideIndex === 0}
					></S.Button>
					<S.Button
						onClick={goToNextSlide}
						disabled={currentSlideIndex === images.length - 1}
					></S.Button>
				</S.ButtonContainer>
			</S.SlideDiv>
		</S.Wrapper>
	)
}
export default InteractiveSlides
