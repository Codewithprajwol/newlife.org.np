import React from 'react'
import { motion } from 'framer-motion'
import { Factory, Mail, Phone } from 'lucide-react'

const About = () => {
  return (
  <div className='w-full overflow-hidden min-h-screen'>
  <motion.div className="relative w-full h-64 bg-[url(/teamheader.png)] bg-cover bg-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} >
  <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
  <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-cols-2">
    <h1 className='text-3xl md:text-4xl font-muli text-primary self-end justify-self-center'>Our Team Members</h1>
  </div>
</motion.div>
{/* member showing area */}
<div className='w-full max-w-screen-md mx-auto px-4 sm:px-2 lg:px-8 relative py-10 sm:py-20'>
  {/* showing team members data */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"].map((src, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={src} alt={`team${idx}`} className="w-32 h-32 rounded-full object-cover object-top-right shadow-lg" />
          <p className="mt-4 text-sm font-medium">Team Member</p>
        </div>
      ))}
    </div>

</div>
<hr className='w-full  text-pink-200 shadow-2xl'></hr>
        {/* contact area */}
        <section className='w-full bg-[#F6F2ED] px-4 sm:px-6 lg:px-8 py-10 sm:py-20'> 
        <div className="max-w-screen-lg mx-auto w-full grid md:grid-cols-2 gap-12  bg-[#F6F2ED]">

{/* we are here to part*/}
<div className="flex flex-col gap-6 px-4 ">
<h2 className="text-3xl font-semibold text-gray-800">
We're here to listen
</h2>
<p className="text-gray-600">
Let's make a change today. Speak confidentially to one of our friendly experts about how we can help to
improve the quality of life for you and your loved ones.
</p>

{/* contact-part */}
<div className="flex flex-col gap-4 text-gray-700">
<h1 className='uppercase font-semibold tracking-widest '>contact us</h1>
<div className="flex items-center gap-3">
<span className="text-yellow-600 text-xl"><Phone/></span>
<span>+977-9852067944</span>
</div>
<div className="flex items-center gap-3">
<span className="text-yellow-600 text-xl"><Mail/></span>
<span>support@newlife.org.np</span>
</div>
<div className="flex items-center gap-3">
<span className="text-yellow-600 text-xl"><Factory/></span>
<span>
 Office: New Life Fellowship <br />
  Roadsesh, Biratnagar, Nepal
</span>
</div>
</div>
</div>

{/* Right Side Form */}
<form className="bg-transparent p-8  flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-700">Your Name *</label>
<input
type="text"
className="border border-gray-300 rounded-md  p-2 placeholder:px-2"
required
/>
</div>

<div className="flex flex-col gap-2">
<label  className="text-sm font-medium text-gray-700">State or Country</label>
<select
className="border border-gray-300 rounded-md  p-2 placeholder:px-2"
>
<option>QLD</option>
<option>QLD</option>
<option>QLD</option>
<option>Other</option>
</select>
</div>

<div className="flex flex-col gap-2">
<label htmlFor="Phone" className="text-sm font-medium text-gray-700">Mobile Phone *</label>
<input
type="tel"
id="Phone"
className="border border-gray-300 rounded-md p-2 placeholder:px-2"
required
/>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-700">Email *</label>
<input
type="email"
className="border border-gray-300 rounded-md  p-2 placeholder:px-2"
required
/>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-gray-700">How can we help? *</label>
<textarea
rows="4"
className="border border-gray-300 rounded-md  p-2 placeholder:px-2 "
required
></textarea>
</div>

<button
type="submit"
className="bg-[#E8CB93] self-start px-5 py-3 cursor-pointer text-white font-semibold rounded-md "
>
Submit
</button>
</form>

        </div>
        </section>
</div>

   
  )
}

export default About

