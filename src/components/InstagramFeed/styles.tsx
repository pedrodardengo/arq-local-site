import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	gap: 2.5%;
	grid-template-columns: repeat(4, minmax(0px, 600px));

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
			height: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}

		video {
			width: 100%;
			height: 100%;
			aspect-ratio: 1;
			object-fit: cover;
		}
	}
`
