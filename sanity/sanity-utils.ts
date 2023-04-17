import { createClient, groq } from "next-sanity"

import clientConfig from "./config/client-config"
import { About } from "@/types/About"

export const getAbout = async (): Promise<About> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'about'][0]{
      _id,
      _createdAt,
      name,
      'image': image.asset->url,
      bio
    }`
	)
}
