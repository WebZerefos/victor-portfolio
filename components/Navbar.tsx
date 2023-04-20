import Image from "next/image"
import logoImg from "../public/victormanuel.jpg"
import { navLinksdata } from "../constants/index"
function Navbar() {
	return (
		<div className='w-full h-20 mx-auto flex justify-between items-center '>
			<div className='flex items-center'>
				<Image
					src={logoImg}
					alt='logo'
					width={70}
					height={70}
					className='rounded-full'
				/>
				<h1 className='text-2xl ml-5'>Victor Zerefos</h1>
			</div>
			<div className=''>
				<ul className='flex gap-10'>
					{navLinksdata.map((navLink) => (
						<li
							key={navLink._id}
							className='text-base font-normal text-slate-400 tracking-wide cursor-pointer hover:text-designColor duration-300 '
						>
							{navLink.title}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
