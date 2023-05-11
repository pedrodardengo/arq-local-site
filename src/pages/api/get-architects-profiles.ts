import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { ProfileDTO } from '@/types/ProfileDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = await prismicClient.getSingle('profiles')
	const body = response.data
	const profiles: ProfileDTO[] = [
		{
			image: body.image_1,
			description: {
				title: body.name_1[0].text,
				text: body.description_1[0].text
			}
		},
		{
			image: body.image_2,
			description: {
				title: body.name_2[0].text,
				text: body.description_2[0].text
			}
		}
	]
	return res.status(200).json(profiles)
}
