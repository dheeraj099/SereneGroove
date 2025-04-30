import React from 'react'
import Header from '../../common/Header'
import Explore from '../../components/explore/Explore'
import Address from '../../components/address/Address'

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-col w-full items-center gap-4 flex-auto justify-center">
          <div className="flex flex-col items-center">
            <span className="text-7xl font-extrabold text-text">Serene Groove</span>
            <span className="text-7xl font-extrabold text-text">Spacious Villas, Natural Luxury</span>
          </div>
          <span className="text-base w-[60%] text-center">
            Every villa offers three spacious en-suite bedrooms with king-size beds and natural light, a private living and dining area, a study, and a fully equipped kitchen — ideal for extended stays and family getaways. Carefully curated amenities, including a tea and coffee station, sustainable bath and skincare products, and personal essentials, are placed thoughtfully within tastefully furnished interiors. Guests enjoy a welcome drink on arrival, a full breakfast each morning, and crafted food and beverage presentations throughout their stay.
          </span>
        </div>
      </div>
      <Explore/>
      <Address/>
    </>
  )
}

export default Home
