import React from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import ResearchPageSection from 'src/sections/ResearchPageSection'

const ProjectPage = () => {
	const router = useRouter()
	return (
		<>
			<NavBar />
			<ResearchPageSection slug={router.query['slug'] as string} />
		</>
	)
}

export default ProjectPage
