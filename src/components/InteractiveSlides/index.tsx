import React from 'react'
import * as S from './styles'
import { ImageDTO } from '@/types/ImageDTO'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { checkOverlap } from '@/utils/checkOverlap'

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
	const arrowLeftRef = React.useRef<HTMLDivElement>(null)
	const arrowRightRef = React.useRef<HTMLDivElement>(null)
	const slideDivRef = React.useRef<HTMLDivElement>(null)
	const [arrowLeftOverlap, setArrowLeftOverlap] = React.useState<boolean>(true)
	const [arrowRightOverlap, setArrowRightOverlap] =
		React.useState<boolean>(false)

	const goToPreviousSlide = () => {
		setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	}

	const goToNextSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			Math.min(prevIndex + 1, images.length - 1)
		)
	}

	const checkOverlapsOfArrows = () => {
		setArrowRightOverlap(
			checkOverlap(arrowRightRef, `image${currentSlideIndex}`)
		)
		setArrowLeftOverlap(checkOverlap(arrowLeftRef, `image${currentSlideIndex}`))
	}

	React.useEffect(() => {
		checkOverlapsOfArrows()
		let resizeObserver: ResizeObserver
		if (slideDivRef.current) {
			resizeObserver = new ResizeObserver(checkOverlapsOfArrows)
			resizeObserver.observe(slideDivRef.current)
		}
		return () => {
			if (resizeObserver && slideDivRef.current) {
				resizeObserver.unobserve(slideDivRef.current)
			}
		}
	}, [currentSlideIndex])

	return (
		<S.Wrapper>
			<S.TextDiv>
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
				imageDimensions={images[currentSlideIndex].dimensions}
				ref={slideDivRef}
			>
				{images.map((image: ImageDTO, index: number) => {
					return (
						<S.SlideImage
							key={index}
							src={image.url}
							alt={image.alt}
							active={currentSlideIndex == index}
							imageDimensions={image.dimensions}
							id={`image${index}`}
							onLoad={checkOverlapsOfArrows}
						/>
					)
				})}
				<S.ButtonContainer>
					<S.Button
						onClick={goToPreviousSlide}
						disabled={currentSlideIndex === 0}
					>
						<S.LeftArrow
							disabled={currentSlideIndex === 0}
							ref={arrowLeftRef}
							overlapsImages={arrowLeftOverlap}
						>
							<FaChevronLeft />
						</S.LeftArrow>
					</S.Button>
					<S.Button
						onClick={goToNextSlide}
						disabled={currentSlideIndex === images.length - 1}
					>
						<S.RightArrow
							disabled={currentSlideIndex === images.length - 1}
							ref={arrowRightRef}
							overlapsImages={arrowRightOverlap}
						>
							<FaChevronRight />
						</S.RightArrow>
					</S.Button>
					<S.IndicatorsBox numberOfIndicators={images.length}>
						{images.map((_, index: number) => {
							return (
								<S.SlideIndicator
									key={index}
									active={currentSlideIndex == index}
									onClick={() => setCurrentSlideIndex(index)}
								/>
							)
						})}
					</S.IndicatorsBox>
				</S.ButtonContainer>
			</S.SlideDiv>
		</S.Wrapper>
	)
}
export default InteractiveSlides
