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
	width: 75%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const TextDiv = styled.div`
	max-width: 550px;
	text-align: center;
`

export const ImagesWrapper = styled.div`
	position: relative;
	margin-top: 256px;
	margin-bottom: 128px;
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding: 0;
		width: 100%;
		justify-content: center;
	}

	img {
		position: absolute;
		height: 120px;
		@media (max-width: ${THEME.screenSize.tablet}px) {
			width: 60%;
		}
	}
`
