import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown, faMagnifyingGlass,} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function Navbar({countcart,countwish}) {
    const [seen,setSeen] = useState(false);

    const handleSeen = () =>{
        setSeen(!seen);
    }
  return (
    <div className='bg-[#F3F4F6] sticky top-0 z-[1000]'>
        {/* Navbar */}
        <div className='flex justify-between items-center mx-[1rem] lg:mx-[5rem] border-b-2 h-[6rem]'> 
            {/* logo */}
            <Link to={'/'}><img className=' lg:w-[9rem] w-[7rem] h-[5.5rem] lg:h-[7.5rem]' src={require('../../asset/logo.png')} alt="logo" /></Link>
            {/* others */}
            <div className=' gap-[1rem] flex flex-col-reverse lg:flex-row lg:w-[65rem] justify-evenly items-center'>
                <div className='flex justify-between items-center bg-orange-500 rounded-2xl pl-[1px] lg:pr-[1rem] py-1 w-[15rem] lg:w-[35rem]'>
                    <input className='rounded-2xl lg:text-2xl px-[1rem] outline-none w-[13rem] lg:w-[30rem]' type="text" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='white'/>
                </div>
                <div className='flex gap-[1rem] lg:text-xl'>
                    <Link to={'/cart'}>
                        <div className='relative flex items-center gap-2'>
                            <ShoppingCartOutlinedIcon/>
                            <p className='text-sm lg:text-lg'>Cart</p>
                            <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countcart}</p>
                        </div>
                    </Link>
                    <Link to={'/wish'}>
                        <div className='relative flex items-center gap-2'>
                            <FavoriteBorderOutlinedIcon/>
                            <p className='text-sm lg:text-lg'>Wishlist</p>
                            <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countwish}</p>
                        </div>
                    </Link>
                    <Link to={'/login'}>
                        <div className='flex items-center gap-2'>
                            <Person2OutlinedIcon style={{ fontSize: 28 }}/>
                            <p className='text-sm lg:text-lg'>Account</p>
                            <FontAwesomeIcon icon={faCaretDown} size='lg'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        {/* Category */}
        <div className='flex justify-evenly lg:mx-[5rem] py-[1rem] lg:pr-[5rem]'>
            <Link to={'/'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>Home</p></Link>
            <Link to={'/newarrival'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>New Arrival</p></Link>
            <div  className='relative flex gap-2 items-center'>
                <Link to={'/allproduct'}><p onMouseOver={handleSeen} className='font-bold cursor-pointer text-xs lg:text-sm'>All Products</p></Link>
                <FontAwesomeIcon icon={faCaretDown} size='xs'/>
                {seen && (
                    <div onMouseLeave={handleSeen} className=' text-lg absolute left-[-2rem] top-10 flex flex-col gap-2 w-[16rem] bg-white border-2 p-3'>
                        <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Products</p>
                        <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Garden Tools</p>
                        <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Concrete Accessories</p>
                        <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Civil Lab Equips</p>
                        <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Shoes</p>
                    </div>
                )}
            </div>
            <Link to={'/hotdeals'}><p className='font-bold cursor-pointer text-xs lg:text-sm'>Hot deals</p></Link>
        </div>
    </div>
  )
}

export default Navbar