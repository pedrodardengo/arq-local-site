import React from 'react'
import * as S from './styles'
import PhilosophySection from '@/sections/AboutUsSection/PhilosophySection'
import TeamSection from '@/sections/AboutUsSection/TeamSection'
import OurJobSection from '@/sections/AboutUsSection/OurJobSection'
import CreativeStepsSection from '@/sections/AboutUsSection/CreativeStepsSection'

const AboutUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<PhilosophySection />
			<TeamSection />
			<OurJobSection />
			<CreativeStepsSection />
		</S.Wrapper>
	)
})
AboutUsSection.displayName = 'About Us Section'
export default AboutUsSection
