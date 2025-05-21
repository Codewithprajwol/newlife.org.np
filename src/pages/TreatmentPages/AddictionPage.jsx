import React from 'react'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import SymptomCard from '../../components/SymptomCard'
import RemedyCard from '../../components/RemedyCard'
import { dataMap } from '../../treatmentData/dataMap'

const AddictionPage = () => {
    const  {type}  = useParams();
  const data = dataMap[type];

    if (!data) return <div>Not Found</div>  

  return (
    <div className="w-full overflow-hidden min-h-screen">
      {/* header section */}
      <motion.div
        className="relative w-full h-64 bg-[url(/alcohol.jpg)] bg-cover  bg-[position:70%_30%] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
        <div className="relative z-20 w-full max-w-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-rows-4 grid-cols-3 gap-2">
          <h1 className=" md:text-4xl whitespace-nowrap font-muli text-primary row-start-2 self-end ">{data.title}</h1>
          <p className='row-start-3 text-md col-start-1 col-end-3'>{data.headerDescription}</p>
        </div>
      </motion.div>
      {/* overview Section */}
      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-30 md:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_2fr]  gap-8 md:gap-8'>
         <h1 className='text-primary text-3xl justify-self-center'>Overview</h1>
            {/* image div */}
            <div className='w-full flex flex-col items-center justify-start gap-3 px-4 sm:px-6 text-md'>
                <p>{data.overview1}</p>
                <p>{data.overview2}</p>
                <h1 className='text-primary py-5 text-3xl'>{data.impactTitle}</h1>
                <p>{data.impactDescription1}</p>
                <p>{data.impactDescription2}</p>
                <button className='bg-primary text-white px-4 py-2 rounded-md self-start mt-5 cursor-pointer'><Link to="/contact">Contact Us</Link></button>
            </div>
        </div>
      </div>
      {/* symptoms section */}
      <div className='w-full bg-secondary-light'>
        <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 md:py-20'>
          <div className='w-full flex flex-col gap-12 justify-start items-center'>
            <h1 className='text-primary text-3xl'>{data.symptomsTitle}</h1>
            <p className='text-md'>{data.symptomsDescription}</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {data.symptoms.map((symptom, index) => <SymptomCard key={index} symptom={symptom}/>)}
            </div>
          </div>
        </div>
      </div>
      {/* our approach section */}
      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10  space-y-8'>
        <div className='w-full py-2 space-y-5 sm:text-center pb-7'>
          <h1 className='text-primary text-3xl'>{data.approachTitle}</h1>
          <p className='text-md'>{data.approachDescription1}</p>
          <p className='text-md'>{data.approachDescription2}</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
          {data.remedies.map((rem, index) => <RemedyCard key={index} title={rem.title} description={rem.description} img={rem.img}/>)}
        </div>
      </div>
    </div>
  )
}

export default AddictionPage