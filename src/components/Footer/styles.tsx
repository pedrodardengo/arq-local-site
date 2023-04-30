import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	color: ${THEME.colors.primaryColor};
	margin-top: 128px;
	border: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const ContentWrapper = styled.div`
	width: 75%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 66%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`

export const UpperContent = styled.div`
	margin-bottom: 128px;
	min-height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const CenterContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding-top: 20px;
	::before {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 134%;
		top: -1px; /* Set to negative value to position the pseudo-element above the div */
		height: 1px; /* Set the height of the pseudo-element to create the border */
		background-image: linear-gradient(
			to right,
			#ffffff 0%,
			#dddddd 20%,
			#cccccc 50%,
			#dddddd 80%,
			#ffffff 100%
		);
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		align-items: center;
		justify-content: flex-start;
		flex-direction: column-reverse;
		gap: 20px;
		margin-top: 20px;
	}
`

export const LeftElement = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	width: 50%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 80px;
	}
`

export const RightElement = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;
	text-align: right;
	width: 50%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		justify-content: center;
		align-items: center;
		height: 80px;
		width: 100%;
	}
`

export const IconDiv = styled.span`
	display: inline-block;
	vertical-align: middle;
	gap: 4px;
	margin-left: 4px;
	> svg {
		cursor: pointer;
		&:hover {
			color: ${THEME.colors.accentColor};
		}
	}
`
export const SignatureWrapper = styled.div`
	border: none;
	color: ${THEME.colors.lightGrey};
	width: 100%;
	margin-top: 64px;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	> p {
		font-size: ${THEME.fontSize.smallerText}px;
	}
`
