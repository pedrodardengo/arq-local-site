import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ProjectDTO } from '@/types/projectDTO'

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const router = useRouter()
	const handleButtonClick = () => {
		router.push('/projects')
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
			<ProjectsGrid>
				{projectObjects.map((projectObject, index) => {
					return (
						<NextImage
							key={index}
							src={projectObject.thumbnail.url}
							alt={projectObject.thumbnail.alt}
							fill={true}
							quality={20}
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
