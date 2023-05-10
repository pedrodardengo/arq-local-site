import React from 'react'
import * as S from './styles'
import PhilosophySection from '@/sections/AboutUsSection/PhilosophySection'
import TeamSection from '@/sections/AboutUsSection/TeamSection'
import OurJobSection from '@/sections/AboutUsSection/OurJobSection'
import OurMethodSection from 'src/sections/AboutUsSection/OurMethodSection'
import ClientsSection from '@/sections/AboutUsSection/ClientsSection'

const AboutUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref} id={'aboutUsSection'}>
			<PhilosophySection />
			<OurJobSection />
			<OurMethodSection />
			<TeamSection />
			<ClientsSection />
		</S.Wrapper>
	)
})
AboutUsSection.displayName = 'About Us Section'
export default AboutUsSection
