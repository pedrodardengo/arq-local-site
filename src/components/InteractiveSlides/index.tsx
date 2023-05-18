import React, { ReactElement } from 'react'
import styled from 'styled-components'
import THEME from '@/styles/theme'

const ButtonContainer = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Button = styled.button`
	margin: 0 5px;
	padding: 5px 10px;
	font-size: 16px;
	z-index: 10;
`

const Container = styled.div`
	position: relative;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		justify-content: flex-start;
	}
`

const SlideImage = styled.img<{ active: boolean }>`
	max-width: 100%;
	max-height: 75vh;
	object-fit: contain;
	display: ${(props) => (props.active ? 'block' : 'none')};
	transition: opacity 2s ease-in-out;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		max-height: 55vh;
	}
`

const InteractiveSlides = ({ children }: { children: ReactElement[] }) => {
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
		<Container>
			{React.Children.map(children, (child, index) => {
				return (
					<SlideImage
						src={child.props.src}
						alt={child.props.alt}
						active={currentSlideIndex == index}
					/>
				)
			})}

			<ButtonContainer>
				<Button onClick={goToPreviousSlide} disabled={currentSlideIndex === 0}>
					Previous
				</Button>
				<Button
					onClick={goToNextSlide}
					disabled={currentSlideIndex === totalSlides - 1}
				>
					Next
				</Button>
			</ButtonContainer>
		</Container>
	)
}
export default InteractiveSlides
