import { useState } from 'react'
import './App.css'
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/car-details" element={<CarDetails />} />
      </Routes>
    </>
  )
}

export default App