import React from 'react'

function NewArrivalPage() {
  const images = [
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
  ]
  return (
    <div>
      {/* hero */}
      <img className='w-full lg:h-[50vh]' src="https://www.shutterstock.com/image-photo/construction-land-surveyor-site-inspection-600nw-2211536107.jpg" alt="" />
      {/* content */}
      <div className='lg:px-[4rem] px-[1rem]'>
        {/* top */}
        <div className='py-[3rem] flex flex-col lg:flex-row gap-[2rem] justify-between items-center'>
          <button className='rounded-lg text-3xl bg-red-500 text-white py-2 px-[2rem]'>Latest Collections</button>
          {/* time */}
          <div className='flex gap-[2rem] justify-evenly items-center rounded-xl bg-red-300 p-4'>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>20</p>
              <p className='text-xl text-center'>Days</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>23</p>
              <p className='text-xl text-center'>Hours</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>50</p>
              <p className='text-xl text-center'>Minutes</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>27</p>
              <p className='text-xl text-center'>Seconds</p>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='py-[2rem] flex flex-col lg:flex-row gap-[4rem]'>
          {/* left */}
          <div className='lg:w-2/3'>
            <div className=' flex flex-col lg:flex-row gap-4'>
                <img className='lg:w-1/2 h-[38rem]' src="https://i.pinimg.com/564x/14/88/d1/1488d1f5b6656824cf821025a23f03e7.jpg" alt="" />
                <div className=' lg:w-1/2 flex lg:flex-col justify-between'>
                  <img className='w-1/2 lg:w-full' src="https://i.pinimg.com/564x/4d/02/02/4d02028e50438beafedc9297c01bcab3.jpg" alt="" />
                  <img className='w-1/2 lg:w-full' src="https://i.pinimg.com/564x/b8/8d/8b/b88d8bd14909deb56c757096a810e8f0.jpg" alt="" />
                </div>
            </div>
            <p className=' py-[1rem] text-2xl font-bold'>Featured Products</p>
            <p className='font-thin text-xl'>Description of Products</p>
          </div>
          {/* right */}
          <div className='lg:w-1/3 flex flex-col gap-[1rem]'>
            {/* products */}
            <div className='flex flex-col'>
              <img src="https://i.pinimg.com/564x/60/36/89/603689895f578e85cb86e0c118969758.jpg" alt="" />
              <p className='mt-[1rem] font-bold text-xl'>Product Name</p>
              <p className='font-thin'>Description of Product</p>
              <p className='font-bold text-xl'>₹10.99</p>
            </div>
            <div className='flex flex-col'>
              <img src="https://i.pinimg.com/564x/60/36/89/603689895f578e85cb86e0c118969758.jpg" alt="" />
              <p className='mt-[1rem] font-bold text-xl'>Product Name</p>
              <p className='font-thin'>Description of Product</p>
              <p className='font-bold text-xl'>₹10.99</p>
            </div>
          </div>
        </div>
        {/* products */}
        <div className='py-[2rem]'>
          <h1 className='text-4xl font-bold pb-[2rem]'>Temple</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[2rem] lg:px-[3rem]'>
            {images.map((image,index)=>(
              <div key={index} className='flex flex-col items-center w-[12rem] lg:w-[16rem] shadow-xl rounded-xl p-2'>
                <img className='lg:w-[20rem] w-[10rem] h-[7rem] lg:h-[13rem] rounded-xl' src={image.url} alt="" />
                <p className='mt-[1rem] font-bold text-sm lg:text-xl'>{image.title}</p>
                <p className='font-thin text-sm'>Description of Product</p>
                <p className='font-bold text-sm lg:text-xl'>₹{image.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivalPage