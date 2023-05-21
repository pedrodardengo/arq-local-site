import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 64px);
	display: flex;
	justify-content: center;
`
export const ContentDiv = styled.div`
	margin-top: 5vh;
	margin-bottom: 5vh;
	width: 75%;
	display: flex;
	flex-direction: row-reverse;
	gap: 4%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
	}
`
export const TextDiv = styled.div`
	padding-right: 20px;
	width: 27%;
	overflow-y: scroll;
	height: auto;
	max-height: 75vh;
	> h2 {
		height: auto;
		font-weight: ${THEME.fontWeight.semiBold};
	}
	@media (max-width: ${THEME.screenSize.tablet}px) {
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
			black,
			white calc(50% + 0.5px)
		);
		background-size: 1px 100%;
		background-position: center;
		background-repeat: no-repeat;
	}

	::-webkit-scrollbar-thumb {
		background: black;
	}
`

export const SlidesDiv = styled.div`
	width: 69%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	height: 75vh;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		height: auto;
		width: 100%;
	}
`
