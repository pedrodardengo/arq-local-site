import React from 'react'
import * as S from './styles'
import ProjectsGrid from 'src/components/ElementsGrid'
import { useRouter } from 'next/router'
import axios from 'axios'
import Title from '@/components/Title'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'
import { GridElementDTO } from '@/types/GridElementDTO'

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const router = useRouter()
	const goToProjectsPage = (slug: string) => {
		router.push({ pathname: `/projetos/${slug}` })
	}

	const [gridElement, setGridElement] = React.useState<GridElementDTO[]>([])
	const [exhibitedProjects, setExhibitedProjects] = React.useState<
		GridElementDTO[]
	>([])
	const windowDimensions = useWindowDimensions()
	const getProjectObjects = () => {
		axios.get('/api/get-projects-grid-elements').then(function (response) {
			setGridElement(response.data)
		})
	}

	React.useEffect(getProjectObjects, [])

	React.useEffect(() => {
		if (gridElement.length === 0) return
		let initialGridNumber =
			windowDimensions.width > THEME.screenSize.mobile ? 12 : 12
		if (initialGridNumber > gridElement.length) {
			initialGridNumber = gridElement.length
		}
		setExhibitedProjects(gridElement.slice(0, initialGridNumber))
	}, [gridElement])

	const handleOnResizeResize = () => {
		if (exhibitedProjects.length == gridElement.length) return
		const gridColumns = windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		const toBeRemoved = exhibitedProjects.length % gridColumns
		if (
			gridColumns > exhibitedProjects.length &&
			gridElement.length >= gridColumns
		) {
			setExhibitedProjects(gridElement.slice(0, gridColumns))
			return
		}
		if (toBeRemoved == 0) return
		setExhibitedProjects(
			gridElement.slice(0, exhibitedProjects.length - toBeRemoved)
		)
	}
	React.useEffect(handleOnResizeResize, [windowDimensions.width])
	function showMoreProjects() {
		if (exhibitedProjects.length == gridElement.length) return
		const projectsToAdd =
			windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		const lastIndex = Math.min(
			exhibitedProjects.length + projectsToAdd,
			gridElement.length
		)
		setExhibitedProjects(gridElement.slice(0, lastIndex))
	}

	return (
		<S.Wrapper ref={ref} id={'projectsSection'}>
			<Title>PROJETOS</Title>
			<S.ProjectsGridDiv>
				<ProjectsGrid>
					{exhibitedProjects.map((gridElement, index) => {
						return (
							<img
								key={index}
								src={gridElement.thumbnail.url}
								alt={gridElement.thumbnail.alt}
								onClick={() => goToProjectsPage(gridElement.slug)}
							/>
						)
					})}
				</ProjectsGrid>
			</S.ProjectsGridDiv>
			<S.MoreProjectsButton onClick={showMoreProjects}>
				{exhibitedProjects.length == gridElement.length ? '' : 'VER MAIS'}
			</S.MoreProjectsButton>
		</S.Wrapper>
	)
})

ProjectsSection.displayName = 'Projects Section'

export default ProjectsSection
