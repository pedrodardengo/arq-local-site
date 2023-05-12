import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import NavBarButton from 'src/components/Buttons/NavBarButton'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { DropDownBurgerButton } from '@/components/Buttons/DropDownBurguerButton'
import InstitutionalLogo from '@/components/Logos/InstitutionalLogo'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
import { redirectToInstagram, redirectToWhatsapp } from '@/utils/redirectToPage'
import { useRouter } from 'next/router'

const NavBar = () => {
	const windowWidth = useWindowDimensions().width
	const router = useRouter()
	const navBarButtons = (
		<>
			<NavBarButton sectionRef={'projectsSection'}>PROJETOS</NavBarButton>
			<NavBarButton sectionRef={'researchesSection'}>PESQUISA</NavBarButton>
			<NavBarButton sectionRef={'aboutUsSection'}>SOBRE</NavBarButton>
			<NavBarButton sectionRef={'contactUsSection'}>CONTATO</NavBarButton>
		</>
	)

	let toRender: JSX.Element = (
		<S.ButtonsBox>
			{navBarButtons}
			<S.IconsBox>
				<RiInstagramFill size={18} onClick={redirectToInstagram} />
				<RiWhatsappFill size={18} onClick={redirectToWhatsapp} />
			</S.IconsBox>
		</S.ButtonsBox>
	)
	if (windowWidth < THEME.screenSize.tablet) {
		toRender = (
			<DropDownBurgerButton
				iconColor={THEME.colors.primaryColor}
				iconSize={windowWidth < THEME.screenSize.mobile ? 25 : 30}
			/>
		)
	}

	return (
		<S.Wrapper shadowHeight={windowWidth < THEME.screenSize.mobile ? 100 : 150}>
			<S.ContentWrapper>
				<InstitutionalLogo
					color={THEME.colors.accentColor}
					sizeMultiplier={windowWidth < THEME.screenSize.mobile ? 0.9 : 1}
					onClick={() => router.push('/')}
					highlightColorOnHover={THEME.colors.primaryColor}
				/>
				{toRender}
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default NavBar
