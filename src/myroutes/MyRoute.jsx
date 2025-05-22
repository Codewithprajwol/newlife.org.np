import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import FAQs from '../pages/FAQs'
import Location from '../pages/Location'
import ProgramPage from '../pages/Program'
import Why from '../pages/Why'
import SearchModal from '../Modals/SearchModal'
import Amenities from '../pages/Amenities'
import Team from '../pages/Team'
import About from '../pages/About'
import ContactPage from '../pages/ContactPage'
import AlcoholPage from '../pages/TreatmentPages/AlcoholPage'
import AddictionPage from '../pages/TreatmentPages/AddictionPage'

const MyRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/faq' element={<FAQs/>} />
        <Route path='/location' element={<Location/>} />
        <Route path='/programs' element={<ProgramPage/>} />
        <Route path='/why' element={<Why/>} />
        <Route path='/amenities' element={<Amenities/>} />
        <Route path='/search' element={<SearchModal />} />
        {/* <Route path='/treatment/alcohol' element={<AlcoholPage/>} /> */}
        <Route path='/treatment/:type' element={<AddictionPage />} />
    </Routes>
    </>
  )
}

export default MyRoute
// Create following pages Home > /home About > /about Contact > /contact FAQs > /faq Location > /location
