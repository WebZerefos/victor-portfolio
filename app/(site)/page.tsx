import Banner from "@/components/Banner"
import Features from "@/components/Features"

const Home = async () => {
	return (
		<div className='w-full h-auto bg-bodyColor text-lightText py-2'>
			<div className='max-w-screen-2xl mx-auto px-16 font-titleFont'>
				<Banner />
				<Features />
			</div>
		</div>
	)
}

export default Home
// 20min