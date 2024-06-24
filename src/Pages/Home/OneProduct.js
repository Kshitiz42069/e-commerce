import React, { useState } from 'react'

function OneProduct({addtocart,addwish}) {
    const [count,setCount] = useState(1);
    const handleCart = () =>{
            addtocart(product);
    }
    const handleWish = () =>{
        addwish(product);
    }
    const handleAdd = () =>{
        setCount(count+1);
    }

    const handleSub = ()=>{
        setCount(count-1);
    }

    const product = {
        name:"WALTZER WIELDING EQUIPMENTS & ACCESSORIES",
        img:"https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg",
        price:80.00,
    }
  return (
    <div className='py-[3rem] px-[1rem] lg:px-[2rem] flex flex-col lg:flex-row gap-[1rem]'>
        {/* images */}
        <div className=' lg:px-[4rem] flex gap-4 flex-col lg:w-1/2'>
            {/* big */}
            <div className='flex justify-center items-center'>
                <img className='w-[30rem]' src={product.img} alt="" />
            </div>
            {/* small ones */}
            <div className='flex justify-evenly items-center'>
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
            </div>
        </div>
        {/* desc */}
        <div className='flex flex-col gap-[1rem]'>
            <h1 className='text-2xl font-semibold'>{product.name}</h1>
            <div className='flex gap-[2rem]'>
                <p className='text-green-500 text-xl'>₹{product.price}</p>
                <p className='text-red-500 text-xl line-through'>₹100.00</p>
                <button className='bg-orange-500 px-[1rem] text-white rounded-xl'>Save</button>
            </div>
            <div className='flex gap-[2rem]'>
                <p>⭐⭐⭐⭐</p>
                <p>no review</p>
            </div>
            <div>
                <img className='w-[10rem] border-2 border-black rounded-xl' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
            </div>
            <p className='text-xl'>Color: Torqouise</p>
            <div className='flex gap-[4rem]'>
                <p className='text-xl'>Quantity</p>
                <div className='w-[7rem] flex gap-5 items-center text-xl border-2 px-[1rem] rounded-xl'>
                    <p className='cursor-pointer' onClick={handleSub}>-</p>
                    <p className='cursor-default w-2'>{count}</p>
                    <p className='cursor-pointer ml-2' onClick={handleAdd}>+</p>
                </div>
            </div>
            <div className='mt-[3rem] flex flex-col text-xl gap-[2rem]'>
                <button onClick={handleCart} className='add_to_cart'>Add To Cart</button>
                <button onClick={handleWish} className='add_to_cart'>Add to Wishlist</button>
            </div>
        </div>
    </div>
  )
}

export default OneProduct