import React from 'react'
import img from '../assets/profilepic.jpg'

function Hero() {


  return (
   <section  id="home" className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-16 px-4 sm:px-6 lg:px-8 ">
    
    {/* Left col */}
    <div className="w-full md:w-1/2 space-y-8">
    {/* Star Batch */}
    <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
        <span className="text-blue-600 group-hover:text-amber-300 g:scale-110 transition-transform">★</span>
        <span>Jump Start Your growth</span>
    </div>


    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight '>Manthan Patel <span className='text-blue-600 relative inline-block '>Frontend Devloper</span><span className='absolute bottom-0 left-0 w-full h-0.05 bg-blue-200/60 '> </span>
     <span className='inline-block ml-2 animate-pulse'>
      ⏰
      </span></h1>
      <p className='text-gray-600 text-lg md:text-xl max-w-xl pl-'>Hi, I'm Manthan Patel 👋  
        A Passionate Frontend Developer 🚀  
        Crafting beautiful and responsive web interfaces with HTML, CSS, JavaScript, and React.
      </p>
      <div className='flex gap-3 max-w-md'>
        <input type="Email" placeholder='Email address' className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-blue-100 transition-all' />
        <button className='bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300'>→</button>
      </div>
    
    </div>
    {/* right col */}
    <div className='w-full md:w-1/2 flex justify-center md:justify-space-between mb-8 md:mb-0 mt-16 md:mt-0 pl-0 md:pl-12'>
    <div className='relative'>
      <img src={img} alt=""  className='rounded-full relative z-10 hover:scale-[1.02]   w-64 h-64 object-cover '/>
    </div>
    </div>
    </section>
  );
}

export default Hero
