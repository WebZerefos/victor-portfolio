"use client"

import { RiGithubLine } from "react-icons/ri"
import { TfiLinkedin, TfiInstagram, TfiFacebook, TfiTwitter } from "react-icons/tfi"
import { motion } from "framer-motion"

function LeftSide() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-end gap-6 text-lightText'>
			<div className='flex flex-col gap-6'>
				<a href='https://github.com/WebZerefos'>
					<motion.span
						whileHover={{ scale: [null, 1.5, 1.4] }}
						transition={{ duration: 0.1 }}
						className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center hover:text-designColor cursor-pointer hover:-translate-y2 transition-all duration-300'
					>
						<RiGithubLine />
					</motion.span>
				</a>
				<a href='https://linkedin.com/in/victor-zerefos-aaa35297'>
					<motion.span
						whileHover={{ scale: [null, 1.5, 1.4] }}
						transition={{ duration: 0.1 }}
						className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center hover:text-designColor cursor-pointer hover:-translate-y2 transition-all duration-300'
					>
						<TfiLinkedin />
					</motion.span>
				</a>
				<a href='https://instagram.com/victorzerefos?igshid=YmMyMTA2M2Y='>
					<motion.span
						whileHover={{ scale: [null, 1.5, 1.4] }}
						transition={{ duration: 0.1 }}
						className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center hover:text-designColor cursor-pointer hover:-translate-y2 transition-all duration-300'
					>
						<TfiInstagram />
					</motion.span>
				</a>
				<a href='https://www.facebook.com/victorzerefos?mibextid=LQQJ4d'>
					<motion.span
						whileHover={{ scale: [null, 1.5, 1.4] }}
						transition={{ duration: 0.1 }}
						className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center hover:text-designColor cursor-pointer hover:-translate-y2 transition-all duration-300'
					>
						<TfiFacebook />
					</motion.span>
				</a>
				<a href='https://twitter.com/onlyzerefos'>
					<motion.span
						whileHover={{ scale: [null, 1.5, 1.4] }}
						transition={{ duration: 0.1 }}
						className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center hover:text-designColor cursor-pointer hover:-translate-y2 transition-all duration-300'
					>
						<TfiTwitter />
					</motion.span>
				</a>
			</div>
			<span className='w-[2px] h-36 bg-slate-400'></span>
		</div>
	)
}

export default LeftSide
