import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import { doOnInterval } from '@/utils/doOnInterval'

const PhilosophySection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageIndex, setImageIndex] = React.useState(1)
	doOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper ref={ref}>
			<S.TitleWrapper>
				<Text>
					<h1>Prática criativa comprometida com o contexto</h1>
				</Text>
			</S.TitleWrapper>
			<S.Content>
				<Text>
					<p>
						ARQUITETURA LOCAL é um estúdio de arquitetura e design baseado em
						Belo Horizonte, Minas Gerais, que se dedica a projetos de diferentes
						escalas e categorias, sempre desenvolvidos a partir do entendimento
						profundo das demandas de seus clientes e do local em torno de cada
						proposta.
					</p>
					<br />
					<p>
						Essa são os dois sentidos que orientam o trabalho do escritório: uma
						lente focada na demanda específica e outra com vista panorâmica do
						lugar, do contexto e da atualidade.
					</p>
				</Text>
				<S.ImageWrapper>
					<img src={`./img/al-logo-${imageIndex}.svg`} alt={''} />
				</S.ImageWrapper>
			</S.Content>
		</S.Wrapper>
	)
})

PhilosophySection.displayName = 'About Us Section'

export default PhilosophySection