import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 75%;
	height: calc(100vh - 64px);
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 35px;
	@media (max-width: 1400px) {
		flex-direction: column-reverse;
		align-items: flex-start;
		justify-content: flex-start;
	}
`

export const SlideDiv = styled.div`
	max-width: 73%;
	position: relative;
	max-height: 100%;
	@media (max-width: 1400px) {
		max-width: 100%;
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
	border: 3px solid red;
	background-color: transparent;
`
export const SlideImage = styled.img<{ active: boolean }>`
	max-width: 100%;
	max-height: calc(90vh - 64px);
	@media (max-width: 1400px) {
		max-height: 55vh;
	}
	object-fit: contain;
	display: ${(props) => (props.active ? 'block' : 'none')};
	transition: opacity 2s ease-in-out;
`

export const TextDiv = styled.div`
	padding-right: 35px;
	width: 27%;
	height: 100%;
	overflow-y: scroll;
	max-height: calc(90vh - 64px);
	> h2 {
		font-weight: ${THEME.fontWeight.semiBold};
	}
	@media (max-width: 1400px) {
		width: 100%;
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
