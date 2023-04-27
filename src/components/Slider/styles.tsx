import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	overflow-x: hidden;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	height: 200px;
	flex-shrink: 0;
`

export const CarouselList = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 80px;
`

export const CarouselItem = styled.div<{
	width: number
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	overflow: hidden;
	img {
		aspect-ratio: auto;
		height: 60px;
		width: auto;
		object-fit: contain;
	}
`
