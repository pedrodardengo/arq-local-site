import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const imageListName = req.query.imageList as string
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = await prismicClient.getAllByType(imageListName)
	const imageObjects = response[0].data.images.map(
		(i: { image: { alt: string; url: string } }) => {
			return { url: i.image.url, alt: i.image.alt }
		}
	)
	return res.status(200).json(imageObjects)
}
