import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Hero() {
  const images = [
    { url: 'https://i.pinimg.com/474x/df/72/dd/df72dde7846eda025a9c5c41de7fe64c.jpg', title: 'Safety Products' },
    { url: 'https://i.pinimg.com/564x/d9/b3/b1/d9b3b1de8f2d79361019e025bf9029fa.jpg', title: 'Search& Rescue' },
    { url: 'https://i.pinimg.com/564x/05/a2/01/05a201fe10cdcde1c6d306c8ad872ec3.jpg', title: 'Fencing Product' },
    { url: 'https://i.pinimg.com/564x/8c/a0/9b/8ca09b889535e43892da4a88a95a6753.jpg', title: 'Civil Lab Equipments' },
    { url: 'https://i.pinimg.com/474x/df/72/dd/df72dde7846eda025a9c5c41de7fe64c.jpg', title: 'Safety Products' },
    { url: 'https://i.pinimg.com/564x/d9/b3/b1/d9b3b1de8f2d79361019e025bf9029fa.jpg', title: 'Search& Rescue' },
    { url: 'https://i.pinimg.com/564x/05/a2/01/05a201fe10cdcde1c6d306c8ad872ec3.jpg', title: 'Fencing Product' },
    { url: 'https://i.pinimg.com/564x/8c/a0/9b/8ca09b889535e43892da4a88a95a6753.jpg', title: 'Civil Lab Equipments' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(4);
    } else if (window.innerWidth >= 768) {
      setVisibleCount(4);
    } else {
      setVisibleCount(4);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - visibleCount ? prevIndex : prevIndex + 1));
  };

  return (
    <div className="relative h-[23rem] lg:h-[59rem] overflow-hidden">
      {/* banner */}
      <div className="w-full h-[16rem] lg:h-[40rem]">
        <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="" />
      </div>
      {/* category */}
      <button onClick={prevImage} className="z-[100] lg:text-3xl absolute top-[16rem] -left-4 lg:left-0 lg:top-[29rem] ml-4 p-2 rounded-full bg-white">
        <FaChevronLeft />
      </button>
      <div className="absolute top-[12rem] lg:top-[28rem] px-[1rem] flex justify-evenly items-center gap-[2rem] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (50 / visibleCount)}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="hover:scale-[1.02] transition-all ease-in-out duration-[500ms] rounded-xl group relative w-[7rem] lg:w-[20rem] overflow-hidden bg-white">
            <img className="group-hover:scale-105 shadow-2xl transition-all ease-in-out duration-[500ms] w-full lg:h-[30rem] h-[10rem]" src={image.url} alt="" />
            <p className=" transition-all ease-in-out absolute top-[14rem] w-[20rem] left-[-5rem] text-7xl text-white font-bold -rotate-90">{image.title}</p>
          </div>
        ))}
      </div>
      <button onClick={nextImage} className="z-[100] lg:text-3xl absolute top-[16rem] lg:top-[29rem] -right-4 lg:right-0 mr-4 p-2 rounded-full bg-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;
