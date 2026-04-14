import { useState } from 'react'
import './App.css'
import {Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/car-details" element={<CarDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App