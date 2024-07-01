import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
const Login = () => {
	return (
		<div>
			<h1 className='text-center text-2xl font-medium my-2'>Login up to Snapchat</h1>
			<Button className='w-full my-4 gap-2'><FaGithub size="24px" /> Login with Github</Button>
			<p>New To Snapchat? <Link href={'/login'} className='underline'>Sign up</Link></p>
		</div>
	)
}

export default Login
