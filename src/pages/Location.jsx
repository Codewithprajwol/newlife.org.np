import {motion} from 'framer-motion'
import { Factory, LocateIcon, LocationEdit, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
function Location() {

  return (
    <div className='w-full overflow-hidden'>
    <motion.div className="relative w-full h-64 bg-[url(/counseling.jpg)] bg-cover bg-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} >
      <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
      <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid gap-4 grid-rows-4">
        <h1 className='text-2xl row-span-3 md:text-5xl font-bold  text-white flex items-end justify-center'>Get Help Now</h1>
        <div className='text-md font-muli text-primary self-start justify-self-center'><Link className='hover:underline-offset-2 hover:underline' to="/home">Home</Link> | Get Help Now</div>
      </div>
    </motion.div>
    {/* contact us section */}
    <section className="w-full  px-4 sm:px-6 lg:px-8 py-10 sm:pt-20">
        <div className="max-w-screen-lg mx-auto w-full grid md:grid-cols-2 gap-12 ">
          {/* we are here to part*/}
          <div className="flex flex-col gap-6  ">
            <h2 className="text-3xl font-semibold text-gray-800">
              We're here to listen
            </h2>
            <p className="text-gray-600">
              Let's make a change today. Speak confidentially to one of our
              friendly experts about how we can help to improve the quality of
              life for you and your loved ones.
            </p>

            {/* contact-part */}
            <div className="flex flex-col gap-4 text-gray-700">
              <h1 className="uppercase font-semibold tracking-widest ">
                contact us
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-yellow-600 text-xl">
                  <Phone />
                </span>
                <span>+977-9852067944</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-600 text-xl">
                  <Mail />
                </span>
                <span>support@newlife.org.np</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-600 text-xl">
                  <Factory />
                </span>
                <span>
                  Office: New Life Fellowship <br />
                  Roadsesh, Biratnagar, Nepal
                </span>
              </div>
            </div>

            {/* image part */}
            <div className='w-full rounded-md overflow-hidden'>
              <img src="/companybuilding.jpg" alt="Description" className="w-full h-auto" />
            </div>
          </div>

          {/* Right Side Form */}
          <form className="bg-transparent p-8  flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Your Name *
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md  p-2 placeholder:px-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                State or Country
              </label>
              <select className="border border-gray-300 rounded-md  p-2 placeholder:px-2">
                <option>QLD</option>
                <option>QLD</option>
                <option>QLD</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="Phone"
                className="text-sm font-medium text-gray-700"
              >
                Mobile Phone *
              </label>
              <input
                type="tel"
                id="Phone"
                className="border border-gray-300 rounded-md p-2 placeholder:px-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded-md  p-2 placeholder:px-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                How can we help? *
              </label>
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

      {/* locatoin area */}
      <section className='w-full max-w-screen-lg mx-auto px-4 sm:px-2 lg:px-8 py-10 flex items-center justify-center flex-col gap-4'>
                <h2 className='text-primary text-xl md:text-2xl capitalize flex font-semibold gap-2'>Our location <span className='flex items-center'><LocationEdit/></span> </h2>
                 <hr />
    <div className='w-full rounded-md overflow-hidden'>

    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3572.3236210211503!2d87.27530867523292!3d26.44529539458865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1746516637547!5m2!1sen!2snp" width='100%' height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
    </div>
  );
}

export default Location;
