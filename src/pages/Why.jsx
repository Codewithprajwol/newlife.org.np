import React from 'react'
import {motion} from 'framer-motion'
import Contact from '../components/Contact'

const Why = () => {
  return (
    // <div className='w-full h-screen p-4 bg-gray-500 text-center text-white'>
    //     <h1 className='text-3xl text-bold mb-3'>Why Choose Us</h1>
    //      <div>
    //         <p>Expert Team: Licensed therapists, counselors, and medical staff.  </p>
    //         <p>Safe Environment:** A peaceful, confidential space designed for healing.</p>
    //         <p>Customized Care:** Personalized programs that fit your specific needs. </p>
    //         <p>Holistic Approach:** Physical, emotional, and spiritual wellness combined.  </p>
    //         <p>Family Involvement:** Family therapy and support to rebuild bonds.</p>
    //      </div>
    // </div>
      <div className="w-full overflow-hidden min-h-screen">
      {/* header section */}
      <motion.div
        className="relative w-full h-64 bg-[url(/whattoexpect.jpg)] bg-cover  bg-[position:70%_30%] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
        <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-cols-2">
          <div className='self-end justify-self-center flex flex-col gap-5'>
            <h1 className="text-4xl md:text-5xl font-muli text-primary ">
              What To Expect
          </h1>
          <p className='sm:text-xl '>The highest Level of individualised care in Nepal.</p>
          </div>
        </div>
      </motion.div>
      {/* what to expect */}
      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 md:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8'>
            <div className=' flex items-center justify-start flex-col gap-3 px-4 sm:px-10  '> 
                <h1 className='text-primary text-2xl'>NewLife Fellowship is here to walk with you every step of the way.</h1>
                <p className='text-sm pt-5'>NewLife Fellowship is a trusted center of healing, dedicated to helping individuals overcome addiction, mental health challenges, and emotional pain. With a skilled, compassionate team of professionals, you are supported by those who truly care.</p>
                <p className='text-sm '>Each journey is guided by a personalized, holistic approach—blending counseling, therapy, and emotional support to foster meaningful, lasting change.
</p>
            </div>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/whattoexpect1.jpg'} className='w-full h-full object-cover ' alt="Team" />
            </div>

        </div>
      </div>
      {/* more about page */}
      <div className='w-full bg-secondary-light'>
      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 md:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8'>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/whattoexpect2.jpg'} className='w-full h-full object-cover ' alt="Team" />
            </div>
            {/* text div */}
            <div className=' flex items-center md:items-start justify-center flex-col gap-3 px-4 sm:px-10  '> 
                <h1 className='text-primary text-2xl'>Individualised Programs</h1>
                <p className='text-sm pt-5'>At New Life, we believe that every person is unique. That’s why each program is carefully tailored to your individual needs, goals, and preferences. With a maximum of just 5 guests at a time, our qualified team can give you the personal attention and support you deserve.</p>
                <p className='text-sm '>Your therapy, meals, exercise, and activities are all designed around what matters most to you — your values, beliefs, and mindset. All sessions, both emotional and physical, are delivered one-on-one. You won’t be asked to join group classes or share with others unless you choose to.
</p>
                <p className='text-sm '>We also understand the importance of staying connected. You’re free to work, contact family and friends, or even bring your pet (conditions apply). Smoking is allowed in designated areas.
</p>
<p className='text-sm'>Here, your healing journey is completely focused on you.</p>
            </div>

        </div>
      </div>
      </div>
      {/* contact page */}
      <Contact/>
      </div>
  )
}

export default Why