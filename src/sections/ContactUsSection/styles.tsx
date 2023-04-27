import styled from 'styled-components'
import THEME from '@/styles/theme'
export const Wrapper = styled.div`
	width: 100%;
`

export const StatementDiv = styled.div`
	position: relative;
	left: 12.5%;
	width: 62.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 63.3%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
	}
`
export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 64px;
	margin-top: 64px;
	height: 100lvh;
	left: 12.5%;
	width: 62.5%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 63.3%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
	}
`
