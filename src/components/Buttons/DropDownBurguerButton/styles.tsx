import styled from 'styled-components'
import THEME from '@/styles/theme'

export const BurgerIconWrapper = styled.div<{ iconColor: string }>`
	cursor: pointer;
	color: ${(props) => props.iconColor};

	&:hover {
		color: ${THEME.colors.accentColor};
	}
`
