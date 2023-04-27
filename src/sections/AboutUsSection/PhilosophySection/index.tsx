import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'
import { useOnInterval } from '@/utils/useOnInterval'

const PhilosophySection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageIndex, setImageIndex] = React.useState(1)
	useOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper ref={ref}>
			<S.Content>
				<S.ImagesWrapper>
					<NextImage
						src={`/img/al-logo-orange-1.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 1 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-2.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 2 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-3.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 3 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-4.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 4 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-5.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 5 ? '1' : '0' }}
					/>
				</S.ImagesWrapper>
				<S.ParagraphWrapper>
					<h2>
						Somos um estúdio de arquitetura e design que coloca as pessoas no
						centro das decisões.
					</h2>
					<br />
					<br />
					<p>
						Para nós, a arquitetura e o design de qualidade são capazes de
						acolher e melhorar a vida, potencializando experiências cotidianas.
						Por isso, focamos no bem-estar das pessoas, na harmonia das soluções
						e na transparência das decisões.
					</p>
					<br />
					<p>
						Nossos projetos, de diferentes tipos e tamanhos, são sempre
						desenvolvidos a partir do olhar atento às demandas de cada cliente e
						ao seu contexto específico. Desenvolvemos propostas autênticas,
						atemporais e descomplicadas que possam ser vivenciadas em sua
						plenitude. Assim geramos impacto positivo para nossos clientes e
						para o mundo, criando conexões entre pessoas e lugares.
					</p>
				</S.ParagraphWrapper>
			</S.Content>
		</S.Wrapper>
	)
})
PhilosophySection.displayName = 'Philosophy Section'

export default PhilosophySection
