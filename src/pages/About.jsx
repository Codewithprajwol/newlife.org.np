import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-gray-500 text-white flex items-center justify-center flex-col gap-3 px-2'>
    <h1 className=" text-3xl">Your Healing Starts Here</h1>
        <p className='max-w-[760px]'>NewLife Fellowship was founded with one vision: to bring hope, healing, and restoration to lives burdened by addiction, mental health issues, and emotional pain.  </p>
        <p className='max-w-[760px]'>Our team of trained professionals, counselors, and therapists are passionate about providing personalized care in a nurturing, supportive environment. At NewLife, we focus not just on recovery, but on building a new, stronger foundation for life ahead.  </p>
        <div >
            <h1 className='text-2xl mb-2'>Our Core Values</h1>
            <ul>
                <li>Compassion and Respect  </li>
                <li>Integrity and Confidentiality </li>
                <li>Holistic and Personalized Care</li>
                <li>Community and Connection  </li>
            </ul>
        </div>
  </div>
  )
}

export default About

