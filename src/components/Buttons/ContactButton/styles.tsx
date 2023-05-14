import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Button = styled.div`
	color: ${THEME.colors.primaryColor};
	border: 1px solid ${THEME.colors.accentColor};
	font-size: ${THEME.fontSize.title2Desktop}px;
	font-weight: ${THEME.fontWeight.semiBold};
	padding: 12px 15px 12px 15px;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 20px;
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
	max-width: 270px;
`
