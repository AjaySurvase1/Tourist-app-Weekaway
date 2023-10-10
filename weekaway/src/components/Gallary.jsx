import React from 'react'

const Gallary = () => {
  return (
    <div id='gallary' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallary</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover' src="https://c4.wallpaperflare.com/wallpaper/653/585/146/life-resort-house-architecture-wallpaper-preview.jpg" alt=""/>
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3601421/pexels-photo-3601421.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Gallary