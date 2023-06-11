import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { GridElementDTO } from '@/types/GridElementDTO'

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
	const idToProjectMap: { [key: string]: GridElementDTO } = {}
	response.map((projectObject) => {
		idToProjectMap[projectObject.id] = {
			thumbnail: projectObject.data.thumbnail,
			slug: projectObject.uid!
		}
	})
	const projectObjectsOrdered = researchesIDs.map((id: string) => {
		return idToProjectMap[id]
	})
	return res.status(200).json(projectObjectsOrdered)
}
