import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/Team'
import Contact from '../pages/Contact'
import FAQs from '../pages/FAQs'
import Location from '../pages/Location'
import ProgramPage from '../pages/Program'
import Why from '../pages/Why'
import AboutUs from '../pages/Amenities'
import SearchModal from '../Modals/SearchModal'

const MyRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<FAQs/>} />
        <Route path='/location' element={<Location/>} />
        <Route path='/programs' element={<ProgramPage/>} />
        <Route path='/why' element={<Why/>} />
        <Route path='/amenities' element={<AboutUs/>} />
        <Route path='/search' element={<SearchModal />} />
    </Routes>
    </>
  )
}

export default MyRoute
// Create following pages Home > /home About > /about Contact > /contact FAQs > /faq Location > /location
