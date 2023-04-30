import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { ImageDTO } from '@/types/ImageDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const imageListName = req.query.imageList as string
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const response = await prismicClient.getAllByType(imageListName)
	const imageObjects: ImageDTO[] = response[0].data.images.map(
		(i: { image: ImageDTO }) => i.image
	)
	return res.status(200).json(imageObjects)
}
