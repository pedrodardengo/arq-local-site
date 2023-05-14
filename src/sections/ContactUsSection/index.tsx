import React from 'react'
import * as S from './styles'
import EmailForm from '@/components/EmailForm'
import ContactButton from '@/components/Buttons/ContactButton'
import Title from '@/components/Title'
const ContactUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<S.Content id={'contactUsSection'}>
				<S.TextDiv>
					<Title>VAMOS JUNTOS REALIZAR O SEU PROJETO?</Title>
					<br />
					<br />
					<h2>
						Queremos conhecer você e a sua demanda. Entre em contato e vamos dar
						início a uma nova história.
					</h2>
				</S.TextDiv>
				<ContactButton style={{ marginBottom: 128 }}>
					Fale com a gente!
				</ContactButton>
				<S.EmailFormDiv>
					<h2>
						Se preferir, você pode iniciar a nossa conversa por aqui. Nos conte
						um pouco sobre você e entraremos em contato o mais breve possível.
					</h2>
					<EmailForm />
				</S.EmailFormDiv>
			</S.Content>
		</S.Wrapper>
	)
})

ContactUsSection.displayName = 'Contact Us Section'
export default ContactUsSection
