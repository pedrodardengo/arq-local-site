import React from 'react'
import * as S from './styles'
import Slider from '@/components/Slider'
import axios from 'axios'
import { ImageDTO } from '@/types/ImageDTO'
import NextImage from 'next/image'
import Title from '@/components/Title'
import THEME from '@/styles/theme'
import { Textfit } from 'react-textfit'

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
			<S.ContentDiv>
				<S.TitleAndPanelsDiv>
					<S.TitleDiv>
						<Textfit mode="single" max={48}>
							Nossa prática <br />
							criativa e criteriosa <br />
							gera resultados <br />
							positivos
						</Textfit>
					</S.TitleDiv>
					<S.PanelsDiv>
						<S.PanelDiv>
							<p style={{ fontWeight: THEME.fontWeight.semiBold }}>
								Jéssica Oliveira
							</p>
							<br />
							<p>
								“A Mariana está planejando todos os detalhes do nosso novo
								apartamento. Se você precisa de uma empresa séria, comprometida
								e com excelentes profissionais, a Arquitetura Local é a sua
								melhor opção.”
							</p>
						</S.PanelDiv>
						<S.PanelDiv>
							<p style={{ fontWeight: THEME.fontWeight.semiBold }}>
								Helder Lisboa
							</p>
							<br />
							<p>
								“Agradecemos pela competência e pelo carinho com nosso projeto!
								Arquitetos maravilhosos!”
							</p>
						</S.PanelDiv>
					</S.PanelsDiv>
				</S.TitleAndPanelsDiv>

				<Title color={THEME.colors.secondaryColor}>CLIENTES</Title>
			</S.ContentDiv>
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
