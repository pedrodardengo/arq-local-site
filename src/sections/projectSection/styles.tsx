import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - 64px);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`
export const ContentDiv = styled.div`
	width: 75%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 2%;
`
export const TextDiv = styled.div`
	padding-right: 20px;
	width: 24%;
	height: 65vh;
	overflow-y: scroll;
	> h2 {
		font-weight: ${THEME.fontWeight.semiBold};
	}
`

export const SlidesDiv = styled.div`
	width: 74%;
	height: 100%;
	background-color: ${THEME.colors.accentColor};
`
