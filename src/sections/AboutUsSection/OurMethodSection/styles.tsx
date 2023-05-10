import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 75%;
`

export const TitleDiv = styled.div`
	max-width: 700px;
	text-align: center;
`
export const StepsGrid = styled.div`
	margin-top: 128px;
	display: grid;
	grid-template-columns: repeat(4, minmax(0px, 1fr));
	grid-template-rows: auto;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		grid-template-columns: repeat(2, minmax(0px, 1fr));
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		grid-template-columns: repeat(1, minmax(0px, 1fr));
	}
`
