import Image from "next/image"
import codeLogo from "../public/code.png"

type Props = {
	title: string
}

function Title({ title }: Props) {
	return (
		<h2 className='font-titleFont text-3xl font-semibold flex items-center'>
			<span>
				<Image
					src={codeLogo}
					alt='code'
					className='w-7 mr-2'
				/>
			</span>
			{title}
			<span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-slate-500 ml-6'></span>
		</h2>
	)
}

export default Title
