import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
`

export const Content = styled.div`
	position: relative;
	left: 12.5%;
	width: 62.5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 66.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
	}
`
export const TitleWrapper = styled.div`
	> p {
		font-size: ${THEME.fontSize.smallText};
	}
`

export const JobContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 10%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
		gap: 40px;
	}
`
export const JobHeader = styled.div`
	width: 20%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
`

export const JobDescription = styled.div`
	width: 70%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
`
