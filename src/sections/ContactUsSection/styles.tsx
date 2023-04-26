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
	margin-top: 64px;
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
export const ResponsiveContent = styled.div`
	margin-top: 40px;
	gap: 40%;
	display: flex;
	flex-direction: row;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		gap: 64px;
		flex-direction: column;
		justify-content: center;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		justify-content: center;
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 40%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
`

export const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 20%;
	> img {
		aspect-ratio: 1;
	}

	@media (max-width: ${THEME.screenSize.tablet}px) {
		justify-content: left;
		width: 100%;
	}
`
