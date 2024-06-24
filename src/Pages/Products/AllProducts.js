import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown, faClose, faHeart,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

function AllProducts() {

    const images =[
        {id:1, url:'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:2,url:'https://i.pinimg.com/564x/af/41/bf/af41bfacf3a45495a91bb2414e546ba8.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:3,url:'https://i.pinimg.com/564x/f6/cf/db/f6cfdbb57fce7f64be019c93ef0e2a68.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/564x/fa/d5/c1/fad5c19c2537ef4e51db658613731f66.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/736x/45/65/84/456584384a7bc50c239e0440c0c47eed.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
        {id:4,url:'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg',title:'Wielding Equipment & Accessories',price:'₹80.00'},
    ]

    const [price,setPrice] = useState(false);
    const [size,setSize] = useState(false);
    const [product,setProduct] = useState(false);
    const [available,setAvailable] = useState(false);

    const handlePriceseen = () =>{
        setPrice(!price);
    }
    const handleSize = () =>{
        setSize(!size);
    }
    const handleProduct = () =>{
        setProduct(!product);
    }
    const handleAvailable = () =>{
        setAvailable(!available);
    }

    const [filter, setFilter] = useState(false);
    const [slide, setSlide] = useState(false);

    const handleFilter = () => {
        setSlide(false);
        setFilter(true);
        setTimeout(() => setSlide(true), 100); // Slight delay to ensure re-render
    };
    const handleCloseFilter = () => {
        setSlide(false);
        setTimeout(() => setFilter(false), 300); // Adjust the timeout to match the animation duration
    };
  return (
    <div className={`pb-[3rem] relative`}>
        <div className='lg:hidden flex mb-[2rem] border-2 text-xl text-orange-500'>
            <p onClick={handleFilter} className='w-1/2 text-center p-2 border-r-2'><FilterListIcon/> Filter</p>
            <p className='w-1/2 text-center p-2'><SortIcon/>Sort</p>
        </div>

        {/* filter section responsive */}
        {filter && (
            <div className={`absolute flex justify-evenly p-[1rem] w-[90vw] top-0 z-[10] bg-white text-orange-500 transition-transform ease-in-out duration-500 transform ${slide ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className=''>
                    <div className=' flex justify-between items-center bg-orange-500 rounded-2xl pl-[1px] gap-2 pr-4 py-1 mr-2'>
                        <input className='rounded-2xl lg:text-xl outline-none w-[17rem] px-2 py-1 text-black' type="text" placeholder='Search..'/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='white'/>
                    </div>
                    {/* category */}
                    <div className='py-[1rem] px-[2rem]'>
                        <p className='text-xl font-bold'>Category</p>
                        <div className='px-[1rem] py-[1rem]'> 
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Products</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Garden Tools</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Concrete Accessories</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Civil Lab Equips</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Shoes</p>
                        </div>
                    </div>
                    {/* reviews */}
                    <div className='pb-[1rem] px-[2rem]'>
                        <p className='text-xl font-bold'>Avg. Customer Review</p>
                        <div className='px-[1rem] py-[1rem]'> 
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐⭐⭐⭐☆ & Up</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐⭐☆☆☆ & Up</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐⭐⭐☆☆ & Up</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐☆☆☆☆ & Up</p>
                        </div>
                    </div>
                    {/* new arrival */}
                    <div className='pb-[1rem] px-[2rem]'>
                        <p className='text-xl font-bold'>New Arrival</p>
                        <div className='px-[1rem] py-[1rem]'> 
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Last 30 days</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Last 60 days</p>
                            
                        </div>
                    </div>
                    {/* price */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handlePriceseen} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Price</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {price && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-1" type="checkbox" value="" />
                                    <label htmlFor="price-1" >₹0 - ₹200</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-2" type="checkbox" value="" />
                                    <label htmlFor="price-2" >₹201 - ₹800</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-3" type="checkbox" value="" />
                                    <label htmlFor="price-3" >₹801 - ₹2000</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-4" type="checkbox" value="" />
                                    <label htmlFor="price-4" >Above ₹2001</label>
                                </div>
                            </div>
                        )}  
                    </div>
                    {/* size */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handleSize} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Size</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {size && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-1" type="checkbox" value="" />
                                    <label htmlFor="size-1" >26-28 inches</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-2" type="checkbox" value="" />
                                    <label htmlFor="size-2" >28-30 inches</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-3" type="checkbox" value="" />
                                    <label htmlFor="size-3" >30-32 inches</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-4" type="checkbox" value="" />
                                    <label htmlFor="size-4" >32-34 inches</label>
                                </div>
                            </div>
                        )}  
                    </div>
                    {/* product type */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handleProduct} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Product type</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {product && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-1" type="checkbox" value="" />
                                    <label htmlFor="product-1" >Safety Product</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-2" type="checkbox" value="" />
                                    <label htmlFor="product-2" >Search & Rescue</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-3" type="checkbox" value="" />
                                    <label htmlFor="product-3" >Silica Gel</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-4" type="checkbox" value="" />
                                    <label htmlFor="product-4" >Civil Lab Equipments</label>
                                </div>
                            </div>
                        )}  
                    </div>
                    {/* availability */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handleAvailable} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Availability</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {available && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="default-checkbox" type="checkbox" value="" />
                                    <label htmlFor="default-checkbox" >In Stock</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="checked-checkbox" type="checkbox" value="" />
                                    <label htmlFor="checked-checkbox" >Out of Stock</label>
                                </div>
                            </div>
                        )}  
                    </div>
                </div>
                <FontAwesomeIcon className='mt-[0.2rem]' icon={faClose} size='2x' onClick={handleCloseFilter}/>
            </div>
        )}


        <div className={`${filter? ' opacity-50':''}`}>
            <p className='mx-[3rem] bg-orange-500 w-[12rem] px-[2rem] py-2 rounded-bl-2xl text-white text-sm lg:text-2xl'>Road Safety</p>
            {/* top Line */}
            <div className='px-3 lg:px-[2.5rem] py-[2rem] flex overflow-scroll no-scrollbar gap-[2rem] lg:grid-cols-4 items-center justify-between lg:gap-5'>
                {images.map((image, index) => (
                    <Link
                        key={index}
                        to={{
                            pathname: '/product',
                            state: { product: image }
                        }}
                    >
                        <div className='shadow-xl hover:border-orange-500 group p-1 w-[10rem] lg:w-[17rem] lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save 20%</p>
                                <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                            </div>
                            <img className='w-[10rem] h-[7rem] lg:h-[11rem] p-[1rem] lg:w-full rounded-xl' src={image.url} alt="" />
                            <div className='hidden lg:block mt-[0.5rem] h-[2rem]'>
                                <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                            </div>
                            <div className='px-[0.2rem]'>
                                <p className='font-bold text-sm'>{image.title}</p>
                                <div className='flex gap-3 text-sm'>
                                    <p>{image.price}</p>
                                    <span className='line-through'>₹100.00</span>
                                </div>
                                <p>⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {/* following products */}
            <div className='flex flex-col lg:flex-row gap-[1rem] py-[3rem] lg:ml-[2rem]'>
                {/* filter */}
                <div className='hidden lg:block'>
                    <div className=' flex justify-between items-center bg-orange-500 rounded-2xl pl-[1px] gap-2 pr-4 py-1 '>
                        <input className='rounded-2xl lg:text-xl outline-none w-[20rem] px-2 py-1' type="text" placeholder='Search..'/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='white'/>
                    </div>
                    {/* category */}
                    <div className='py-[1rem] px-[2rem]'>
                        <p className='text-xl font-bold'>Category</p>
                        <div className='px-[1rem] py-[1rem]'> 
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Products</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Garden Tools</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Concrete Accessories</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Civil Lab Equips</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Shoes</p>
                        </div>
                    </div>
                    {/* reviews */}
                    <div className='pb-[1rem] px-[2rem]'>
                        <p className='text-xl font-bold'>Avg. Customer Review</p>
                        <div className='px-[1rem] py-[1rem]'> 
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐⭐⭐⭐☆ & Up</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐⭐☆☆☆ & Up</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐⭐⭐☆☆ & Up</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>⭐☆☆☆☆ & Up</p>
                        </div>
                    </div>
                    {/* new arrival */}
                    <div className='pb-[1rem] px-[2rem]'>
                        <p className='text-xl font-bold'>New Arrival</p>
                        <div className='px-[1rem] py-[1rem]'> 
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Last 30 days</p>
                            <p className=' transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Last 60 days</p>
                            
                        </div>
                    </div>
                    {/* price */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handlePriceseen} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Price</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {price && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-1" type="checkbox" value="" />
                                    <label htmlFor="price-1" >₹0 - ₹200</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-2" type="checkbox" value="" />
                                    <label htmlFor="price-2" >₹201 - ₹800</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-3" type="checkbox" value="" />
                                    <label htmlFor="price-3" >₹801 - ₹2000</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="price-4" type="checkbox" value="" />
                                    <label htmlFor="price-4" >Above ₹2001</label>
                                </div>
                            </div>
                        )}  
                    </div>
                    {/* size */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handleSize} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Size</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {size && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-1" type="checkbox" value="" />
                                    <label htmlFor="size-1" >26-28 inches</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-2" type="checkbox" value="" />
                                    <label htmlFor="size-2" >28-30 inches</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-3" type="checkbox" value="" />
                                    <label htmlFor="size-3" >30-32 inches</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="size-4" type="checkbox" value="" />
                                    <label htmlFor="size-4" >32-34 inches</label>
                                </div>
                            </div>
                        )}  
                    </div>
                    {/* product type */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handleProduct} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Product type</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {product && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-1" type="checkbox" value="" />
                                    <label htmlFor="product-1" >Safety Product</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-2" type="checkbox" value="" />
                                    <label htmlFor="product-2" >Search & Rescue</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-3" type="checkbox" value="" />
                                    <label htmlFor="product-3" >Silica Gel</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="product-4" type="checkbox" value="" />
                                    <label htmlFor="product-4" >Civil Lab Equipments</label>
                                </div>
                            </div>
                        )}  
                    </div>
                    {/* availability */}
                    <div className='pb-[2rem] px-[2rem]'>
                        <div onClick={handleAvailable} className='flex items-center justify-between border-b-2'>
                            <p className='text-xl font-bold'>Availability</p>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                        {available && (
                            <div className='px-[1rem]'>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="default-checkbox" type="checkbox" value="" />
                                    <label htmlFor="default-checkbox" >In Stock</label>
                                </div>
                                <div className="flex items-center pt-[1rem] gap-[0.5rem]">
                                    <input id="checked-checkbox" type="checkbox" value="" />
                                    <label htmlFor="checked-checkbox" >Out of Stock</label>
                                </div>
                            </div>
                        )}  
                    </div>
                </div>
                {/* product */}
                <p className='lg:hidden mx-[2rem] bg-orange-500 px-[2rem] py-2 rounded-bl-2xl text-white text-sm lg:text-2xl'>Selected Category</p>
                <div className='lg:w-4/5 overflow-hidden'>
                    <div className='px-3 lg:px-[2.5rem] py-[2rem] flex overflow-scroll no-scrollbar gap-[2rem] lg:grid-cols-4 items-center justify-between lg:gap-5'>
                        {images.map((image, index) => (
                            <Link
                                key={index}
                                to={{
                                    pathname: '/product',
                                    state: { product: image }
                                }}
                            >
                                <div className='shadow-xl hover:border-orange-500 group p-1 w-[10rem] lg:w-[17rem] lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save 20%</p>
                                        <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                                    </div>
                                    <img className='w-[10rem] h-[7rem] lg:h-[11rem] p-[1rem] lg:w-full rounded-xl' src={image.url} alt="" />
                                    <div className='hidden lg:block mt-[0.5rem] h-[2rem]'>
                                        <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                                    </div>
                                    <div className='px-[0.2rem]'>
                                        <p className='font-bold text-sm'>{image.title}</p>
                                        <div className='flex gap-3 text-sm'>
                                            <p>{image.price}</p>
                                            <span className='line-through'>₹100.00</span>
                                        </div>
                                        <p>⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='px-3 lg:px-[2.5rem] py-[2rem] flex overflow-scroll no-scrollbar gap-[2rem] lg:grid-cols-4 items-center justify-between lg:gap-5'>
                        {images.map((image, index) => (
                            <Link
                                key={index}
                                to={{
                                    pathname: '/product',
                                    state: { product: image }
                                }}
                            >
                                <div className='shadow-xl hover:border-orange-500 group p-1 w-[10rem] lg:w-[17rem] lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save 20%</p>
                                        <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                                    </div>
                                    <img className='w-[10rem] h-[7rem] lg:h-[11rem] p-[1rem] lg:w-full rounded-xl' src={image.url} alt="" />
                                    <div className='hidden lg:block mt-[0.5rem] h-[2rem]'>
                                        <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                                    </div>
                                    <div className='px-[0.2rem]'>
                                        <p className='font-bold text-sm'>{image.title}</p>
                                        <div className='flex gap-3 text-sm'>
                                            <p>{image.price}</p>
                                            <span className='line-through'>₹100.00</span>
                                        </div>
                                        <p>⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='px-3 lg:px-[2.5rem] py-[2rem] flex overflow-scroll no-scrollbar gap-[2rem] lg:grid-cols-4 items-center justify-between lg:gap-5'>
                        {images.map((image, index) => (
                            <Link
                                key={index}
                                to={{
                                    pathname: '/product',
                                    state: { product: image }
                                }}
                            >
                                <div className='shadow-xl hover:border-orange-500 group p-1 w-[10rem] lg:w-[17rem] lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save 20%</p>
                                        <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                                    </div>
                                    <img className='w-[10rem] h-[7rem] lg:h-[11rem] p-[1rem] lg:w-full rounded-xl' src={image.url} alt="" />
                                    <div className='hidden lg:block mt-[0.5rem] h-[2rem]'>
                                        <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                                    </div>
                                    <div className='px-[0.2rem]'>
                                        <p className='font-bold text-sm'>{image.title}</p>
                                        <div className='flex gap-3 text-sm'>
                                            <p>{image.price}</p>
                                            <span className='line-through'>₹100.00</span>
                                        </div>
                                        <p>⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='px-3 lg:px-[2.5rem] py-[2rem] flex overflow-scroll no-scrollbar gap-[2rem] lg:grid-cols-4 items-center justify-between lg:gap-5'>
                        {images.map((image, index) => (
                            <Link
                                key={index}
                                to={{
                                    pathname: '/product',
                                    state: { product: image }
                                }}
                            >
                                <div className='shadow-xl hover:border-orange-500 group p-1 w-[10rem] lg:w-[17rem] lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save 20%</p>
                                        <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                                    </div>
                                    <img className='w-[10rem] h-[7rem] lg:h-[11rem] p-[1rem] lg:w-full rounded-xl' src={image.url} alt="" />
                                    <div className='hidden lg:block mt-[0.5rem] h-[2rem]'>
                                        <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                                    </div>
                                    <div className='px-[0.2rem]'>
                                        <p className='font-bold text-sm'>{image.title}</p>
                                        <div className='flex gap-3 text-sm'>
                                            <p>{image.price}</p>
                                            <span className='line-through'>₹100.00</span>
                                        </div>
                                        <p>⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts