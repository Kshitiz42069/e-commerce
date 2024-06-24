import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Products() {
    const safety_images = [
        { id: 1, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 2, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 3, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 4, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
    ]
    const civil_images = [
        { id: 5, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 6, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 7, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 8, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
    ]
    const shoes_images = [
        { id: 9, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 10, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 11, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 12, url: 'https://i.pinimg.com/564x/38/4a/91/384a9128523cbeceb95c4a603c54b946.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
    ]
    const garden_images = [
        { id: 13, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 14, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 15, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
        { id: 16, url: 'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg', title: 'Wielding Equipment & Accessories', price: '₹80.00' },
    ]

    const [activeCategory, setActiveCategory] = useState('safety');
    const [fade, setFade] = useState(true);

    const handleCategoryChange = (category) => {
        setFade(false);
        setTimeout(() => {
            setActiveCategory(category);
            setFade(true);
        }, 300);
    }

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
    const getCategoryImages = () => {
        switch (activeCategory) {
            case 'safety':
                return safety_images;
            case 'civil':
                return civil_images;
            case 'shoes':
                return shoes_images;
            case 'garden':
                return garden_images;
            default:
                return [];
        }
    }

    return (
        <div className='pb-[3rem]'>
            {/* Heading */}
            <div className='lg:mx-[11rem] mx-[0.1rem] border-b-2 flex gap-[1rem] lg:gap-[4rem] justify-center items-center'>
                <p onClick={() => handleCategoryChange('safety')} className={`cursor-pointer text-xs lg:text-2xl ${activeCategory === 'safety' ? 'underline font-bold' : ''} lg:underline-offset-8 underline-offset-4`}>Safety Products</p>
                <p onClick={() => handleCategoryChange('garden')} className={`cursor-pointer text-xs lg:text-2xl ${activeCategory === 'garden' ? 'underline font-bold' : ''} lg:underline-offset-8 underline-offset-4`}>Garden Tools</p>
                <p onClick={() => handleCategoryChange('civil')} className={`cursor-pointer text-xs lg:text-2xl ${activeCategory === 'civil' ? 'underline font-bold' : ''} lg:underline-offset-8 underline-offset-4`}>Civil Lab Equip</p>
                <p onClick={() => handleCategoryChange('shoes')} className={`cursor-pointer text-xs lg:text-2xl ${activeCategory === 'shoes' ? 'underline font-bold' : ''} lg:underline-offset-8 underline-offset-4`}>Safety Shoes</p>
            </div>
            {/* products */}
            <div className={`px-[2rem] lg:px-[6rem] py-[2rem] transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {renderProduct(getCategoryImages())}
            </div>
            {/* view more button */}
            <div className='flex justify-center items-center'>
                <button className='apply_button'>
                    VIEW ALL
                </button>
            </div>
        </div>
    )
}

export default Products
