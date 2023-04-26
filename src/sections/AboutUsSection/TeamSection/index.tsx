import React from 'react'
import * as S from './styles'
import THEME from '@/styles/theme'
import AccordionTab from '@/components/AccordionTab'

const TeamSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleWrapper>
					<p>/ equipe</p>
					<br />
					<br />
					<h2>
						Somos pessoas trabalhando para viabilizar os desejos de outras
						pessoas.
					</h2>
				</S.TitleWrapper>
				<S.ProfileContent>
					<S.ProfileHeader>
						<p style={{ fontWeight: THEME.fontWeight.semiBold }}>
							Mariana Lima
						</p>
						<p style={{ fontSize: THEME.fontSize.smallText }}>
							Fundadora, Diretora Geral
						</p>
					</S.ProfileHeader>
					<S.ProfileDescription>
						<p>
							Nasceu e vive em Belo Horizonte/MG, onde formou-se em Arquitetura
							e Urbanismo pela Escola de Arquitetura da Universidade Federal de
							Minas Gerais (UFMG). Em seu premiado trabalho final de graduação,
							dedicou-se a investigar os exemplares arquitetônicos e o contexto
							urbano de sua cidade natal, que culminou no livro Os Lugares e as
							Lições – Guia de Arquitetura de Belo Horizonte. Iniciou sua
							carreira em escritórios de arquitetura renomados, como Arquitetos
							Associados, BCMF Arquitetos e Gustavo Penna Arquiteto &
							Associados, antes de fundar sua firma, a Arquitetura Local, em
							2021.
						</p>
					</S.ProfileDescription>
				</S.ProfileContent>
				<S.ProfileContent>
					<S.ProfileHeader>
						<p style={{ fontWeight: THEME.fontWeight.semiBold }}>
							Marcos Lourenço
						</p>
						<p style={{ fontSize: THEME.fontSize.smallText }}>
							Fundador, Diretor de Criação
						</p>
					</S.ProfileHeader>
					<S.ProfileDescription>
						<p>
							Natural de Marataízes/ES, vive em Belo Horizonte/MG, onde
							formou-se em Arquitetura e Urbanismo pela Escola de Arquitetura da
							Universidade Federal de Minas Gerais (UFMG). É também sócio do
							escritório Arquitetos Associados, onde atua desde 2017 e é coautor
							de projetos de projeção nacional, como a Pina Contemporânea, em
							São Paulo. Em 2021, com Mariana Lima, fundou o escritório
							Arquitetura Local.
						</p>
					</S.ProfileDescription>
				</S.ProfileContent>
				<S.ProfileContent>
					<S.ProfileHeader>
						<p style={{ fontWeight: THEME.fontWeight.semiBold }}>
							Colaboradores
						</p>
					</S.ProfileHeader>
					<S.ProfileDescription>
						<AccordionTab>
							Letícia Tótaro - 2022 <br />
							Iara Baiense - 2022 <br />
							Luiza de Souza – 2021
						</AccordionTab>
					</S.ProfileDescription>
				</S.ProfileContent>
			</S.Content>
		</S.Wrapper>
	)
}

export default TeamSection
