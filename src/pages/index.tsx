import HeroSection from '@/sections/HeroSection'
import NavBar from '@/components/NavBar'
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
	const projectsRef = React.useRef(null)
	const aboutUsRef = React.useRef(null)
	const contactUsRef = React.useRef(null)
	const researchRef = React.useRef(null)
	const heroSectionRef = React.useRef(null)
	return (
		<>
			<LoadingScreen toWaitLoad={heroSectionRef} />
			<HeroSection ref={heroSectionRef} />
			<NavBar
				projectsRef={projectsRef}
				aboutUsRef={aboutUsRef}
				contactUsRef={contactUsRef}
				researchRef={researchRef}
			/>
			<S.SectionsContentWrapper>
				<StatementSection />
				<ProjectsSection ref={projectsRef} />
				<ResearchSection ref={researchRef} />
				<StatementSection2 />
				<AboutUsSection ref={aboutUsRef} />
				<ContactUsSection ref={contactUsRef} />
				<Footer />
			</S.SectionsContentWrapper>
		</>
	)
}
