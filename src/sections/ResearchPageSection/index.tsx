import React from 'react'
import axios from 'axios'
import * as S from './styles'
import InteractiveSlides from '@/components/InteractiveSlides'
import { ResearchDTO } from '@/types/ResearchDTO'

const ResearchPageSection = ({ slug }: { slug: string }) => {
	const [research, setResearch] = React.useState<ResearchDTO | null>(null)

	const getResearch = () => {
		if (!slug) return
		axios
			.get('/api/get-research', {
				params: { slug }
			})
			.then(function (response) {
				setResearch(response.data)
			})
	}

	React.useEffect(getResearch, [slug])
	if (!slug || !research) {
		return null
	}

	return (
		<S.Wrapper>
			<InteractiveSlides
				title={research.title}
				description={research.description}
				images={research.images}
			/>
		</S.Wrapper>
	)
}

export default ResearchPageSection
