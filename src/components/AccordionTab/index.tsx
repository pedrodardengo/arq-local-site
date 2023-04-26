import React from 'react'
import * as S from './styles'
import {
	FaChevronDown,
	FaChevronCircleDown,
	FaChevronCircleUp,
	FaChevronUp
} from 'react-icons/fa'
import THEME from '@/styles/theme'

interface AccordionTabProps {
	title?: string
	children: React.ReactNode
}

const AccordionTab: React.FC<AccordionTabProps> = ({
	title = '',
	children
}) => {
	const plus = <FaChevronDown size={THEME.fontSize.title3Desktop} />
	const plusCircle = (
		<FaChevronCircleDown
			color={THEME.colors.accentColor}
			size={1.2 * THEME.fontSize.title3Desktop}
		/>
	)
	const minus = <FaChevronUp size={THEME.fontSize.title3Desktop} />
	const minusCircle = (
		<FaChevronCircleUp
			color={THEME.colors.accentColor}
			size={1.2 * THEME.fontSize.title3Desktop}
		/>
	)

	const [isOpen, setIsOpen] = React.useState(false)
	const [icon, setIcon] = React.useState(plus)
	const handleToggleAccordion = () => {
		setIcon(isOpen ? plus : minus)
		setIsOpen(!isOpen)
	}
	const OnMouseOverTab = () => {
		setIcon(isOpen ? minusCircle : plusCircle)
	}

	const OnMouseLeaveTab = () => {
		setIcon(isOpen ? minus : plus)
	}

	return (
		<S.AccordionTabContainer onClick={handleToggleAccordion}>
			<S.AccordionTabHeader
				onClick={handleToggleAccordion}
				onMouseOver={OnMouseOverTab}
				onMouseLeave={OnMouseLeaveTab}
			>
				<h3>{title}</h3>
				<S.IconWrapper>{icon}</S.IconWrapper>
			</S.AccordionTabHeader>
			<S.AccordionTabContent isOpen={isOpen}>
				<p>{children}</p>
			</S.AccordionTabContent>
		</S.AccordionTabContainer>
	)
}

export default AccordionTab
