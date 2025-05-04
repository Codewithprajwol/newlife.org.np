import React from 'react'
import MyRoute from './myroutes/MyRoute'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
   <div className='w-full relative overflow-hidden'>
   <Header/>
   <MyRoute/>
   <Footer/>
   </div>
  )
}

export default App