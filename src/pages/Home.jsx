import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Program from '../components/Program'
import { Factory, Mail, Phone } from 'lucide-react'

const programData = [
  {
    id:1,
    title: "SUBSTANCE ABUSE & ADDICTION",
    description:
      "New Life offers targeted support for individuals struggling with substance abuse and addiction. Our programs are confidential, personalized, and designed for long-term recovery.",
    image: "/expect.jpg", // Replace with your actual path
  },
  {
    id:2,
    title: "MENTAL HEALTH & TRAUMA RECOVERY",
    description:
      "We provide compassionate care for those experiencing depression, anxiety, PTSD, and trauma. Our holistic approach combines therapy, mindfulness, and medical support and wellbegin",
    image: "/mental-health.jpg", // Replace with your actual path
  },
  {
    id:3,
    title: "STRESS, BURNOUT & WELLNESS",
    description:
      "New Life's wellness programs are ideal for individuals suffering from chronic stress, burnout, or auto-immune conditions. Reconnect, recharge, and restore your health with us.",
    image: "/stresshealth.jpg", // Replace with your actual path
  },
];


const Home = () => {
  return (
    // <div className='w-full h-screen bg-gray-500 text-white flex items-center justify-center flex-col gap-3 px-2'>
    //   <h1 className=" text-3xl">Welcome to NewLife Fellowship – Biratnagar, Nepal</h1>
    //      <h3 className='pt-2'>"NewLife Fellowship - Automating Your Habits for Renewing Lives"</h3>
    //       <p className='max-w-[760px]'>At NewLife Fellowship, we believe in second chances, new beginnings, and healing journeys. Located in the heart of Biratnagar, our rehabilitation center is dedicated to helping individuals overcome their struggles with addiction, mental health challenges, and personal losses. Whether you're battling alcohol dependency, anxiety, depression, or facing the pain of loss and heartbreak, we’re here to walk with you every step of the way.</p>
    //       <h3> Take the first step towards your New Life today.</h3>
    // </div>
    <div className="w-full overflow-hidden min-h-screen">
      {/* header section */}
      <motion.div
        className="relative w-full h-[50vh] bg-[url(/office.jpg)] bg-cover bg-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div className="absolute bg-gradient-to-b from-transparent to-white h-[50vh] w-full"></div>
        <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-20 h-full grid grid-cols-1 sm:grid-cols-2">
          <div className='max-w-6xl self-center justify-self-center-safe flex flex-col gap-7'>
          <h1 className=" text-5xl md:text-7xl font-muli font-bold text-white ">
            Begin Your New Life
          </h1>
          <div className='flex items-center gap-3'>
            <button className='px-3 py-2  bg-secondary text-primary rounded-md cursor-pointer'>Our Program</button>
            <button className='bg-secondary px-3 py-2 text-primary rounded-md cursor-pointer' ><Link to='/contact'>Contact Us</Link></button>
          </div>
          </div>
        </div>
      </motion.div>

      {/* what to expect page */}
       <div className="py-8 w-full">
      <div className="max-w-screen-lg mx-auto gap-10 px-4 sm:px-10 flex flex-col md:flex-row md:items-center md:justify-end">
        {/* Left Section - Heading and Button */}
        <div className="text-center justify-self-end-safe lg:w-[40%]">
          <h2 className="text-2xl md:text-3xl font-medium text-[#264645]  text-center">
            A premium,
            private healing
            program.
          </h2>
          <button className="mt-6 bg-[#e7cb95] whitespace-nowrap cursor-pointer text-white text-right px-6 py-3 rounded-md text-sm font-medium shadow-md hover:opacity-90 transition">
            What to Expect
          </button>
        </div>

        {/* Right Section - Description */}
        <div className="text-md text-[#264645] lg:w-[60%] leading-relaxed space-y-4">
          <p>
            New Life is recognized as a trusted sanctuary for those seeking
            comprehensive and compassionate support. Our private residential
            programs are designed to help individuals regain control and find peace.
          </p>
          <p>
            We offer tailored, one-on-one therapeutic care supported by a dedicated
            team of professionals. Using proven, evidence-based approaches, we aim
            to empower lasting personal transformation and well-being.
          </p>
        </div>
      </div>
    </div>

    {/* our program */}
    <div className="w-full  py-10 md:py-20 bg-[#F9F9F9]">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className='w-full flex flex-col items-center justify-center gap-3 pb-5'>
               <h1 className='text-primary font-semibold text-3xl'>Our Program</h1>
               <p className='text-center text-sm'>New Life offers a private residential retreat with tailored programs designed to support individuals facing challenges such as drug and alcohol dependency, depression and anxiety, PTSD and trauma, chronic stress and burnout, eating disorders, autoimmune conditions, and other health-related concerns.</p>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programData.map((program) => (
              <Program key={program.id} programContent={program} />
            ))}
          </div>
        </div>
      </div>
      {/* contact page */}
       <div className="min-h-screen bg-[#F6F2ED] flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">

        {/* we are here to part*/}
        <div className="flex flex-col gap-6">
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
    </div>
      </div>


      
  )
}

export default Home

