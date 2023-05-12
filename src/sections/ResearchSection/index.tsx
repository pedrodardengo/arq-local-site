import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import { useRouter } from 'next/router'
import axios from 'axios'
import Title from '@/components/Title'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'
import { GridElementDTO } from '@/types/GridElementDTO'

const ResearchesSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const router = useRouter()
	const goToResearchesPage = () => {
		router.push('/pesquisas')
	}

	const [researchObjects, setResearchObjects] = React.useState<
		GridElementDTO[]
	>([])
	const [exhibitedResearches, setExhibitedResearches] = React.useState<
		GridElementDTO[]
	>([])
	const windowDimensions = useWindowDimensions()
	const getResearchObjects = () => {
		axios.get('/api/get-researches-grid-elements').then(function (response) {
			setResearchObjects(response.data)
		})
	}

	React.useEffect(getResearchObjects, [])

	React.useEffect(() => {
		if (researchObjects.length === 0) return
		let gridColumns = windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		if (gridColumns > researchObjects.length) {
			gridColumns = researchObjects.length
		}
		setExhibitedResearches(researchObjects.slice(0, gridColumns))
	}, [researchObjects])

	const handleOnResizeResize = () => {
		if (exhibitedResearches.length == researchObjects.length) return
		const gridColumns = windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		const toBeRemoved = exhibitedResearches.length % gridColumns
		if (
			gridColumns > exhibitedResearches.length &&
			researchObjects.length >= gridColumns
		) {
			setExhibitedResearches(researchObjects.slice(0, gridColumns))
			return
		}
		if (toBeRemoved == 0) return
		setExhibitedResearches(
			researchObjects.slice(0, exhibitedResearches.length - toBeRemoved)
		)
	}
	React.useEffect(handleOnResizeResize, [windowDimensions.width])
	function showMoreResearches() {
		if (exhibitedResearches.length == researchObjects.length) return
		const researchesToAdd =
			windowDimensions.width > THEME.screenSize.mobile ? 3 : 2
		const lastIndex = Math.min(
			exhibitedResearches.length + researchesToAdd,
			researchObjects.length
		)
		setExhibitedResearches(researchObjects.slice(0, lastIndex))
	}

	return (
		<S.Wrapper ref={ref} id={'researchesSection'}>
			<Title>PESQUISA</Title>
			<ProjectsGrid>
				{exhibitedResearches.map((researchObject, index) => {
					return (
						<img
							key={index}
							src={researchObject.thumbnail.url}
							alt={researchObject.thumbnail.alt}
							onClick={goToResearchesPage}
						/>
					)
				})}
			</ProjectsGrid>
			<S.MoreResearchesButton onClick={showMoreResearches}>
				{exhibitedResearches.length == researchObjects.length ? '' : 'VER MAIS'}
			</S.MoreResearchesButton>
		</S.Wrapper>
	)
})

ResearchesSection.displayName = 'Researches Section'

export default ResearchesSection
