import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faAdd, faAngleDown, faAngleRight, faBagShopping, faLocation, faPowerOff, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function User() {
    const [account,setAccount] = useState(true);
    const [profile, setProfile] = useState(true);
    const [address, setAddress] = useState(false);
    const [addAddress, setAddAddress] = useState(false);

    const handleProfile = ()=>{
        setProfile(true);
        setAddress(false);
        setFilter(false);
    }
    const handleAddress = ()=>{
        setProfile(false);
        setAddress(true);
        setFilter(false);
    }
    const handleNotification = ()=>{
        setProfile(false);
        setAddress(false);
        setFilter(false);
    }

    const handleAddAddress = () =>{
        setAddAddress(true);
    }

    const handleAccount = () =>{
        setAccount(!account);
    }
    const [filter, setFilter] = useState(false);
    const [drop, setDrop] = useState(false);

    const handleFilter = () => {
        setDrop(false);
        setFilter(!filter);
        setTimeout(() => setDrop(true), 100); // Slight delay to ensure re-render
    };
  return (
    <div className='mx-[1rem] lg:mx-[3rem] lg:py-[3rem] flex flex-col lg:flex-row lg:gap-[1.5rem]'>
        
        <div className='lg:hidden flex mb-[2rem] mt-2 border-2 rounded-xl text-xl text-orange-500'>
            <p onClick={handleFilter} className='w-full text-center p-2'><Person2OutlinedIcon/> User</p>
        </div>

        {/* filter section responsive */}
        {filter && (
            <div className={`lg:hidden flex justify-evenly lg:p-[1rem] w-[90vw] top-0 z-[10] bg-white text-orange-500 transition-transform ease-in-out duration-500 transform ${drop ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-full'>
                    <div className='flex flex-col gap-[1.5rem]'>
                        {/* other details */}
                        <div className='border-2'>
                            {/* my orders */}
                            <div className='flex items-center justify-between text-lg p-3 lg:border-b-black border-b-2'>   
                                <div className='flex items-center gap-[1.5rem]'>
                                    <FontAwesomeIcon icon={faBagShopping}/>
                                    <p>My Orders</p>
                                </div>
                                <FontAwesomeIcon icon={faAngleDown}/>
                            </div>
                            {/* accounts */}
                            <div className=''>
                                <div onClick={handleAccount} className='flex items-center justify-between text-lg p-3 lg:border-b-black border-b-2'>   
                                    <div className='flex items-center gap-[1.5rem]'>
                                        <FontAwesomeIcon icon={faUserAlt}/>
                                        <p>Account</p>
                                    </div>
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                </div>
                                {account && (
                                    <div className='text-lg text-gray-500 cursor-default border-b-black border-b-2'>
                                        <p onClick={handleProfile} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>Profile Information</p>
                                        <p onClick={handleAddress} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>Manage Addresses</p>
                                        <Link to={'/wish'}><p className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>My Wishlist</p></Link>
                                        <p onClick={handleNotification} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>All Notification</p>
                                    </div>
                                )}
                            </div>
                            {/* logout */}
                            <div className='flex items-center gap-[1.5rem] text-lg p-3 lg:border-b-black border-b-2'>
                                <FontAwesomeIcon icon={faPowerOff}/>
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        
        
        {/* left */}
        <div className='hidden lg:block lg:w-1/5'>
            <div className='flex flex-col gap-[1.5rem]'>
                {/* name */}
                <div className='flex items-center gap-[1.5rem] text-lg border-2 rounded-xl p-3'>
                    <FontAwesomeIcon icon={faUser} color='orange'/>
                    <p>Hello, <span className='font-bold'>User Name</span></p>
                </div>
                {/* other details */}
                <div className='border-2 rounded-xl'>
                    {/* my orders */}
                    <Link to={'/myorders'}>
                        <div className='flex items-center justify-between text-lg p-3 border-b-black border-b-2'>   
                            <div className='flex items-center gap-[1.5rem]'>
                                <FontAwesomeIcon icon={faBagShopping} color='orange'/>
                                <p>My Orders</p>
                            </div>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </Link>
                    {/* accounts */}
                    <div className=''>
                        <div onClick={handleAccount} className='flex items-center justify-between text-lg p-3 border-b-black border-b-2'>   
                            <div className='flex items-center gap-[1.5rem]'>
                                <FontAwesomeIcon icon={faUserAlt} color='orange'/>
                                <p>Account</p>
                            </div>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {account && (
                            <div className='text-lg text-gray-500 cursor-default border-b-black border-b-2'>
                                <p onClick={handleProfile} className={`px-[1rem] py-2  ${profile? 'bg-orange-100 text-orange-600':''} hover:bg-orange-500 hover:text-white transition-all ease-in-out`}>Profile Information</p>
                                <p onClick={handleAddress} className={`px-[1rem] py-2  ${address? 'bg-orange-100 text-orange-600':''} hover:bg-orange-500 hover:text-white transition-all ease-in-out`}>Manage Addresses</p>
                                <Link to={'/wish'}><p className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>My Wishlist</p></Link>
                                <p onClick={handleNotification} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>All Notification</p>
                            </div>
                        )}
                    </div>
                    {/* logout */}
                    <div className='flex items-center gap-[1.5rem] text-lg p-3 border-b-black border-b-2'>
                        <FontAwesomeIcon icon={faPowerOff} color='orange'/>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='lg:w-4/5 mb-[2rem]'>
            {profile && (
                <div className='w-full border-2 rounded-xl p-[1rem] lg:p-[2rem]'>
                    <h1 className='text-2xl font-semibold'>Personal Information</h1>
                    <form className='flex flex-col gap-[2rem] py-[2rem]' action="submit">
                        <div className='flex flex-col lg:flex-row gap-[2rem] items-center'>
                            <label className='flex items-center gap-[1rem]' htmlFor="f_name">First Name:
                                <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="text" placeholder='First Name'/>
                            </label>
                            <label className='flex items-center gap-[1rem]' htmlFor="l_name">Last Name
                                <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="text" placeholder='Last Name'/>
                            </label>
                        </div>
                        <label htmlFor="gender">Gender</label>
                        <div className='flex gap-[1rem]'>
                            <input required type="radio" value="Male" name="gender" /> Male
                            <input required type="radio" value="Female" name="gender" /> Female
                            <input required type="radio" value="Other" name="gender" /> Other
                        </div>
                        <label className='flex items-center gap-[1rem]' htmlFor="email">Email
                            <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="email" placeholder='Enter your mail'/>
                        </label>
                        <label className='flex items-center gap-[1rem]' htmlFor="mobile">Mobile Number
                            <input required minLength={10} maxLength={10} className='border-2 outline-none p-1 rounded-lg w-[15rem]' pattern="\d{10}" type="tel" placeholder='Enter your Mobile Number'/>
                        </label>
                        <button className='submit_button'>Save Changes</button>
                    </form>
                </div>
            )}
            {address && (
                <div className='w-full border-2 rounded-xl p-[2rem]'>
                    <h1 className='text-2xl font-semibold'>Personal Information</h1>
                    <div>
                        {addAddress ? (
                            <div className='my-[2rem] p-[2rem] border-2 border-orange-500 rounded-lg'>
                                <p className='text-2xl mb-[2rem]'>Add new Address</p>
                                <div className='flex items-center gap-[1rem] text-lg bg-orange-500 text-white lg:w-[20rem] px-4 py-2'>
                                    <FontAwesomeIcon icon={faLocation}/>
                                    <button>Use my current location</button>
                                </div>
                                <form className='mt-[2rem] flex flex-col gap-[1.5rem]' action="submit">
                                    <div className='flex flex-col lg:flex-row gap-[2rem]'>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='Full Name'/>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="number" placeholder='10-digit mobile number'/>
                                    </div>
                                    <div className='flex flex-col lg:flex-row gap-[2rem]'>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="number" placeholder='Pincode'/>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='Locality'/>
                                    </div>
                                    <div className='flex flex-col gap-[1rem]'>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem] lg:w-[35rem]' type="text" name="address line 1" id="address" placeholder='Address Line 1'/>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem] lg:w-[35rem]' type="text" name="address line 2" id="address" placeholder='Address Line 2'/>
                                        <input required className='border-2 outline-none p-2 rounded-lg w-[15rem] lg:w-[35rem]' type="text" name="address line 3" id="address" placeholder='Address Line 3'/>
                                        <div className='flex flex-col lg:flex-row gap-[2rem]'>
                                            <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='city'/>
                                            <input required className='border-2 outline-none p-2 rounded-lg w-[15rem]' type="text" placeholder='Landmark'/>
                                        </div>
                                    </div>
                                    <label className='text-gray-500 text-sm' htmlFor="add-type">Address type</label>
                                    <div className='flex gap-[1rem]'>
                                        <input type="radio" value="home" name="add-type" /> Home
                                        <input type="radio" value="work" name="add-type" /> Work
                                    </div>
                                    <div className='flex items-center gap-[2rem]'>
                                        <button className='text-lg bg-orange-500 text-white px-[3rem] py-2'>Save</button>
                                        <button onClick={()=>setAddAddress(false)} className='text-orange-500 px-[3rem] text-lg'>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        ):(
                            <div className='text-orange-500 font-bold mt-[1rem] text-lg p-[1rem] border-2 flex items-center gap-[2rem]'>
                                <FontAwesomeIcon icon={faAdd}/>
                                <button onClick={handleAddAddress} className='w-full text-start'>Add New Address</button>
                            </div>
                        )}
                    </div>
                    {/* list of address */}
                    <div className='my-[2rem] border-2'>
                        <div className='border-b-2 p-4'>
                            <p className='bg-gray-300 p-1 text-center rounded-lg w-[6rem] text-gray-600'>Home</p>
                            <div className='font-bold flex items-center gap-[2rem]'>
                                <p>User name,</p>
                                <p>Phone number</p>
                            </div>
                            <p className=''>Address sample</p>
                        </div>
                        <div className='border-b-2 p-4'>
                            <p className='bg-gray-300 p-1 text-center rounded-lg w-[6rem] text-gray-600'>Home</p>
                            <div className='font-bold flex items-center gap-[2rem]'>
                                <p>User name,</p>
                                <p>Phone number</p>
                            </div>
                            <p className=''>Address sample</p>
                        </div>
                        <div className='border-b-2 p-4'>
                            <p className='bg-gray-300 p-1 text-center rounded-lg w-[6rem] text-gray-600'>Home</p>
                            <div className='font-bold flex items-center gap-[2rem]'>
                                <p>User name,</p>
                                <p>Phone number</p>
                            </div>
                            <p className=''>Address sample</p>
                        </div>
                        <div className='border-b-2 p-4'>
                            <p className='bg-gray-300 p-1 text-center rounded-lg w-[6rem] text-gray-600'>Home</p>
                            <div className='font-bold flex items-center gap-[2rem]'>
                                <p>User name,</p>
                                <p>Phone number</p>
                            </div>
                            <p className=''>Address sample</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default User