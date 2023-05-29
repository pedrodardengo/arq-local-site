import React from 'react'
import NavBar from '@/components/NavBar'
import { useRouter } from 'next/router'
import ProjectSection from 'src/sections/ProjectSection'

const ProjectPage = () => {
	const router = useRouter()
	return (
		<>
			<NavBar />
			<ProjectSection slug={router.query['slug'] as string} />
		</>
	)
}

export default ProjectPage
