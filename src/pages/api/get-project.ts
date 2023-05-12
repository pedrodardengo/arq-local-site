import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { ProjectDTO } from '@/types/ProjectDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const slug = req.query.slug as string
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = (await prismicClient.getByUID('project', slug)) as Record<
		any,
		any
	>
	const project: ProjectDTO = {
		title: response.data.title[0].text,
		description: response.data.description[0].text,
		thumbnail: response.data.thumbnail,
		images: response.data.images
	}

	return res.status(200).json(project)
}
