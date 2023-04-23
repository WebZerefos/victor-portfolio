import Navbar from "@/components/Navbar"
import "../globals.css"

export const metadata = {
	title: "Victor Portfolio",
	description: "Generated by Victor Manuel Zerefos",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='w-full h-screen font-bodyFont bg-bodyColor text-lightText overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-designColor/20'>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
