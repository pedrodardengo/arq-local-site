import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: flex-start;
`

export const HeaderDiv = styled.div`
	margin-bottom: 10px;
	margin-left: 8px;
	z-index: 1;
`

export const NumberSpan = styled.div`
	font-size: ${THEME.fontSize.title3Desktop}px;
	font-weight: ${THEME.fontWeight.semiBold};
`
export const TitleSpan = styled.div`
	font-size: ${THEME.fontSize.title3Desktop}px;
	font-weight: ${THEME.fontWeight.semiBold};
`

export const ImageDiv = styled.div`
	position: relative;
	display: flex;
	clip-path: polygon(0 0, 100% 0, 100% 1000%, 0 1000%);
	justify-content: center;
	align-items: flex-start;
	transition: z-index 2s ease;
	z-index: 2;
	> img {
		width: 70%;
		height: 70%;
		pointer-events: none;
	}

	&:hover {
		z-index: 20;
		> div {
			z-index: 20;
			opacity: 1;
			transform: translateY(100%);
		}
	}

	> div {
		position: absolute;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${THEME.colors.accentColor};
		color: ${THEME.colors.secondaryColor};
		padding: 25px;
		min-height: 100%;
		width: 100%;
		bottom: 101%;
		pointer-events: none;
		transition: all 0.6s ease;
	}
`
