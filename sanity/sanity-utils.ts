import { createClient, groq } from "next-sanity"

import clientConfig from "./config/client-config"
import { About } from "@/types/About"
import { Skill } from "@/types/Skill"
import { Project } from "@/types/Project"

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

export const getProjects = async (): Promise<Project[]> => {
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
