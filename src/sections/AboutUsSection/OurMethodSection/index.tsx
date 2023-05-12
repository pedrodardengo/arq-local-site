import React from 'react'
import CreativeStep from '@/components/CreativeStep'
import * as S from './styles'
import Title from '@/components/Title'

const OurMethodSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleDiv>
					<Title>MÉTODO</Title>
					<br />
					<br />
					<h2>
						A partir do olhar atento a cada demanda e contexto específico,
						desenvolvemos propostas autênticas, atemporais e descomplicadas que
						possam ser vivenciadas em sua plenitude.
					</h2>
				</S.TitleDiv>
				<S.StepsGridDiv>
					<CreativeStep
						stepNumber={1}
						stepTitle={'demanda'}
						stepImageSrc={'/img/al-process-01.svg'}
					>
						O projeto sempre é iniciado a partir da demanda trazida pelo cliente
						no briefing – nossa maneira de investigar necessidades, estilos de
						vida, comportamentos e expectativas particulares.
					</CreativeStep>
					<CreativeStep
						stepNumber={2}
						stepTitle={'contexto'}
						stepImageSrc={'/img/al-process-02.svg'}
					>
						Em seguida, partimos para a análise do local e do contexto em torno
						da demanda. Este é o momento de relacionar as necessidades e
						expectativas com o contexto circundante, estabelecendo também
						conexão com o tempo presente.
					</CreativeStep>
					<CreativeStep
						stepNumber={3}
						stepTitle={'criação'}
						stepImageSrc={'/img/al-process-03.svg'}
					>
						Então é iniciado o nosso processo de criação, um momento de mergulho
						absoluto no assunto, que envolve estudar, criar, testar, fazer,
						refazer e, sobretudo, costurar todas as premissas que envolvem o
						projeto.
					</CreativeStep>
					<CreativeStep
						stepNumber={4}
						stepTitle={'projeto'}
						stepImageSrc={'/img/al-process-04.svg'}
					>
						O desenvolvimento do projeto se dá em etapas, de modo que ao término
						de cada fase as soluções sejam verificadas pelo cliente. Ao final
						deste processo obtemos um projeto coerente e assertivo, compatível
						com os objetivos e capaz de concretizar novas ideias.
					</CreativeStep>
				</S.StepsGridDiv>
			</S.Content>
		</S.Wrapper>
	)
}

export default OurMethodSection
