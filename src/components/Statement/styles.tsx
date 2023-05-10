import styled, { keyframes, css } from 'styled-components'

const showText = keyframes`
	0% { transform: translate3d(0, 100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`

export const Wrapper = styled.div<{
	isVisible: boolean
}>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 100lvh;
	gap: 128px;
	> h1 {
		width: 100%;
		opacity: ${(props) => (props.isVisible ? '1' : '0')};
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
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	> svg {
		opacity: ${(props) => (props.isEntireBoxVisible ? '0.5' : '0')};
		transition: all 0.5s ease;
		&:hover {
			height: 60px;
			width: 60px;
		}
	}
`
