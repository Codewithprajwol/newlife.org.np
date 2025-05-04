import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import Program from '../components/Program';

const images = [
    '/amineties.jpg',
    '/detox.jpg',
    '/insta1.jpg',
    '/insta2.jpg',
    '/insta3.jpg',
    '/insta4.jpg',
    '/pic1.jpg',
    '/pic2.jpg',
    '/pic3.jpg',
    '/vr.jpg',
    '/water.jpg',

  ];

const AboutUs = () => {
  return (
    <div className='w-full overflow-hidden min-h-screen'>
    {/* header section */}
    <motion.div className="relative w-full h-64 bg-[url(/amineties.jpg)] bg-cover bg-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} >
    <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
    <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-cols-2">
      <h1 className='text-3xl md:text-5xl font-muli text-primary self-end justify-self-center'>Amenities</h1>
    </div>
  </motion.div>
     {/* Adding more content about the amenities here */}
     <div className='w-full '>
    <div className='w-full max-w-screen-lg mx-auto px-4 sm:px-2 lg:px-8 relative py-10 flex flex-col gap-4'>
    <h1 className=" text-3xl text-primary">Your Healing Starts Here</h1>
         <p className=''>NewLife Fellowship was founded with one vision: to bring hope, healing, and restoration to lives burdened by addiction, mental health issues, and emotional pain.  </p>
        <p className=''>Our team of trained professionals, counselors, and therapists are passionate about providing personalized care in a nurturing, supportive environment. At NewLife, we focus not just on recovery, but on building a new, stronger foundation for life ahead.  </p>
        <div >
           <h1 className='text-2xl md:text-3xl mb-2'>Our Core Values</h1>
            <ul>
                <li>Compassion and Respect  </li>
                <li>Integrity and Confidentiality </li>
               <li>Holistic and Personalized Care</li>
               <li>Community and Connection  </li>
            </ul>
        </div>
  </div>
    </div>

     {/* images section */}
     <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-2 lg:px-8 relative py-10 flex flex-col gap-4'>
     <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`images ${idx}`} className="w-full h-auto rounded-lg" />
        ))}
      </div>
    </div>

    {/* what to expect section */}
    <div className="w-full bg-[#F9F9F9] py-10 md:py-20">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* What to Expect section starts*/}
        <div className="flex flex-col items-center text-center">
          <img src="/expect.jpg" alt="What to Expect" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <Link to='/why' className="text-2xl font-semibold mt-4">What to Expect</Link>
          <p className="mt-2 text-gray-600">
            The highest level of individualized care in Nepal.
          </p>
        </div>

        {/* Time & Cost section starts*/}
        <div className="flex flex-col items-center text-center">
          <img src="/time.jpg" alt="Time & Cost" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <h2 className="text-2xl font-semibold mt-4">Time & Cost</h2>
          <p className="mt-2 text-gray-600">
            NewLife's solution-focused programs are highly personalized. For an obligation-free consultation, contact us now.
          </p>
        </div>
      </div>
      
    </div>

    {/* our program section */}
    <div className="w-full bg-[#F9F9F9] py-10 md:py-20">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {[1,2,3].map((_,idx)=>(<Program key={idx} />))}
          </div>
       </div>
       </div>

      </div>

      
  )
}

export default AboutUs