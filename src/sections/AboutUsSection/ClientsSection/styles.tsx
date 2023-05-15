import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	background-color: ${THEME.colors.accentColor};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 32px;
`

export const ContentDiv = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 75%;
	gap: 32px;
`

export const TitleAndPanelsDiv = styled.div`
	margin-top: 128px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 64px;
	gap: 64px;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
	}
`

export const TitleHeader = styled.div`
	color: ${THEME.colors.secondaryColor};
	font-size: ${THEME.fontSize.title1Desktop}px;
	width: 50%;
	max-width: 490px;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
		text-align: center;
		font-size: ${THEME.fontSize.title1Tablet}px;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		font-size: ${THEME.fontSize.title1Mobile}px;
	}
`
export const PanelsDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	gap: 64px;
	width: 45%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
		align-items: center;
	}
`

export const PanelDiv = styled.div`
	padding: 60px;
	min-height: 200px;
	max-width: 369px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 32px;
	background-color: ${THEME.colors.secondaryColor};
`
