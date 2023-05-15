import React from 'react'
import axios from 'axios'
import * as S from './styles'
import { ProjectDTO } from '@/types/ProjectDTO'

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
			<S.ContentDiv>
				<S.TextDiv>
					<h2>{project.title}</h2>
					<br />
					<p>{project.description}</p>
				</S.TextDiv>
				<S.SlidesDiv>
					{project.images.map((slideImage, index) => {
						return <img key={index} src={slideImage.url} alt={slideImage.alt} />
					})}
				</S.SlidesDiv>
			</S.ContentDiv>
		</S.Wrapper>
	)
}

export default ProjectSection
