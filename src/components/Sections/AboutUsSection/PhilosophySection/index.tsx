import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import { useOnInterval } from '@/utils/useOnInterval'
import NextImage from 'next/image'
import Statement from '@/components/Statement'

const PhilosophySection = () => {
	const [imageIndex, setImageIndex] = React.useState(1)
	useOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper>
			<S.TitleWrapper>
				<Statement>Prática criativa comprometida com o contexto.</Statement>
			</S.TitleWrapper>
			<S.Content>
				<S.ImagesWrapper>
					<NextImage
						src={`/img/al-logo-1.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 1 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-2.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 2 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-3.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 3 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-4.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 4 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-5.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 5 ? '1' : '0' }}
					/>
				</S.ImagesWrapper>
				<S.ParagraphWrapper>
					<Text>
						<p>
							ARQUITETURA LOCAL é um estúdio de arquitetura e design baseado em
							Belo Horizonte, Minas Gerais, que se dedica a projetos de
							diferentes escalas e categorias, sempre desenvolvidos a partir do
							entendimento profundo das demandas de seus clientes e do local em
							torno de cada proposta.
						</p>
						<br />
						<p>
							Essa são os dois sentidos que orientam o trabalho do escritório:
							uma lente focada na demanda específica e outra com vista
							panorâmica do lugar, do contexto e da atualidade.
						</p>
					</Text>
				</S.ParagraphWrapper>
			</S.Content>
		</S.Wrapper>
	)
}

export default PhilosophySection