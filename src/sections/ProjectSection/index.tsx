import React from 'react'
import axios from 'axios'
import * as S from './styles'
import { ProjectDTO } from '@/types/ProjectDTO'
import InteractiveSlides from '@/components/InteractiveSlides'

const ProjectSection = ({ slug }: { slug: string }) => {
	const [project, setProject] = React.useState<ProjectDTO | null>(null)

	const getProject = () => {
		if (!slug) return
		axios
			.get('/api/get-project', {
				params: { slug }
			})
			.then(function (response) {
				setProject(response.data)
			})
	}

	React.useEffect(getProject, [slug])
	if (!slug || !project) {
		return null
	}

	return (
		<S.Wrapper>
			<InteractiveSlides
				title={project.title}
				description={project.description}
			>
				{project.images.map((slideImage, index) => {
					return <img key={index} src={slideImage.url} alt={slideImage.alt} />
				})}
			</InteractiveSlides>
		</S.Wrapper>
	)
}

export default ProjectSection
