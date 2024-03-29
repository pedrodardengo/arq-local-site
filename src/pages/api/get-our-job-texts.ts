import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { TextDTO } from '@/types/TextDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = await prismicClient.getSingle('our_job_panels')
	const texts_list: TextDTO[] = [
		{
			title: response.data.title_1[0].text,
			text: response.data.text_1.map((d: { text: string }) => d.text)
		},
		{
			title: response.data.title_2[0].text,
			text: response.data.text_2.map((d: { text: string }) => d.text)
		}
	]
	return res.status(200).json(texts_list)
}
