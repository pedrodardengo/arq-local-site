import styled from 'styled-components'
import THEME from '@/styles/theme'
export const Wrapper = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const TextDiv = styled.div`
	max-width: 550px;
	text-align: center;
	margin-bottom: 64px;
`

export const EmailFormDiv = styled.div`
	width: 66.6%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
`
