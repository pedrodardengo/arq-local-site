import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	background-color: ${THEME.colors.secondaryColor};
`

export const MoreProjectsButton = styled.p`
	cursor: pointer;
	padding: 0 0 8px 0;
	border-bottom: 1px solid ${THEME.colors.primaryColor};

	&:hover {
		color: ${THEME.colors.accentColor};
		border-bottom: 1px solid ${THEME.colors.accentColor};
	}
`
