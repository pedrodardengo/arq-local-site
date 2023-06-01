import React from 'react'
import * as S from './styles'
import { Dimensions, ImageDTO } from '@/types/ImageDTO'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

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
	const [slideDivDimensions, setSlideDivDimensions] =
		React.useState<Dimensions>({
			height: 200,
			width: 200
		})
	const slideDivRef = React.useRef<HTMLDivElement>(null)
	function getSlideDivDimensions() {
		if (slideDivRef.current) {
			setSlideDivDimensions(slideDivRef.current.getBoundingClientRect())
		}
	}
	React.useEffect(() => {
		const resizeObserver = new ResizeObserver(getSlideDivDimensions)
		if (slideDivRef.current) {
			resizeObserver.observe(slideDivRef.current)
		}

		return () => {
			resizeObserver.disconnect()
		}
	}, [])
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
			<S.TextDiv height={slideDivDimensions.height}>
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
			<S.SlideDiv
				ref={slideDivRef}
				slideDimensions={slideDivDimensions}
				imageDimensions={images[currentSlideIndex].dimensions}
			>
				{images.map((image: ImageDTO, index: number) => {
					return (
						<S.SlideImage
							key={index}
							src={image.url}
							alt={image.alt}
							active={currentSlideIndex == index}
							onLoad={getSlideDivDimensions}
						/>
					)
				})}
				<S.ButtonContainer>
					<S.Button
						onClick={goToPreviousSlide}
						disabled={currentSlideIndex === 0}
					/>
					<S.LeftArrow>
						<BsChevronLeft />
					</S.LeftArrow>
					<S.RightArrow>
						<BsChevronRight />
					</S.RightArrow>
					<S.Button
						onClick={goToNextSlide}
						disabled={currentSlideIndex === images.length - 1}
					/>
				</S.ButtonContainer>
			</S.SlideDiv>
		</S.Wrapper>
	)
}
export default InteractiveSlides
