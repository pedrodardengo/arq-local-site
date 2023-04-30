import React from 'react'
import * as S from './styles'
import Slider from '@/components/Slider'
import axios from 'axios'
import { ImageDTO } from '@/types/ImageDTO'
import NextImage from 'next/image'

const ClientsSection = () => {
	const [clientLogos, setClientLogos] = React.useState<ImageDTO[]>([
		{
			url: 'img/al-logo-5.svg',
			alt: ''
		}
	])

	const getLogoImages = () => {
		axios
			.get('/api/get-list-of-images', { params: { imageList: 'client_logos' } })
			.then(function (response) {
				setClientLogos(response.data)
			})
	}

	React.useEffect(() => {
		getLogoImages()
	}, [])

	return (
		<S.Wrapper>
			<S.TitleDiv>
				<p>/ clientes</p>
			</S.TitleDiv>
			<Slider>
				{clientLogos.map((logoImage, index) => {
					return (
						<NextImage
							key={index}
							src={logoImage.url}
							alt={logoImage.alt}
							width={200}
							height={100}
							quality={20}
						/>
					)
				})}
			</Slider>
		</S.Wrapper>
	)
}

export default ClientsSection
