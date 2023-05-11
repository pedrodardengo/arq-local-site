import type { NextApiRequest, NextApiResponse } from 'next'
import * as prismic from '@prismicio/client'
import { ProjectDTO } from '@/types/ProjectDTO'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const endpoint = process.env.PRISMIC_API_URL || ''
	const prismicClient = prismic.createClient(endpoint)
	const responseWithIDs = (await prismicClient.getSingle(
		'projects_grid'
	)) as Record<any, any>
	const projectsIDs: string[] = responseWithIDs.data.projects.map(
		(p: { project: { id: string } }) => p.project.id
	)
	const response = await prismicClient.getAllByIDs(projectsIDs)
	const idToProjectMap: { [key: string]: ProjectDTO } = {}
	response.map((projectObject: { data: any; id: string }) => {
		const data = projectObject.data
		idToProjectMap[projectObject.id] = {
			thumbnail: data.thumbnail,
			images: data.images,
			title: data.title[0].text,
			description: data.description[0].text
		}
	})
	const projectObjectsOrdered = projectsIDs.map((id: string) => {
		return idToProjectMap[id]
	})
	return res.status(200).json(projectObjectsOrdered)
}
