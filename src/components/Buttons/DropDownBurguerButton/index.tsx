import DropdownMenu from '@/components/DropdownMenu'
import React from 'react'
import THEME from '@/styles/theme'
import * as S from './styles'
import { RxHamburgerMenu } from 'react-icons/rx'
import NavBarButton from '@/components/Buttons/NavBarButton'

export const DropDownBurgerButton = ({
	style,
	iconColor = THEME.colors.primaryColor,
	iconSize = 35,
	initialPosition = 'above'
}: {
	style?: React.CSSProperties
	iconColor?: string
	iconSize?: number
	initialPosition?: 'above' | 'below'
}) => {
	const [isMenuOpen, setMenuOpen] = React.useState(false)
	const dropdownRef = React.useRef<HTMLDivElement>(null)
	const [renderPosition, setRenderPosition] = React.useState<'above' | 'below'>(
		initialPosition
	)
	const [elementsColor, setElementsColor] = React.useState(
		initialPosition == 'above'
			? THEME.colors.secondaryColor
			: THEME.colors.primaryColor
	)
	function OnClickHandler() {
		setMenuOpen(!isMenuOpen)
	}

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target
			if (!(target instanceof Node)) return
			if (dropdownRef.current && !dropdownRef.current.contains(target)) {
				setMenuOpen(false)
			}
		}

		const handleScroll = () => {
			const buttonRect = dropdownRef.current?.getBoundingClientRect()
			const windowHeight = window.innerHeight
			const buttonBottom = buttonRect?.bottom || 0
			if (windowHeight - buttonBottom < 200) {
				setRenderPosition('above')
				setElementsColor(THEME.colors.secondaryColor)
			} else {
				setRenderPosition('below')
				setElementsColor(THEME.colors.primaryColor)
			}
		}

		window.addEventListener('scroll', handleScroll)
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [dropdownRef])

	return (
		<div style={{ ...style, position: 'relative' }} ref={dropdownRef}>
			<S.BurgerIconWrapper onClick={OnClickHandler} iconColor={iconColor}>
				<RxHamburgerMenu size={iconSize} />
			</S.BurgerIconWrapper>
			<DropdownMenu
				isOpen={isMenuOpen}
				renderPosition={renderPosition}
				backgroundColor={
					renderPosition == 'above'
						? THEME.colors.shadow
						: THEME.colors.faintGrey
				}
			>
				<NavBarButton textColor={elementsColor} sectionRef={'projectsSection'}>
					PROJETOS
				</NavBarButton>
				<NavBarButton
					textColor={elementsColor}
					sectionRef={'researchesSection'}
				>
					PESQUISA
				</NavBarButton>
				<NavBarButton textColor={elementsColor} sectionRef={'aboutUsSection'}>
					SOBRE
				</NavBarButton>
				<NavBarButton textColor={elementsColor} sectionRef={'contactUsSection'}>
					CONTATO
				</NavBarButton>
			</DropdownMenu>
		</div>
	)
}
