"use client"
import Image from "next/image"
import logoImg from "../public/logo.jpg"

import Link from "next/link"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { RiGithubLine } from "react-icons/ri"
import { TfiLinkedin, TfiInstagram, TfiFacebook, TfiTwitter } from "react-icons/tfi"

function Navbar() {
	const ref = useRef<string | any>("")
	const [showMenu, setShowMenu] = useState(false)

	const onClickScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
		const href = e.currentTarget.href
		const targetId = href.replace(/.*\#/, "")
		const elem = document.getElementById(targetId)
		elem?.scrollIntoView({
			behavior: "smooth",
		})

		//update the class name of the click target
		const links = document.querySelectorAll(".nav-link")
		links.forEach((link) => {
			link.classList.remove("active")
		})
		e.currentTarget.classList.add("active")
	}

	const handleClick = () => {}

	const spring = {
		type: "spring",
		damping: 5,
		stiffness: 200,
	}
	return (
		<section className='w-full h-20 lg:h-[8vh] fixed top-0 z-50 bg-bodyColor px-4 drop-shadow-lg'>
			<div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
				<motion.div
					initial={{ x: -500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
					}}
				>
					<Image
						src={logoImg}
						alt='logo'
						className='w-12 rounded-full'
					/>
				</motion.div>
				<motion.div
					initial={{ x: 500, opacity: 0, scale: 0.5 }}
					animate={{ x: 0, opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
					}}
					className='hidden mdl:inline-flex items-center gap-12 '
				>
					<ul className='flex gap-12 text-xs'>
						<Link
							href={"#home"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
						>
							<li>Home</li>
						</Link>

						<Link
							href={"#about"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
						>
							<li>Sobre</li>
						</Link>

						<Link
							href={"#project"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
						>
							<li>Projetos</li>
						</Link>
						<Link
							href={"#contact"}
							onClick={onClickScroll}
							className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
						>
							<li>Contato</li>
						</Link>
					</ul>
					<a
						href='resume.pdf'
						target='_blank'
					>
						<button className='px-4 py-2 rounded-md  text-xs border border-designColor hover:border-white'>Resume</button>
					</a>
				</motion.div>
				{/* hamburger icon  */}
				<div
					onClick={() => setShowMenu(true)}
					className='w-8 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-designColor cursor-pointer overflow-hidden group'
				>
					<span className='w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
					<span className='w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-4 transition-all ease-in-out duration-300'></span>
					<span className='w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
				</div>

				{/* SIDE MENU */}

				{showMenu && (
					<div
						onClick={() => setShowMenu(false)}
						ref={(node) => (ref.current = node)}
						className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
					>
						<motion.div
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className='w-[80%] h-full overflow-y-scroll scrollbarhide bg-bodyColor flex flex-col items-center px-4 py-10 relative'
						>
							<AiOutlineCloseCircle
								onClick={() => setShowMenu(false)}
								className='absolute text-4xl text-designColor cursor-pointer'
							/>
							<div className='flex flex-col items-center gap-12 mt-20'>
								<ul className='flex flex-col text-base gap-12'>
									<Link
										href={"#home"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 20, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{
												duration: 0.2,
												delay: 0.1,
												ease: "easeIn",
											}}
										>
											Home
										</motion.li>
									</Link>
									<Link
										href={"#about"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 20, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{
												duration: 0.2,
												delay: 0.2,
												ease: "easeIn",
											}}
										>
											About
										</motion.li>
									</Link>

									<Link
										href={"#project"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 20, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{
												duration: 0.2,
												delay: 0.3,
												ease: "easeIn",
											}}
										>
											Projects
										</motion.li>
									</Link>
									<Link
										href={"#contact"}
										onClick={onClickScroll}
										className='flex items-center gap-1 font-medium text-lightText hover:text-designColor cursor-pointer duration-300 nav-link'
									>
										<motion.li
											initial={{ x: 20, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{
												duration: 0.2,
												delay: 0.4,
												ease: "easeIn",
											}}
										>
											Contacts
										</motion.li>
									</Link>
								</ul>

								<a
									href='resume.pdf'
									target='_blank'
								>
									<motion.button
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{
											duration: 0.2,
											delay: 0.5,
											ease: "easeIn",
										}}
										className='px-4 w-32 py-2 rounded-md text-designColor text-xs border border-designColor'
									>
										Resume
									</motion.button>
								</a>
								<motion.div
									initial={{ x: -500, opacity: 0, scale: 0.5 }}
									animate={{ x: 0, opacity: 1, scale: 1 }}
									transition={{
										duration: 1.5,
									}}
									className='flex gap-2'
								>
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
								</motion.div>
								<motion.div
									initial={{ y: 500, opacity: 0, scale: 0.5 }}
									animate={{ y: 0, opacity: 1, scale: 1 }}
									transition={{
										duration: 1.5,
									}}
									className='self-center  items-center justify-center'
								>
									<a href='mailto:victor.zerefos@gmail.com'>
										<p className='text-md  tracking-wide text-slate-500'>victor.zerefos@gmail.com</p>
									</a>
								</motion.div>
							</div>
						</motion.div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Navbar
