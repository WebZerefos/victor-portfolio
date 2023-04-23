"use client"
import { motion } from "framer-motion"

function Middle() {
	return (
		<section
			id='home'
			className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-2 lgl:gap-8 mdl:px-10 xl:px-4'
		>
			<motion.h2
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className='text-2xl font-titleFont tracking-wide text-designColor mt-20'
			>
				Olá, meu nome é
			</motion.h2>
			<motion.h1
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.7 }}
				className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
			>
				Victor Zerefos. <span className='mt-2 text-designColor lgl:mt4'>Desenvolvedor Mobile & Web.</span>
			</motion.h1>
			<motion.p
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.8 }}
				className='text-sm font-extralight md:max-w-[650px] mt-[-10px] italic tracking-wide'
			>
				&ldquo;Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.&ldquo;
			</motion.p>
		</section>
	)
}

export default Middle
