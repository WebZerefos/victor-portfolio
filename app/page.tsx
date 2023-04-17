import Image from "next/image"
import { PortableText } from "@portabletext/react"

import { getAbout } from "@/sanity/sanity-utils"

const Home = async () => {
	const aboutMe = await getAbout()

	return (
		<div className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>{aboutMe.name}</h1>
			<Image
				src={aboutMe.image}
				width={300}
				height={200}
			/>
			<div>
				<PortableText value={aboutMe.bio} />
			</div>
		</div>
	)
}

export default Home
