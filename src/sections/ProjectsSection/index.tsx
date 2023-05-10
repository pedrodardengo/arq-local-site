import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ProjectDTO } from '@/types/ProjectDTO'
import Title from '@/components/Title'

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const router = useRouter()
	const handleButtonClick = () => {
		router.push('/projetos')
	}

	const [projectObjects, setProjectObjects] = React.useState<ProjectDTO[]>([])

	const getProjectObjects = () => {
		axios.get('/api/get-projects').then(function (response) {
			setProjectObjects(response.data)
		})
	}

	React.useEffect(() => {
		getProjectObjects()
	}, [])

	return (
		<S.Wrapper ref={ref} id={'projectsSection'}>
			<Title>PROJETOS</Title>
			<ProjectsGrid>
				{projectObjects.map((projectObject, index) => {
					return (
						<img
							key={index}
							src={projectObject.thumbnail.url}
							alt={projectObject.thumbnail.alt}
							onClick={handleButtonClick}
						/>
					)
				})}
			</ProjectsGrid>
		</S.Wrapper>
	)
})

ProjectsSection.displayName = 'Projects Section'

export default ProjectsSection
