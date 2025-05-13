import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
const About=()=>{
    return (
        <div className="w-full overflow-hidden min-h-screen">
      {/* header section */}
      <motion.div
        className="relative w-full h-64 bg-[url(/aboutUsintro.jpg)] bg-cover  bg-[position:70%_30%] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
        <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-cols-2">
          <div className='self-end justify-self-center flex flex-col gap-5'>
            <h1 className="text-3xl md:text-5xl font-muli text-primary ">
              About us
          </h1>
          <p className='text-xl text-primary'>New Life is Nepal's Leading Residential Retreat.</p>
          </div>
        </div>
      </motion.div>
      {/* meet the team section */}
      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            <div className=' flex items-center md:items-start justify-center flex-col gap-3 sm:px-10 md:px-20 lg:px-32'> 
                <h1 className='text-primary text-xl'>Meet the Team</h1>
                <p className='text-md  pt-5'>Meet the New Life Team, a hand-picked <br/> team of experts</p>
                <button className='px-3 py-2 bg-secondary text-primary rounded-md  '><Link to='/team'>More Information</Link></button>
            </div>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/meetTeam.jpg'} className='w-full h-full object-cover ' alt="Team" />
            </div>

        </div>
      </div>
      {/* our Aminities */}
      <div className='w-full bg-[#FEF5EF]'>
        <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-20 '>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/amenities.jpg'} className='w-full h-full object-cover ' alt="Amenities" />
            </div>
            {/* text div */}
            <div className=' flex items-center md:items-start justify-center flex-col gap-7 sm:px-10 md:px-20 lg:px-32'> 
                <h1 className='text-primary text-2xl'>Amenities</h1>
                <button className='px-3 py-2 bg-secondary text-primary  rounded-md hover:bg-white transition-colors duration-1000 cursor-pointer  '><Link to='/amenities'>More Information</Link></button>
            </div>

        </div>
      </div>
      </div>
      {/* our FAQs */}
       <div className='w-full'>
        <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-20 '>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            {/* text div */}
            <div className=' flex items-center md:items-start justify-center flex-col gap-7 sm:px-10 md:px-20 lg:px-32'> 
                <h1 className='text-primary text-2xl'>FAQs</h1>
                <button className='px-3 py-2 bg-secondary text-primary  rounded-md hover:bg-white transition-colors duration-1000 cursor-pointer  '><Link to='/faq'>More Information</Link></button>
            </div>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/faqs.jpg'} className='w-full h-full object-cover ' alt="faqs" />
            </div>

        </div>
      </div>
      </div>
      {/* contact section */}
      <Contact/>
      </div>
    )
}

export default About