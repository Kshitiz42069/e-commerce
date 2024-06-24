import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, } from '@fortawesome/free-regular-svg-icons'
import {faPhone, } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp, faTwitter, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='w-full'>
        {/* top */}
        <div className='bg-[#2E2D39] py-[2rem] px-[3rem] text-white flex flex-col lg:flex-row gap-[1rem] justify-between lg:justify-evenly lg:items-center'>
            <div className='flex lg:justify-center items-center gap-5'>
                <FontAwesomeIcon className='border-2 p-1 rounded-full bg-white' icon={faEnvelope} size='xl' color='#2E2D39'/>
                <div>
                    <p className='text-sm'>Email Support</p>
                    <p className='text-sm'>saleswaltzer@gmail.com</p>
                </div>
            </div>
            <div className='flex lg:justify-center items-center gap-5'>
                <FontAwesomeIcon className='border-2 p-1 rounded-full bg-white' icon={faPhone} size='xl' color='#2E2D39'/>
                <div>
                    <p className='text-sm'>Phone Support</p>
                    <p className='text-sm'>0123456789</p>
                </div>
            </div>
            <div className='flex lg:justify-center items-center gap-5'>
                <FontAwesomeIcon className='border-2 p-1 rounded-full bg-white' icon={faWhatsapp} size='xl' color='#2E2D39'/>
                <div>
                    <p className='text-sm'>Whatsapp Support</p>
                    <p className='text-sm'>0123456789</p>
                </div>
            </div>
        </div>
        {/* bottom */}
        <div className='bg-[#252527] py-[3rem] flex flex-col lg:flex-row justify-center px-[2rem] gap-6 lg:justify-evenly text-white'>
            {/* map */}
            <div className='bg-gray-500 lg:w-1/3 h-[20rem]'>
                <img src="" alt="" />
            </div>
            {/* category */}
            <div className='lg:w-1/3 flex flex-col justify-between'>
                <div className='flex gap-4 text-sm'>
                    <div className='flex flex-col gap-3 font-thin'>
                        <p className='font-bold text-xl'>Company</p>
                        <Link to={'/about'}><p>About Us</p></Link>
                        <Link to={'/return'}><p className='cursor-pointer lg:text-sm'>Return/Exchange</p></Link>
                        <Link to={'/returnpolicy'}><p>Refund Policy</p></Link>
                        <Link to={'/terms'}><p>Terms and Conditions</p></Link>
                    </div>
                    <div className='flex flex-col gap-2 font-thin'>
                        <p className='font-bold text-xl'>Product & Services</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                    </div>
                    <div className='flex flex-col h-[13rem] justify-between font-thin'>
                        <p className='font-bold text-xl'>Help & contact</p>
                        <p>Track your order</p>
                    </div>
                </div>
                <div className='mt-[1rem]'>
                    <p className='text-sm'>Copyright © 2024 Waltzer.com All rights reserved</p>
                </div>
            </div>
            {/* connect */}
            <div className='flex flex-col gap-[1rem]'>
                <p className='font-bold text-xl'>Connect with us</p>
                <div className='flex gap-2'>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='bg-yellow-500 p-2'/>
                    <FontAwesomeIcon icon={faInstagram} size='lg' className='bg-yellow-500 p-2'/>
                    <FontAwesomeIcon icon={faLinkedin} size='lg' className='bg-yellow-500 p-2'/>
                    <FontAwesomeIcon icon={faFacebook} size='lg' className='bg-yellow-500 p-2'/>
                </div>
                <input className='mt-[1rem] p-2 w-[15rem] rounded-lg' type="text" placeholder='example@gmail.com'/>
                <button className='bg-yellow-500 text-black w-[15rem] rounded-lg p-1'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer