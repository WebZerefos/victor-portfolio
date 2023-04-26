import { motion } from "framer-motion"

function Contact() {
	return (
		<section
			id='contact'
			className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
		>
			<p className='font-titleFont text-lg text-designColor font-semibold flex items-center tracking-wide'>E agora?</p>
			<h2 className='font-titleFont text-3xl md:text-5xl font-bold'>Entre em Contato</h2>
			<p className='max-w-[600px] text-center text-slate-500'>
				Caso tenha gostado do que viu, entre em contato, pois será um prazer trabalharmos juntos!
			</p>

			<a href='mailto:victor.zerefos@gmail.com'>
				<motion.button
					whileHover={{ scale: [null, 1.2, 1] }}
					transition={{ duration: 0.5 }}
					className='w-40 h-14 border border-designColor mt-6 font-titleFont text-sm text-designColor tracking-wider rounded-md '
				>
					Entrar em contato
				</motion.button>
			</a>
		</section>
	)
}

export default Contact
