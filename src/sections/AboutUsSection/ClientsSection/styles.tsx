import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;

	flex-direction: column;
	justify-content: center;
	gap: 50px;
`

export const TitleDiv = styled.div`
	position: relative;
	left: 12.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
	}
`
