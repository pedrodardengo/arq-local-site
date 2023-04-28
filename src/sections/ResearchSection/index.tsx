import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import NextImage from 'next/image'

import img08 from '../../../public/img/08.jpg'
const ResearchSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const quality = 30
	return (
		<S.Wrapper ref={ref} id={'researchSection'}>
			<ProjectsGrid>
				<NextImage src={img08} alt={'pesquisa 1'} quality={quality} />
			</ProjectsGrid>
		</S.Wrapper>
	)
})

ResearchSection.displayName = 'Research Section'

export default ResearchSection
