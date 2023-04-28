import React from 'react'
import { useRouter } from 'next/router'

const ProjectPage = () => {
	const router = useRouter()
	const onClickHandler = () => {
		router.push('/#projectsSection')
	}

	return <div></div>
}

export default ProjectPage
