import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { ProjectDTO } from '@/types/projectDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = (await prismicClient.getAllByType('projects')) as Record<
		any,
		any
	>
	const projectObjects: ProjectDTO[] = response.map(
		(projectObject: { data: any }) => {
			const data = projectObject.data
			return {
				thumbnail: data.thumbnail,
				images: data.images,
				title: data.title[0].text,
				description: data.description[0].text
			}
		}
	)
	return res.status(200).json(projectObjects)
}
