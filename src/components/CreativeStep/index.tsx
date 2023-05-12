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
	return (
		<S.Wrapper>
			<S.HeaderDiv>
				<S.NumberHeader>{stepNumber}</S.NumberHeader>
				<S.TitleHeader>{stepTitle}</S.TitleHeader>
			</S.HeaderDiv>
			<S.ImageDiv>
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
