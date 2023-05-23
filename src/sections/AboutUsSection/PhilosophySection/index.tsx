import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'
import { useOnInterval } from '@/utils/useOnInterval'
import Title from '@/components/Title'
import { Typewriter } from 'react-simple-typewriter'
import useOnScreen from '@/utils/useOnScreen'

const PhilosophySection = () => {
	const [imageIndex, setImageIndex] = React.useState(1)
	const [hasTypeWritterAnimatedExecuted, setHasTypeWritterAnimatedExecuted] =
		React.useState<boolean>(false)
	const titleRef = React.useRef(null)
	const isOnScreen = useOnScreen(titleRef)
	useOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	const completeText =
		'Somos um estúdio de arquitetura e design que coloca as pessoas no centro das decisões.'
	let typewriterText = <></>
	if (isOnScreen && !hasTypeWritterAnimatedExecuted) {
		typewriterText = (
			<Typewriter
				words={[completeText]}
				loop={1}
				cursor={false}
				typeSpeed={35}
				onLoopDone={() => setHasTypeWritterAnimatedExecuted(true)}
			/>
		)
	} else if (hasTypeWritterAnimatedExecuted) {
		typewriterText = <>{completeText}</>
	}
	return (
		<S.Wrapper>
			<S.Content>
				<S.TextDiv>
					<Title>SOBRE NÓS</Title>
					<br />
					<br />
					<h2 style={{ minHeight: 80 }} ref={titleRef}>
						{typewriterText}
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
}

export default PhilosophySection
