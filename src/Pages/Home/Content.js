import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Content() {
    const best_seller_images = [
        { url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
    ]
    const new_in_images = [
        { url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
    ]

    const renderProduct = (images) => (
        <div className='lg:px-[2.5rem] py-[2rem] grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-3 lg:gap-5'>
            {images.map((image, index) => (
                <Link
                    key={index}
                    to={{
                        pathname: `/product/${image.id}`,
                        state: { product: image }
                    }}
                >
                    <div className='shadow-xl hover:border-orange-500 group p-1 lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save 20%</p>
                            <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                        </div>
                        <img className='w-[10rem] h-[7rem] lg:h-[11rem] lg:w-full rounded-xl' src={image.url} alt="" />
                        <div className='mt-[0.5rem] h-[2rem]'>
                            <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                        </div>
                        <div className='px-[0.2rem]'>
                            <p className='font-bold text-sm lg:text-md'>{image.title}</p>
                            <div className='flex gap-3'>
                                <p>{image.price}</p>
                                <span className='line-through'>₹100.00</span>
                            </div>
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );

    const [seen, setSeen] = useState(true);
    const [fade, setFade] = useState(true);

    const handleBest = () => {
        setFade(false);
        setTimeout(() => {
            setSeen(true);
            setFade(true);
        }, 300);
    }

    const handleNew = () => {
        setFade(false);
        setTimeout(() => {
            setSeen(false);
            setFade(true);
        }, 300);
    }

    return (
        <div className='px-[2rem] lg:px-[5rem] py-[3rem] lg:mx-[2rem] border-t-2'>
            {/* first line */}
            <div className='flex items-center justify-center gap-[5rem]'>
                <p onClick={handleBest} className={`cursor-pointer ${seen ? ' font-bold underline underline-offset-[16px]' : ''} hover:underline hover:underline-offset-[16px]`}>Best Seller</p>
                <p onClick={handleNew} className={`cursor-pointer ${seen ? '' : 'font-bold underline underline-offset-[16px]'} hover:underline hover:underline-offset-[16px]`}>New IN</p>
            </div>
            {/* second line*/}
            <div className='mt-[2rem] flex items-center gap-[2rem] justify-between'>
                <p className='bg-red-500 p-2 text-white text-sm rounded-lg'>Best Deals</p>
                <select className='outline-none border-2 rounded-2xl px-[1rem] w-[15rem]' name="sort" id="sort">
                    <option value="">Sort by: featured</option>
                    <option value="1">Cost</option>
                    <option value="2">Size</option>
                    <option value="3">Reviews</option>
                </select>
            </div>
            {/* products */}
            <div className={` ease-in-out transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {seen && renderProduct(best_seller_images)}
                {!seen && renderProduct(new_in_images)}
            </div>
            {/* View All Button */}
            <div className='flex justify-center items-center'>
                <button className='apply_button'>
                    VIEW ALL
                </button>
            </div>
        </div>
    )
}

export default Content
