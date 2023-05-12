import React from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import ProjectSection from '@/sections/projectSection'
import { ProjectPageContentWrapper } from '@/sections/styles'

const ProjectPage = () => {
	const router = useRouter()
	return (
		<>
			<NavBar />
			<ProjectPageContentWrapper>
				<ProjectSection slug={router.query['slug'] as string} />
			</ProjectPageContentWrapper>
		</>
	)
}

export default ProjectPage
