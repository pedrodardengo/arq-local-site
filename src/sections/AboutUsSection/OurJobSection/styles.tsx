import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	background-color: ${THEME.colors.accentColor};
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 64px;
	padding-top: 128px;
`

export const Content = styled.div`
	position: relative;
	width: 75%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 64px;
	> h2 {
		color: ${THEME.colors.secondaryColor};
	}
`

export const PanelsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	gap: 64px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
	}
`

export const PanelDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 60px;
	background-color: ${THEME.colors.secondaryColor};
`

export const ButtonDiv = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;

	> p {
		padding-bottom: 8px;
		color: ${THEME.colors.secondaryColor};
		text-align: center;
		border-bottom: 1px solid ${THEME.colors.secondaryColor};
		transition: font-weight 0.2s ease-in-out,
			border-bottom-width 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			font-weight: 800;
			border-bottom: 4px solid ${THEME.colors.secondaryColor};
		}
	}
`
