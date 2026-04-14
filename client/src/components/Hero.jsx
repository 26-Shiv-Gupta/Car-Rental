import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { cityList } from '../assets/assets';

const Hero = () => {

    const [location, setLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    return (
        <>
            <div className='max-w-[60%] max-sm:max-w-full h-screen m-auto flex flex-col justify-center items-center gap-8'>
                <h1 className='text-5xl font-semibold max-sm:text-4xl'>Luxury Cars on Rent</h1>

                <form action="" className='flex px-12 py-6 rounded-full max-sm:rounded-3xl gap-12 shadow-2xl max-sm:flex-col'>
                    <div>
                        <select name='location' value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">Pick up Location</option>
                            {cityList.map((city, index) => (
                                <option value={city} key={city}>{city}</option>
                            ))}
                        </select>
                        <p>{location ? location : 'Pick up location'}</p>
                    </div>
                    <div>
                        <p>Pick-up Date</p>
                        <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                    </div>
                    <div>
                        <p>Return Date</p>
                        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                    </div>
                    <div>
                        <button className='px-6 bg-blue-600 py-2 rounded-full text-white cursor-pointer'>Search</button>
                    </div>
                </form>

                <img src={assets.main_car} alt="main-car" />
            </div>
        </>
    )
}

export default Hero