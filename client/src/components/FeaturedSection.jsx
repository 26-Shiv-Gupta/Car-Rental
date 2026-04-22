import React from 'react'
import CarCard from './carCard'

const FeaturedSection = () => {
  return (
    <>
        <div className='py-10 flex flex-col items-center'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold pb-2'>Featured Vehicles</h1>
                <h2 className='text-gray-500'>Explore our selection of premium vehicles available for your next adventure.</h2>
            </div>
            <div className='grid grid-cols-3 gap-5 my-10'>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
            <div>
                <button className='border py-1 px-6 rounded-xl border-gray-400'>Explore all Cars</button>
            </div>
        </div>
    </>
  )
}

export default FeaturedSection