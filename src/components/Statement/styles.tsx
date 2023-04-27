import styled, { keyframes, css } from 'styled-components'

const showText = keyframes`
	0% { transform: translate3d(0, 100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`

export const Wrapper = styled.div<{ isVisible: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100lvh;
	> h1 {
		opacity: ${(props) => (props.isVisible ? '1' : '0')};
		max-font-size: 65px;
		transition: opacity 1s ease-in;
		animation: ${(props) =>
			props.isVisible
				? css`
						${showText} 0.6s ease-out forwards
				  `
				: 'none'};
	}
`

export const ChevronDiv = styled.div<{ isEntireBoxVisible: boolean }>`
	position: absolute;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 0;
	left: calc(50% - 30px);
	opacity: ${(props) => (props.isEntireBoxVisible ? '1' : '0')};
	transition: opacity 0.5s ease;
	> svg {
		opacity: 0.5;
		transition: height 0.5s ease;
		margin-bottom: 100px;
		&:hover {
			height: 60px;
			width: 60px;
		}
	}
`
