import * as S from './styles'
import THEME from '@/styles/theme'
import React from 'react'
import useOnMiddleOfScreen from '@/utils/useOnMiddleOfScreen'
import { useRouter } from 'next/router'
import { scrollToRef } from '@/utils/scrollToRef'

export type NavBarButtonProps = {
	textColor?: string
	sectionRef: string | React.RefObject<HTMLDivElement>
	addUnderLineIfOnSection?: boolean
	children?: React.ReactNode | React.ReactNode[]
	style?: React.CSSProperties
}

const NavBarButton = ({
	textColor = THEME.colors.primaryColor,
	addUnderLineIfOnSection = false,
	sectionRef,
	children,
	style
}: NavBarButtonProps) => {
	const isOnSection = useOnMiddleOfScreen(sectionRef)
	const router = useRouter()
	const isOnHomePage = router.pathname === '/'
	const onClickHandler = isOnHomePage
		? () => scrollToRef(sectionRef)
		: () => router.push(`/#${sectionRef}`)

	return (
		<S.Wrapper
			textColor={textColor}
			underline={addUnderLineIfOnSection && isOnSection}
			onClick={onClickHandler}
			style={style}
		>
			{children}
		</S.Wrapper>
	)
}

export default NavBarButton
