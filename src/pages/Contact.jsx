
import { Factory, Mail, Phone } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const Contact = () => {
  return (
    <div className='w-full overflow-hidden'>
      

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
  );

}

export default Contact


 