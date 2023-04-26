import React from 'react'
import * as S from './styles'
import THEME from '@/styles/theme'
import ContactButton from '@/components/Buttons/ContactButton'

const OurJobSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleWrapper>
					<p>/ o que fazemos</p>
					<br />
					<br />
					<h2>
						Somos um estúdio de arquitetura e design. Sempre que possível,
						unimos as duas áreas para potencializar os resultados.
					</h2>
				</S.TitleWrapper>
				<S.JobContent>
					<S.JobHeader>
						<p style={{ fontWeight: THEME.fontWeight.semiBold }}>Arquitetura</p>
					</S.JobHeader>
					<S.JobDescription>
						<p>
							Espaços para serem vivenciados em sua plenitude. Projetos
							arquitetônicos completos, da concepção ao executivo. Residencial,
							comercial, corporativo, cultural e urbano. Para construções novas,
							reformas totais ou interiores.
						</p>
					</S.JobDescription>
				</S.JobContent>
				<S.JobContent>
					<S.JobHeader>
						<p style={{ fontWeight: THEME.fontWeight.semiBold }}>Design</p>
					</S.JobHeader>
					<S.JobDescription>
						<p>
							Produtos especiais com identidade e propósito. Projetos de design
							para a expressão visual de negócios ou espaços, da concepção à
							implementação. Publicidade para empreendimentos imobiliários,
							naming, branding, editorial e comunicação visual.
						</p>
					</S.JobDescription>
				</S.JobContent>
				<ContactButton>Quero Meu Projeto</ContactButton>
			</S.Content>
		</S.Wrapper>
	)
}

export default OurJobSection
