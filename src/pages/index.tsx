import HeroSection from '@/sections/HeroSection'
import HeroSectionNavBar from 'src/components/HeroSectionNavBar'
import React from 'react'
import * as S from '@/sections/styles'
import LoadingScreen from '@/components/LoadingScreen'
import ProjectsSection from '@/sections/ProjectsSection'
import StatementSection from '@/sections/StatementSection'
import Footer from '@/components/Footer'
import ContactUsSection from '@/sections/ContactUsSection'
import ResearchSection from '@/sections/ResearchSection'
import AboutUsSection from '@/sections/AboutUsSection'
import useBeforeRefresh from '@/utils/useBeforeRefresh'
import { scrollToStart } from '@/utils/scrollToRef'
import StatementSection2 from '@/sections/StatementSection2'

export default function Home() {
	useBeforeRefresh(scrollToStart)
	const heroSectionRef = React.useRef(null)
	return (
		<>
			<LoadingScreen toWaitLoad={heroSectionRef} />
			<HeroSection ref={heroSectionRef} />
			<HeroSectionNavBar />
			<S.SectionsContentWrapper>
				<StatementSection />
				<ProjectsSection />
				<ResearchSection />
				<StatementSection2 />
				<AboutUsSection />
				<ContactUsSection />
				<Footer />
			</S.SectionsContentWrapper>
		</>
	)
}
