import styled from 'styled-components'
import THEME from '@/styles/theme'
import { Dimensions } from '@/types/ImageDTO'

export const Wrapper = styled.div`
	width: 75%;
	height: calc(100vh - 96px);
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 35px;
	@media (max-width: 1400px) {
		flex-direction: column-reverse;
	}

	@media (max-width: 500px) {
		width: 85%;
	}
`

export const SlideDiv = styled.div<{
	imageDimensions: Dimensions
}>`
	width: calc(100vw * 0.75 * 0.73 - 35px);
	position: relative;
	aspect-ratio: 1.487;
	max-height: calc(100vh - 96px);
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	justify-content: ${(props) =>
		props.imageDimensions.width / props.imageDimensions.height < 1.487
			? 'flex-start'
			: 'center'};
	@media (max-width: 1400px) {
		justify-content: flex-start;
		aspect-ratio: 1.487;
		height: auto;
		width: 100%;
		max-height: 55vh;
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
	cursor: pointer;
`

export const LeftArrow = styled.div`
	position: absolute;
	left: 10px;
	bottom: 10px;
	color: white;
`
export const RightArrow = styled.div`
	position: absolute;
	right: 10px;
	bottom: 10px;
	color: white;
`

export const SlideImage = styled.img<{
	active: boolean
	imageDimensions: Dimensions
}>`
	max-height: 100%;
	width: ${(props) =>
		props.imageDimensions.width / props.imageDimensions.height > 1.487
			? '100%'
			: 'auto'};
	@media (max-width: 1400px) {
		max-width: 100%;
		width: auto;
	}
	object-fit: contain;
	display: ${(props) => (props.active ? 'block' : 'none')};
	transition: opacity 2s ease-in-out;
`

export const TextDiv = styled.div`
	padding-right: 35px;
	width: 27%;
	height: min(calc((100vw * 0.75 * 0.73 - 35px) / 1.487), calc(100vh - 96px));
	overflow-y: scroll;
	max-height: calc(100vh - 96px);
	flex: 1;
	> h2 {
		font-weight: ${THEME.fontWeight.semiBold};
	}
	@media (max-width: 1400px) {
		width: 100%;
		min-height: 30vh;
		padding-right: 8px;
	}

	@media (max-width: 500px) {
		height: min(calc((100vw * 0.85) / 1.487), calc(100vh - 96px));
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
