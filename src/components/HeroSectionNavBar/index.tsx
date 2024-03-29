import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import NavBarButton from 'src/components/Buttons/NavBarButton'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useIsBellowHeroSection } from '@/utils/useIsBellowHeroSection'
import { DropDownBurgerButton } from '@/components/Buttons/DropDownBurguerButton'
import InstitutionalLogo from '@/components/Logos/InstitutionalLogo'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
import { redirectToInstagram, redirectToWhatsapp } from '@/utils/redirectToPage'
import { scrollToStart } from '@/utils/scrollToRef'

export type HeroSectionNavBarProps = {
	style?: React.CSSProperties
}

const HeroSectionNavBar = ({ style }: HeroSectionNavBarProps) => {
	const windowWidth = useWindowDimensions().width
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	const [backgroundColor, setBackgroundColor] = React.useState('transparent')
	const [navBarStyle, setNavBarStyle] = React.useState({})
	const [navBarShadow, setNavBarShadow] = React.useState(true)
	const [logoColors, setLogoColors] = React.useState({
		color: THEME.colors.secondaryColor,
		highLightColor: THEME.colors.accentColor
	})

	const navBarButtons = (
		<>
			<NavBarButton
				textColor={elementsColor}
				sectionRef={'projectsSection'}
				addUnderLineIfOnSection={true}
			>
				PROJETOS
			</NavBarButton>
			<NavBarButton
				textColor={elementsColor}
				sectionRef={'researchesSection'}
				addUnderLineIfOnSection={true}
			>
				PESQUISA
			</NavBarButton>
			<NavBarButton
				textColor={elementsColor}
				sectionRef={'aboutUsSection'}
				addUnderLineIfOnSection={true}
			>
				SOBRE
			</NavBarButton>
			<NavBarButton
				textColor={elementsColor}
				sectionRef={'contactUsSection'}
				addUnderLineIfOnSection={true}
			>
				CONTATO
			</NavBarButton>
		</>
	)

	let toRender: JSX.Element = (
		<S.ButtonsBox>
			{navBarButtons}
			<S.IconsBox color={elementsColor}>
				<RiInstagramFill size={18} onClick={redirectToInstagram} />
				<RiWhatsappFill size={18} onClick={redirectToWhatsapp} />
			</S.IconsBox>
		</S.ButtonsBox>
	)
	if (windowWidth < THEME.screenSize.tablet) {
		toRender = (
			<DropDownBurgerButton
				iconColor={elementsColor}
				iconSize={windowWidth < THEME.screenSize.mobile ? 25 : 30}
			/>
		)
	}
	const isBellowHeroSection = useIsBellowHeroSection()

	React.useEffect(() => {
		function handleScroll() {
			if (isBellowHeroSection) {
				setElementsColor(THEME.colors.primaryColor)
				setBackgroundColor(THEME.colors.secondaryColor)
				setNavBarStyle({ top: 0, position: 'fixed' })
				setNavBarShadow(false)
				setLogoColors({
					color: THEME.colors.accentColor,
					highLightColor: THEME.colors.primaryColor
				})
			} else {
				setElementsColor(THEME.colors.secondaryColor)
				setNavBarStyle({})
				setBackgroundColor('transparent')
				setNavBarShadow(true)
				setLogoColors({
					color: THEME.colors.secondaryColor,
					highLightColor: THEME.colors.accentColor
				})
			}
		}
		return handleScroll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isBellowHeroSection])
	return (
		<S.Wrapper
			backgroundColor={backgroundColor}
			style={{ ...style, ...navBarStyle }}
			shadowActive={navBarShadow}
			shadowHeight={windowWidth < THEME.screenSize.mobile ? 100 : 150}
		>
			<S.ContentWrapper>
				<InstitutionalLogo
					color={logoColors.color}
					sizeMultiplier={windowWidth < THEME.screenSize.mobile ? 0.9 : 1}
					onClick={scrollToStart}
					highlightColorOnHover={logoColors.highLightColor}
				/>
				{toRender}
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default HeroSectionNavBar
