import React from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import ProjectPageSection from 'src/sections/ProjectPageSection'

const ProjectPage = () => {
	const router = useRouter()
	return (
		<>
			<NavBar />
			<ProjectPageSection slug={router.query['slug'] as string} />
		</>
	)
}

export default ProjectPage
