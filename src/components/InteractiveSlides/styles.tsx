import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 75%;
	height: calc(100vh - 128px);
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 35px;
	@media (max-width: 1400px) {
		flex-direction: column-reverse;
		align-items: flex-start;
	}
`

export const SlideDiv = styled.div`
	max-width: 73%;
	position: relative;
	height: clamp(
		calc((100vw * 0.75 * 0.73 - 35px) * 1000 / 1487),
		calc((100vw * 0.75 * 0.73 - 35px) * 1000 / 1487),
		calc(100vh - 128px)
	);
	max-height: 100%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	@media (max-width: 1400px) {
		height: auto;
		max-width: 100%;
		overflow: visible;
	}
`

export const ButtonContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
`
export const Button = styled.button`
	font-size: 16px;
	z-index: 10;
	height: 100%;
	width: 50%;
	border: none;
	background-color: transparent;
`
export const SlideImage = styled.img<{ active: boolean }>`
	max-height: 100%;
	@media (max-width: 1400px) {
		max-height: 55vh;
		max-width: 100%;
	}
	object-fit: contain;
	display: ${(props) => (props.active ? 'block' : 'none')};
	transition: opacity 2s ease-in-out;
`

export const TextDiv = styled.div<{ height: number }>`
	padding-right: 35px;
	width: 27%;
	height: ${(props) => props.height}px;
	overflow-y: scroll;
	max-height: calc(100vh - 128px);
	> h2 {
		font-weight: ${THEME.fontWeight.semiBold};
	}
	@media (max-width: 1400px) {
		width: 100%;
		height: 100%;
	}

	::-webkit-scrollbar {
		width: 10px;
		color: transparent;
	}

	::-webkit-scrollbar-track {
		background: linear-gradient(
			to right,
			white calc(50% - 0.5px),
			lightgray,
			white calc(50% + 0.5px)
		);
		background-size: 1px 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	::-webkit-scrollbar-thumb {
		background: darkgrey;
	}
`
