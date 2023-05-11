import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ProjectDTO } from '@/types/ProjectDTO'
import Title from '@/components/Title'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const router = useRouter()
	const goToProjectsPage = () => {
		router.push('/projetos')
	}

	const [projectObjects, setProjectObjects] = React.useState<ProjectDTO[]>([])
	const [exhibitedProjects, setExhibitedProjects] = React.useState<
		ProjectDTO[]
	>([])
	const windowDimensions = useWindowDimensions()
	const getProjectObjects = () => {
		axios.get('/api/get-projects').then(function (response) {
			setProjectObjects(response.data)
		})
	}

	React.useEffect(getProjectObjects, [])

	React.useEffect(() => {
		if (projectObjects.length === 0) return
		let gridColumns = windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		if (gridColumns > projectObjects.length) {
			gridColumns = projectObjects.length
		}
		setExhibitedProjects(projectObjects.slice(0, gridColumns))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [projectObjects])

	const handleOnResizeResize = () => {
		if (exhibitedProjects.length == projectObjects.length) return
		const gridColumns = windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		const toBeRemoved = exhibitedProjects.length % gridColumns
		if (
			gridColumns > exhibitedProjects.length &&
			projectObjects.length >= gridColumns
		) {
			setExhibitedProjects(projectObjects.slice(0, gridColumns))
			return
		}
		if (toBeRemoved == 0) return
		setExhibitedProjects(
			projectObjects.slice(0, exhibitedProjects.length - toBeRemoved)
		)
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	React.useEffect(handleOnResizeResize, [windowDimensions.width])
	function showMoreProjects() {
		if (exhibitedProjects.length == projectObjects.length) return
		const projectsToAdd =
			windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		const lastIndex = Math.min(
			exhibitedProjects.length + projectsToAdd,
			projectObjects.length
		)
		setExhibitedProjects(projectObjects.slice(0, lastIndex))
	}

	return (
		<S.Wrapper ref={ref} id={'projectsSection'}>
			<Title>PROJETOS</Title>
			<ProjectsGrid>
				{exhibitedProjects.map((projectObject, index) => {
					return (
						<img
							key={index}
							src={projectObject.thumbnail.url}
							alt={projectObject.thumbnail.alt}
							onClick={goToProjectsPage}
						/>
					)
				})}
			</ProjectsGrid>
			<S.MoreProjectsButton onClick={showMoreProjects}>
				{exhibitedProjects.length == projectObjects.length ? '' : 'VER MAIS'}
			</S.MoreProjectsButton>
		</S.Wrapper>
	)
})

ProjectsSection.displayName = 'Projects Section'

export default ProjectsSection
