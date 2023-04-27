import React from 'react'
import * as S from './styles'
import Slider from '@/components/Slider'
import axios from 'axios'

type LogoImage = {
	url: string
	alt: string
}
const ClientsSection = () => {
	const [clientLogos, setClientLogos] = React.useState<LogoImage[]>([
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
					return <img key={index} src={logoImage.url} alt={logoImage.alt} />
				})}
			</Slider>
		</S.Wrapper>
	)
}

export default ClientsSection
