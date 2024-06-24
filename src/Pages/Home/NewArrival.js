import React from 'react'

function NewArrival() {
  return (
    <div className=''>
        <div className='ml-[1rem] md:ml-[3rem]'>
            <h1 className='text-3xl md:text-5xl rs '>New Arrivals</h1>
        </div>
        <div className='shadow-xl border-2 m-5 p-6 flex flex-col md:flex-row gap-[3rem] md:gap-[7rem] bg-[#F3F4F6] rounded-xl text-black'>
            <div className='relative'>
                <img className='w-[30rem] h-[25rem] md:h-[40rem] hover:blur-sm rounded-xl' src="https://m.media-amazon.com/images/I/315aB0ZJIXL.jpg" alt="shoes" />
                <div className='hover:scale-105 cursor-default ml-[2rem] gap-3 flex flex-col rs text-orange-500 top-[50%] md:top-[54%] absolute z-10'>
                    <h1 className=' text-4xl md:text-7xl drop-shadow-xl font-bold'>WI Agarson Super Gold Gumboot</h1>
                    <p className='text-lg'>Black</p>
                    <button className=' text-start'><span className='cursor-pointer underline'>Shop now</span>→</button>
                </div>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='rs flex justify-center items-center'>
                    <div className='w-[17rem]'>
                        <p className='text-xl font-bold'>Collections</p>
                        <p>Waltzer India Stainless Steel Vicat Needle Apparatus</p>
                        <button className=' text-start'><span className=' cursor-pointer underline'>Shop now</span>→</button>
                    </div>
                    <div>
                        <img className='rounded-xl hover:blur-sm w-[28rem] h-[10rem] lg:h-[20rem]' src="https://m.media-amazon.com/images/I/71mseicV69L._SL1500_.jpg" alt="" />
                    </div>
                </div>
                <div className='flex md:gap-[2rem]'>
                    <div className='relative'>
                        <img className='rounded-xl hover:blur-sm cursor-pointer relative w-[24rem] lg:h-[17rem]' src="https://m.media-amazon.com/images/I/41+SqcER+OL._SY300_SX300_.jpg" alt="" />
                    </div>
                    <div className='flex gap-1 mr-[1rem] justify-center items-end md:items-center'>
                        <p className=' text-lg font-bold'>Hessian Burlap Fabric Roll</p>
                        <img className='hover:blur-sm w-[13rem] h-[16rem]' src="https://m.media-amazon.com/images/I/61DhvXWHX9L.jpg" alt="speaker" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrival