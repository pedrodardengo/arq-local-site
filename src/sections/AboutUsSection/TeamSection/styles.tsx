import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Content = styled.div`
	position: relative;
	width: 50%;
	max-width: 850px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 64px;
`
export const TitleDiv = styled.div`
	max-width: 500px;
	text-align: center;
`

export const ProfilesDiv = styled.div`
	margin-top: 64px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	gap: min(10%, 60px);
	width: 100%;

	> div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;
		width: 45%;
		> img {
			aspect-ratio: 3/4;
			width: 100%;
		}
		&:hover {
			p {
				border-bottom: 1px solid ${THEME.colors.accentColor};
				color: ${THEME.colors.accentColor};
			}
		}
	}
`

export const ProfileName = styled.div`
	width: auto;
	height: auto;

	> p {
		padding: 0 0 8px 0;
		border-bottom: 1px solid ${THEME.colors.primaryColor};
	}
`

export const ProfileDescriptionDiv = styled.div`
	position: relative;
	width: 100%;
	transition: height 1s ease-in-out;

	> p {
		opacity: 0;
		top: 0;
		position: absolute;
		transition: opacity 1s ease-in-out;
	}
`
