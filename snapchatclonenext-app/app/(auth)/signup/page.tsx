import Signup from '@/components/Signup'
import { signIn } from '@/auth'
import React from 'react'

const SignupPage = () => {
	const signupHandler = async () => {
		'use server'
		await signIn('github')
	}
	return (
		<form action={signupHandler}>
			<Signup />
		</form>
	)
}

export default SignupPage
