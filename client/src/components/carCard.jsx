import React from 'react'
import { assets } from '../assets/assets'

const CarCard = ({ car }) => {


    return (
        <div className='max-w-75 shadow-xl rounded-2xl'>
            <div className='relative'>
                <img className='rounded-t-2xl w-full' src={assets.car_image1} alt="car_image1" />
                <div className='px-6 py-1 bg-blue-500 absolute top-2 left-2 rounded-2xl text-white'>
                    <p>Available</p>
                </div>
                <div className='px-6 py-1 bg-black absolute bottom-2 right-2 rounded-2xl text-white'>
                    <p>
                        <span>130</span><span>/day</span>
                    </p>
                </div>
            </div>
            <div className='p-2'>
                <div>
                    <h3>Toyta Corolla</h3>
                    <h4>sedan • 2021 </h4>
                </div>
                <div className='flex flex-wrap '>
                    <div className='w-[50%] flex gap-1'>
                        <img className='w-4' src={assets.users_icon} alt="" />
                        <p>hello</p>
                    </div>
                    <div className='w-[50%] flex gap-1'>
                        <img className='w-4' src={assets.users_icon} alt="" />
                        <p>hello</p>
                    </div>
                    <div className='w-[50%] flex gap-1'>
                        <img className='w-4' src={assets.users_icon} alt="" />
                        <p>hello</p>
                    </div>
                    <div className='w-[50%] flex gap-1'>
                        <img className='w-4' src={assets.users_icon} alt="" />
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard