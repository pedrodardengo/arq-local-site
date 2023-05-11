import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { ResearchDTO } from '@/types/ResearchDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const responseWithIDs = (await prismicClient.getSingle(
		'researches_grid'
	)) as Record<any, any>
	const researchesIDs: string[] = responseWithIDs.data.researches.map(
		(p: { research: { id: string } }) => p.research.id
	)
	const response = await prismicClient.getAllByIDs(researchesIDs)
	const idToResearchMap: { [key: string]: ResearchDTO } = {}
	response.map((researchObject: { data: any; id: string }) => {
		const data = researchObject.data
		idToResearchMap[researchObject.id] = {
			thumbnail: data.thumbnail,
			images: data.images,
			title: data.title[0].text,
			description: data.description[0].text
		}
	})
	const projectObjectsOrdered = researchesIDs.map((id: string) => {
		return idToResearchMap[id]
	})
	return res.status(200).json(projectObjectsOrdered)
}
