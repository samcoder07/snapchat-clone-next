import React from 'react'
import Image from 'next/image'
import MyAi from '@/public/myai-asset.png'
import { Button } from './ui/button'
import { FaLaptop } from "react-icons/fa";
import Link from 'next/link';
const Header = () => {
	return (
		<div className='flex justify-between items-center max-w-6xl mx-auto'>
			<div><h1 className='text-7xl font-medium'>Snapchat is
				<br /> now on the <br />
				web!</h1>
				<h1 className='my-5 text-xl'>Chat, Snap, and video call your friends from
					wherever you are</h1>
				<Link href={"/login"}>
					<Button className='gap-2 rounded-full'> <FaLaptop /> Login to chat </Button>
				</Link>
			</div>
			<div>
				<Image src={MyAi} alt="myai" width={650} height={650} />
			</div>
		</div >
	)
}

export default Header
