import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	cursor: pointer;
`

export const HeaderDiv = styled.div<{ isHovered: boolean }>`
	margin-bottom: 10px;
	margin-left: 8px;
	z-index: 1;
	color: ${(props) =>
		props.isHovered ? THEME.colors.accentColor : THEME.colors.primaryColor};
`

export const NumberHeader = styled.p``
export const TitleHeader = styled.div<{ isHovered: boolean }>`
	display: inline-block;
	padding-bottom: 8px;
	border-bottom: 1px solid
		${(props) =>
			props.isHovered ? THEME.colors.accentColor : THEME.colors.primaryColor};
`

export const ImageDiv = styled.div<{ isHovered: boolean }>`
	position: relative;
	display: flex;
	clip-path: polygon(0 0, 100% 0, 100% 1000%, 0 1000%);
	justify-content: center;
	align-items: flex-start;
	transition: z-index 2s ease;
	z-index: ${(props) => (props.isHovered ? '20' : '1')};

	> img {
		width: 70%;
		height: 70%;
		pointer-events: none;
	}

	> div {
		position: absolute;
		z-index: ${(props) => (props.isHovered ? '1' : '20')};
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
		${(props) => (props.isHovered ? 'transform: translateY(100%);' : '')};
	}
`
