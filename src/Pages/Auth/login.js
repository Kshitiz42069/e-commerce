import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#ffc89b]'>
        <div className='flex lg:w-2/3 lg:h-[90vh] overflow-hidden rounded-xl'>
            {/* image */}
            <div className='hidden lg:block relative w-1/2'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/564x/5d/fb/5f/5dfb5f08b8d33aacd35b672339bd679a.jpg" alt="bg" />
                <p className='text-white font-bold absolute top-[16rem] left-4 text-8xl'> Hey There Welcome!</p>
                {/* <img className='absolute top-10 w-[10rem]' src={require('../../assets/logo.png')} alt="" /> */}
            </div>
            {/* details */}
            <div className='lg:w-1/2 bg-white py-[4rem] flex flex-col pl-[3rem] lg:pl-[5rem] pr-[3rem] gap-[2rem]'>
                <h1 className='text-5xl font-bold text-orange-500'>Login</h1>
                <p className='font-thin w-[17rem]'>Welcome! Please fill the credentials to create an Account.</p>
                <form className='flex flex-col gap-[1rem]' action="submit">
                    <label className='text-gray-500 p-1' htmlFor="username">Username</label>
                    <input className='border-2 p-1 outline-none' type="email" placeholder='example@gmail.com' required/>
                    <label className='text-gray-500 p-1' htmlFor="password">Password</label>
                    <input className='border-2 p-1 outline-none' type="password" placeholder='******' required/>
                    <button className='submit_button'><Link to={'/user'}>Login</Link></button>
                </form>
                <Link to={'/forgotpassword'}>
                    <p className='text-lg'>Forgot Password? <button className='text-orange-500 font-bold'>Click Here!</button></p>
                </Link>
                <Link to={'/register'}>
                    <p className='text-lg'>Don't have an Account? <button className='text-orange-500 font-bold'>Sign up</button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login