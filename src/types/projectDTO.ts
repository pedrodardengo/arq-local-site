import { ImageDTO } from '@/types/ImageDTO'

export type ProjectDTO = {
	thumbnail: ImageDTO
	images: ImageDTO[]
	title: string
	description: string
}
