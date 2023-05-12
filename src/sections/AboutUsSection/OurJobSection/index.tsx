import React from 'react'
import * as S from './styles'
import axios from 'axios'
import { TextDTO } from '@/types/TextDTO'
import { scrollToRef } from '@/utils/scrollToRef'

const OurJobSection = () => {
	const [panelsTexts, setPanelsTexts] = React.useState<TextDTO[]>([])

	const getPanelsTexts = () => {
		axios.get('/api/get-our-job-texts').then(function (response) {
			setPanelsTexts(response.data)
		})
	}

	React.useEffect(() => {
		getPanelsTexts()
	}, [])

	return (
		<S.Wrapper>
			<S.Content>
				<h2>
					Pensamos a arquitetura e o design como ferramentas para potencializar
					experiências cotidianas, de acolher e melhorar a vida.
				</h2>

				<S.PanelsDiv>
					{panelsTexts.map((panelsText, index) => {
						return (
							<S.PanelDiv key={index}>
								<p>{panelsText.title}</p>
								<br />
								<p>{panelsText.text}</p>
							</S.PanelDiv>
						)
					})}
				</S.PanelsDiv>
				<h2>
					Sempre que possível, em um mesmo projeto unimos as duas áreas para
					fortalecer os resultados.
				</h2>
				<S.ButtonDiv>
					<p onClick={() => scrollToRef('projectsSection')}>VER PROJETOS</p>
				</S.ButtonDiv>
			</S.Content>
		</S.Wrapper>
	)
}

export default OurJobSection
