import Image from "next/image"

import LeftSide from "@/components/LeftSide"
import Middle from "@/components/Middle"
import Title from "@/components/Title"
import RightSide from "@/components/RightSide"
import FadeIn from "@/components/FadeIn"

import { getAbout, getProjects, getSkills } from "@/sanity/sanity-utils"
import { AiFillThunderbolt } from "react-icons/ai"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Home = async () => {
	const skills = await getSkills()
	const about = await getAbout()
	const projects = await getProjects()

	return (
		<div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
			<LeftSide />
			<div className='h-[88vh] w-full mx-auto p-4'>
				<Middle />

				{/* About */}
				<section
					id='about'
					className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
				>
					<FadeIn delay={1.5}>
						<Title title='Sobre mim' />
						<div className='flex flex-col lgl:flex-row gap-16'>
							<div className='w-full lgl:w-2/3 text-base text-slate-400 font-medium flex flex-col gap-4'>
								<p className='leading-loose w-full text-justify'>
									Olá, meu nome Victor Manuel Zerefos altamente <span className='text-designColor'>ambicioso</span>,{" "}
									<span className='text-designColor'>automotivado</span> e <span className='text-designColor'>focado</span> na área de desenvolvimento
									para desenvolver soluções que possam impactar na vida das pessoas e empresas. Eu me formei na Faculdade Fortium Brasília, em 2014,
									com bacharelado em Sistemas de Informação e pós graduado em Engenharia de Software. Eu tenho uma grande variedade de hobbies e
									paixões que me mantêm ocupado. Desde ler, praticar esportes, viajar, eu estou sempre buscando novas experiências para me manter
									envolvido e aprender coisas novas. Eu acredito que uma pessoa nunca deva parar de crescer e é isso que me esforço a fazer, eu tenho
									uma paixão por tecnologia e um desejo de sempre ir além dos limites do que é possível. Estou animado para ver aonde minha carreira
									me leva e estou sempre aberto a novas oportunidades.
								</p>
								<p>Aqui estão algumas das tecnologias que venho trabalhando e aprendendo:</p>

								<ul className='max-w-[450px] grid grid-cols-2 gap-2'>
									{skills.map((skill) => (
										<li
											key={skill._id}
											className='flex items-center gap-2'
										>
											<span className='text-designColor'>
												<AiFillThunderbolt />
											</span>{" "}
											{skill.skill}
										</li>
									))}
								</ul>
							</div>
							<div>
								<Image
									src={about.image}
									alt={about.name}
									width={500}
									height={500}
									className='rounded-lg w-full object-cover'
								/>
							</div>
						</div>
					</FadeIn>
				</section>

				{/* Projects */}
				<section
					id='project'
					className='max-w-container mx-auto lgl:px-20 py-24'
				>
					<FadeIn delay={2.5}>
						<Title title='Projetos' />
					</FadeIn>
					<FadeIn
						delay={2.5}
						className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'
					>
						{projects.map((project) => (
							<a
								href={project.url}
								target='_blank'
								rel='noopener noreferrer'
								key={project._id}
								className='border border-slate-50 rounded-lg p-1 shadow-sm hover:scale-105 transition duration-500 hover:border-orange-200'
							>
								{project.image && (
									<Image
										src={project.image}
										alt={project.alt}
										width={650}
										height={300}
										className='object-cover rounded-lg'
									/>
								)}
								<div className='mt-3 font-extrabold'>{project.name}</div>
							</a>
						))}
					</FadeIn>
				</section>

				{/* Contact */}
				<Contact />

				{/* Footer */}
				<Footer />
			</div>

			<RightSide />
		</div>
	)
}

export default Home
