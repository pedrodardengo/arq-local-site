import { ImageDTO } from '@/types/ImageDTO'

export type ResearchDTO = {
	thumbnail: ImageDTO
	images: ImageDTO[]
	title: string
	description: string
}
