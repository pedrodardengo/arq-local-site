import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { TextDTO } from '@/types/TextDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = await prismicClient.getAllByType('our_job_panels')
	const texts_list: TextDTO[] = [
		{
			title: response[0].data.title_1[0].text,
			text: response[0].data.text_1[0].text
		},
		{
			title: response[0].data.title_2[0].text,
			text: response[0].data.text_2[0].text
		}
	]
	return res.status(200).json(texts_list)
}
