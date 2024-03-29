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
	@media (max-width: 1000px) {
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
	transition: justify-content 2s ease;
	@media (max-width: 1000px) {
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
	border: none !important;
	background-color: transparent !important;
	cursor: pointer;
`
const ArrowBox = styled.div<{
	disabled: boolean
	overlapsImages: boolean
}>`
	position: absolute;
	bottom: 10px;
	color: ${(props) =>
		props.overlapsImages
			? THEME.colors.secondaryColor
			: THEME.colors.primaryColor};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
	}
	> svg {
		opacity: ${(props) => (props.disabled ? '0.3' : '1')};
	}
`
export const LeftArrow = styled(ArrowBox)`
	left: 10px;
`
export const RightArrow = styled(ArrowBox)`
	right: 10px;
`

export const SlideIndicator = styled.div<{
	active: boolean
}>`
	background-color: ${(props) =>
		props.active ? THEME.colors.accentColor : THEME.colors.secondaryColor};
	height: 10px;
	width: 10px;
	border-radius: 10px;
	border: 1px solid ${THEME.colors.accentColor};
	cursor: pointer;
	margin: 2px;
	&:hover {
		height: 12px;
		width: 12px;
		border-radius: 12px;
		margin: 1px;
	}
`
export const IndicatorsBox = styled.div<{
	numberOfIndicators: number
}>`
	position: absolute;
	bottom: 12px;
	left: calc(
		50% - ${(props) => (props.numberOfIndicators * (10 + 10)) / 2 - 10 / 2}px
	);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
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
	@media (max-width: 1000px) {
		max-width: 100%;
		width: auto;
	}
	object-fit: contain;
	position: absolute;
	opacity: ${(props) => (props.active ? '1' : '0')};
	::selection {
		background-color: transparent;
		color: transparent;
	}
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
	@media (max-width: 1200px) {
		width: 100%;
		min-height: 30vh;
		padding-right: 8px;
	}

	@media (max-width: 500px) {
		height: min(calc((100vw * 0.85) / 1.487), calc(100vh - 96px));
	}

	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 7px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.5);
		-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
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
`
