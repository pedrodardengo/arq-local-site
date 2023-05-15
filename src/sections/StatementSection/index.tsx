import React from 'react'
import * as S from './styles'
import Statement from '@/components/Statement'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

const StatementSection = () => {
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.width < THEME.screenSize.tablet) {
			setStatement(
				<>
					Criamos projetos autênticos para pessoas e empresas que buscam
					melhorar vidas e cidades.
				</>
			)
		} else {
			setStatement(
				<>
					Criamos projetos autênticos para pessoas e empresas que buscam
					melhorar vidas e cidades.
				</>
			)
		}
	}, [windowDimension])

	return (
		<S.Wrapper>
			<Statement refToScrollOnChevronClick={'projectsSection'}>
				{statement}
			</Statement>
		</S.Wrapper>
	)
}

export default StatementSection
