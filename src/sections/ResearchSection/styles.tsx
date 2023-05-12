import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	margin-top: 128px;
	width: 75%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const MoreResearchesButton = styled.p`
	cursor: pointer;
	padding: 0 0 8px 0;
	border-bottom: 1px solid ${THEME.colors.primaryColor};

	&:hover {
		color: ${THEME.colors.accentColor};
		border-bottom: 1px solid ${THEME.colors.accentColor};
	}
`

export const ResearchesGridDiv = styled.div`
	margin-top: 40px;
	margin-bottom: 20px;
`
