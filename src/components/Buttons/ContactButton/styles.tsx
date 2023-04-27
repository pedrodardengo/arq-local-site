import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Button = styled.div`
	color: ${THEME.colors.primaryColor};
	border: 1px solid ${THEME.colors.accentColor};
	font-size: ${THEME.fontSize.buttons}px;
	padding: 8px;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 20px;
	justify-content: center;
	align-items: center;
	-webkit-tap-highlight-color: transparent;
	background-image: linear-gradient(
		${THEME.colors.accentColor},
		${THEME.colors.accentColor}
	);
	background-size: 0 100%;
	background-repeat: no-repeat;
	transition: 0.6s;
	&:hover {
		background-size: 100% 100%;
		color: ${THEME.colors.secondaryColor};
	}
	max-width: 200px;
`
