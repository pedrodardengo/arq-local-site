import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'
import { useOnInterval } from '@/utils/useOnInterval'
import Title from '@/components/Title'

const PhilosophySection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageIndex, setImageIndex] = React.useState(1)
	useOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper ref={ref}>
			<S.Content>
				<S.TextDiv>
					<Title>SOBRE NÓS</Title>
					<br />
					<br />
					<h2>
						Somos um estúdio de arquitetura e design que coloca as pessoas no
						centro das decisões.
					</h2>
				</S.TextDiv>
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
			</S.Content>
		</S.Wrapper>
	)
})
PhilosophySection.displayName = 'Philosophy Section'

export default PhilosophySection
