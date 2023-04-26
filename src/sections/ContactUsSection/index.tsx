import React from 'react'
import * as S from './styles'
import EmailForm from '@/components/EmailForm'
import Statement from '@/components/Statement'
import ContactButton from '@/components/Buttons/ContactButton'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'
import NextImage from 'next/image'
import logo from '../../../public/img/al-logo-orange-5.svg'

const ContactUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.windowWidth < THEME.screenSize.mobile) {
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
		<S.Wrapper ref={ref}>
			<S.StatementDiv>
				<Statement>{statement}</Statement>
			</S.StatementDiv>

			<S.Content>
				<h2>Vamos juntos realizar o seu projeto?</h2>
				<br />
				<br />

				<S.ResponsiveContent>
					<S.FormContainer>
						<ContactButton style={{ marginBottom: 32 }}>
							Fale com a gente!
						</ContactButton>
						<p>
							Se preferir, preencha os campos abaixo e entraremos em contato com
							você.
						</p>
						<EmailForm />
					</S.FormContainer>
					<S.LogoContainer>
						<NextImage src={logo} alt={'Arq Local Logo'} />
						<p>
							Estúdio de Arquitetura e Design. <br />
							Belo Horizonte, Minas Gerais . Brasil <br />
							contato@local.arq.br <br />
							+55 31 972670550
						</p>
					</S.LogoContainer>
				</S.ResponsiveContent>
			</S.Content>
		</S.Wrapper>
	)
})

ContactUsSection.displayName = 'Contact Us Section'
export default ContactUsSection
