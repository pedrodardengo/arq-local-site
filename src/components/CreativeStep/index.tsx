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
	const [isHovered, setIsHovered] = React.useState<boolean>(false)
	return (
		<S.Wrapper>
			<S.HeaderDiv isImageHovered={isHovered}>
				<S.NumberHeader>{stepNumber}</S.NumberHeader>
				<S.TitleHeader isImageHovered={isHovered}>{stepTitle}</S.TitleHeader>
			</S.HeaderDiv>
			<S.ImageDiv
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<NextImage
					src={stepImageSrc}
					alt={`Passo criativo ${stepNumber}: ${stepTitle}`}
					height={400}
					width={400}
				/>
				<div>{children}</div>
			</S.ImageDiv>
		</S.Wrapper>
	)
}

export default CreativeStep
