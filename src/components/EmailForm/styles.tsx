import styled from 'styled-components'
import THEME from '@/styles/theme'

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2px;
	min-width: 120px;
	::selection {
		background-color: ${THEME.colors.accentColor} !important;
		color: ${THEME.colors.secondaryColor} !important;
	}
`

export const Input = styled.input`
	width: 100%;
	padding: 0 8px 4px 0;
	border: 0;
	font-size: ${THEME.fontSize.textDesktop}px;
	border-bottom: 1px solid ${THEME.colors.primaryColor};
	color: ${THEME.colors.primaryColor};
	font-family: ${THEME.fonts.primaryFont};
	-webkit-appearance: none;
	&:focus {
		outline-width: 0;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 100px white inset;
		-webkit-text-fill-color: #333;
		-webkit-text-decoration-color: ${THEME.colors.primaryColor};
		-webkit-text-size-adjust: none;
	}
`

export const TextArea = styled.textarea`
	width: 100%;
	border: none;
	resize: vertical;
	min-height: 120px;
	font-size: ${THEME.fontSize.textDesktop}px;
	border-bottom: 1px solid ${THEME.colors.primaryColor};
	font-family: ${THEME.fonts.primaryFont};
	-webkit-rtl-ordering: logical;
	-webkit-appearance: none;
	text-indent: 0;
	&:focus {
		outline-width: 0;
	}
`

export const AlertMessage = styled.span`
	font-size: ${THEME.fontSize.smallerText}px;
	color: #333;
	padding-left: 8px;
`

export const Button = styled.button`
	margin-top: 48px;
	padding: 8px;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	color: ${THEME.colors.primaryColor};
	border: none;
	background-color: ${THEME.colors.secondaryColor};
	border-bottom: 1px solid ${THEME.colors.primaryColor};
	font-size: ${THEME.fontSize.textDesktop}px;
	font-family: ${THEME.fonts.primaryFont};
	cursor: pointer;
	margin-bottom: 24px;

	&:hover {
		color: ${THEME.colors.accentColor};
		border-bottom: 1px solid ${THEME.colors.accentColor};
	}
`
