import { createClient, groq } from "next-sanity"

import clientConfig from "./config/client-config"
import { About } from "@/types/About"
import { Skill } from "@/types/Skill"

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

export const getSkills = async (): Promise<Skill[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'skill']{
      _id,
      skill,
   }`
	)
}

export const getProjects = async (): Promise<Projec[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      slug,
      alt,
      url,
      'image': image.asset->url,
      content
    }`
	)
}
