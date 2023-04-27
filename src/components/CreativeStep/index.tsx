import * as S from './styles'
import NextImage from 'next/image'
import React from 'react'

const CreativeStep = ({
	stepNumber,
	stepTitle,
	stepImageSrc,
	children
}: {
	stepNumber: number
	stepTitle: string
	stepImageSrc: string
	children: React.ReactNode
}) => {
	const imageRef = React.useRef<HTMLImageElement>(null)
	const [minDescHeight, setMinDescHeight] = React.useState(200)

	React.useEffect(() => {
		const handleResize = () => {
			setMinDescHeight(imageRef.current?.clientHeight || 200)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<S.Wrapper>
			<S.HeaderDiv>
				<S.NumberSpan>{stepNumber}</S.NumberSpan>
				<S.TitleSpan>{stepTitle}</S.TitleSpan>
			</S.HeaderDiv>
			<S.ImageDiv descMinHeight={minDescHeight}>
				<NextImage
					src={stepImageSrc}
					alt={`Passo criativo ${stepNumber}: ${stepTitle}`}
					height={200}
					width={200}
					ref={imageRef}
				/>
				<div>{children}</div>
			</S.ImageDiv>
		</S.Wrapper>
	)
}

export default CreativeStep
