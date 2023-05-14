import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const TextDiv = styled.div`
	max-width: 550px;
	text-align: center;
	margin-bottom: 64px;
`

export const EmailFormDiv = styled.div`
	max-width: 700px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 48px;
	width: 100%;
	> div {
		width: 700px;
	}
`
