import React, { ReactElement } from 'react'
import * as S from './styles'

const InteractiveSlides = ({
	title,
	description,
	children
}: {
	title: string
	description: string[]
	children: ReactElement[]
}) => {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
	const totalSlides = React.Children.count(children)

	React.useEffect(() => {
		// Preload all images
		children.forEach((child) => {
			const img = new Image()
			img.src = child.props.src
		})
	}, [children])

	const goToPreviousSlide = () => {
		setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	}

	const goToNextSlide = () => {
		setCurrentSlideIndex((prevIndex) =>
			Math.min(prevIndex + 1, totalSlides - 1)
		)
	}

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
			<S.SlideDiv>
				{React.Children.map(children, (child, index) => {
					return (
						<S.SlideImage
							src={child.props.src}
							alt={child.props.alt}
							active={currentSlideIndex == index}
						></S.SlideImage>
					)
				})}
				<S.ButtonContainer>
					<S.Button
						onClick={goToPreviousSlide}
						disabled={currentSlideIndex === 0}
					></S.Button>
					<S.Button
						onClick={goToNextSlide}
						disabled={currentSlideIndex === totalSlides - 1}
					></S.Button>
				</S.ButtonContainer>
			</S.SlideDiv>
		</S.Wrapper>
	)
}
export default InteractiveSlides
