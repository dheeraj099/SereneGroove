import React from 'react'
import Map from './Map'

const Address = () => {
  return (
    <div className="flex items-center justify-center w-full px-[222px] mt-[60px] lg:mt-[30px] gap-20 lg:gap-10">

      <div className='flex flex-col gap-4'>
        <span className='font-semibold text-[64px] lg:text-5xl text-text'>Come find us at </span>
        <span className='font-medium text-5xl lg:text-4xl'>Rabbarkunnu Rd</span>
        <span className='font-medium text-5xl lg:text-4xl'> Kolichal, wayanad, Kerala 673576, India</span>
      </div>
      <div className='flex h-[708px] w-[688px] lg:h-[458px] lg:w-[658px] '>

       <Map/>
      </div>
    </div>
  )
}

export default Address