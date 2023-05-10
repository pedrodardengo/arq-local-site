import React from 'react'
import * as S from './styles'
import Statement from '@/components/Statement'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

const StatementSection3 = () => {
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.width < THEME.screenSize.mobile) {
			setStatement(
				<>
					Estamos aqui para <br />
					te ajudar aconcretizar <br />
					uma ideia.
				</>
			)
		} else {
			setStatement(
				<>
					Estamos aqui para te ajudar a<br />
					concretizar uma ideia.
				</>
			)
		}
	}, [windowDimension])

	return (
		<S.Wrapper>
			<Statement>{statement}</Statement>
		</S.Wrapper>
	)
}

export default StatementSection3
