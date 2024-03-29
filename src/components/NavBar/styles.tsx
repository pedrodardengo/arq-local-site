import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div<{
	shadowHeight: number
}>`
	background-color: ${THEME.colors.secondaryColor};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 64px;
	margin: 0;
	padding: 0;
	position: fixed;
	top: 0;
	z-index: 2;
	bottom: 0;
	transition: background-color 300ms ease-in-out;
	border-bottom: 3px solid ${THEME.colors.secondaryColor};
`
export const ContentWrapper = styled.div`
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-left: 24px;
	padding-right: 24px;
	margin: 0;
	padding-bottom: 0;
`

export const ButtonsBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	align-items: center;
	justify-content: center;
`

export const IconsBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	padding-top: 4px;
	align-items: center;
	justify-content: center;

	> svg {
		cursor: pointer;
		&:hover {
			color: ${THEME.colors.accentColor};
		}
	}
`
