"use client"

import { RiGithubLine } from "react-icons/ri"
import { TfiLinkedin, TfiInstagram, TfiFacebook, TfiTwitter } from "react-icons/tfi"
import { motion } from "framer-motion"

function LeftSide() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-end gap-6 text-lightText'>
			<div className='flex flex-col gap-6'>
				<a
					href='https://github.com/WebZerefos'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center'>
						<RiGithubLine />
					</span>
				</a>
				<a
					href='https://linkedin.com/in/victor-zerefos-aaa35297'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center'>
						<TfiLinkedin />
					</span>
				</a>
				<a
					href='https://instagram.com/victorzerefos?igshid=YmMyMTA2M2Y='
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center'>
						<TfiInstagram />
					</span>
				</a>
				<a
					href='https://www.facebook.com/victorzerefos?mibextid=LQQJ4d'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center'>
						<TfiFacebook />
					</span>
				</a>
				<a
					href='https://twitter.com/onlyzerefos'
					className='hover:scale-125 transition duration-300'
				>
					<span className='w-10 h-10 text-xl bg-slate-700 rounded-full inline-flex items-center justify-center'>
						<TfiTwitter />
					</span>
				</a>
			</div>
			<span className='w-[2px] h-36 bg-slate-400'></span>
		</div>
	)
}

export default LeftSide
