import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../utilities/FAQ'
import { Link } from 'react-router-dom'

const FAQs = () => {
  const [openDetail, setOpenDetail] = useState(null)

  const toggleDetail = (index) => {
    setOpenDetail(openDetail === index ? null : index)
  }

  return (
    <div className='w-full overflow-hidden'>
      <motion.div className="relative w-full h-64 bg-[url(/water.jpg)] bg-cover bg-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }} >
        <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
        <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-cols-2">
          <h1 className='text-3xl md:text-4xl font-muli text-primary self-end justify-self-center'>FAQs</h1>
        </div>
      </motion.div>
      {/* actual faq section */}
      <section className='w-full max-w-screen-md mx-auto px-4 sm:px-2'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-center sm:text-2xl tracking-wide text-primary'>Here are some of our most frequently asked questions.</h1>
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleDetail(index)}
              className="flex flex-col gap-2 bg-[#D5ECEB] px-2 py-3 md:py-5 rounded-md cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-sm sm:text-md font-semibold">{faq.question}</h1>
                <ChevronDown
                  className={`transition-transform duration-300 ${openDetail === index ? "rotate-180" : ""}`}
                />
              </div>

              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{
                  opacity: openDetail === index ? 1 : 0,
                  maxHeight: openDetail === index ? '1000px' : 0
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  maxHeight: { duration: 2, ease: "linear" } // Use easing for a smoother transition
                }}
              >
                {openDetail === index && (
                  <p className="text-sm p-2">{faq.answer}</p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      {/* image section */}
      <section className='w-full max-w-screen-xl mx-auto px-4 sm:px-2 lg:px-8  py-10'>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <img src="/pic1.jpg" alt="Description 1" className="w-full h-auto rounded-md shadow-md" />
    <img src="/pic2.jpg" alt="Description 2" className="w-full h-auto rounded-md shadow-md" />
    <img src="/pic3.jpg" alt="Description 3" className="w-full h-auto rounded-md shadow-md" />
  </div>
  {/* contact section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-center sm:text-2xl tracking-widest text-primary'>Have more questions?</h1>
              <p className='text-sm text-center'>If you have any other questions, please feel free to reach out to us.</p>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-[#E7CB93] text-black px-4 py-2 rounded cursor-pointer'>
                <Link to="/contact">Contact Us</Link>
              </button>
            </div>
          </div>
      </section>
     

    </div>
  )
}

export default FAQs
