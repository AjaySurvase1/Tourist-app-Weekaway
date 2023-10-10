import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>

       <img className='w-full h-full object-cover' src="https://c4.wallpaperflare.com/wallpaper/126/351/721/sky-sunset-shore-sea-wallpaper-preview.jpg" alt="/"/> 
      <div className='max-w-[1140px] m-auto'>
      <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
        <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
        <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
        <p>"And at the end of the day, your feet should be dirty, your hair messy, and your eyes sparkling."</p>
       </div>
      </div>
      
    </div>
  )
}

export default Hero