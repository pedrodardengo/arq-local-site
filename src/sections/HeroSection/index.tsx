import SlideShow from '@/components/SlideShow'
import React from 'react'
import * as S from './styles'
import axios from 'axios'
import { ImageDTO } from '@/types/ImageDTO'

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [slideImages, setSlideImages] = React.useState<ImageDTO[]>([])

	const getSlideImages = () => {
		axios
			.get('/api/get-list-of-images', { params: { imageList: 'slide_images' } })
			.then(function (response) {
				setSlideImages(response.data)
			})
	}

	React.useEffect(() => {
		getSlideImages()
	}, [])

	return (
		<S.Wrapper ref={ref}>
			<SlideShow>
				{slideImages.map((slideImage, index) => {
					return <img key={index} src={slideImage.url} alt={slideImage.alt} />
				})}
			</SlideShow>
		</S.Wrapper>
	)
})

HeroSection.displayName = 'Hero Section'

export default HeroSection
