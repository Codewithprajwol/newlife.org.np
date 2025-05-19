import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import SymptomCard from '../../components/SymptomCard'
import RemedyCard from '../../components/RemedyCard'

const symptoms=[
  {
    image: '/symptom1.jpg',
    topic: 'Increased Tolerance',
    description: 'Needing to drink more to achieve the same effects.'
  },
  {
    image: '/symptom2.jpg',
    topic: 'Withdrawal Symptoms',
    description: 'Experiencing nausea, sweating, or shaking when not drinking.'
  },
  {
    image: '/symptom3.jpg',
    topic: 'Loss of Control',
    description: 'Inability to limit drinking or stop once started.'
  },
  {
    image: '/symptom4.jpg',
    topic: 'Neglecting Responsibilities',
    description: 'Failing to fulfill work, school, or home obligations.'
  },
  {
    image: '/symptom5.jpg',
    topic: 'Continued Use Despite Consequences',
    description: 'Drinking despite knowing it causes problems.'
  }
]

const AlcoholPage = () => {
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
          {/* <div className='self-end justify-self-center flex flex-col gap-5'> */}
            <h1 className=" md:text-5xl font-muli text-primary row-start-2 self-end ">
             Alcohol
          </h1>
          <p className='row-start-3 text-md col-start-1 col-end-3'>At NewLife, we recognize that alcohol addiction is a serious emotional and physical dependence. Many in Nepal turn to alcohol to cope with grief, stress, or pressure. Low self-esteem and difficult circumstances can increase this risk. We are here to support the journey toward recovery and a new beginning.</p>
          </div>
        {/* </div> */}
      </motion.div>
      {/* overview Section */}
      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-30 md:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_2fr]  gap-8 md:gap-8'>
         <h1 className='text-primary text-3xl justify-self-center'>Overview</h1>
            {/* image div */}
            <div className='w-full flex flex-col items-center justify-start gap-3 px-4 sm:px-6 text-md'>
                <p>At NewLife, we offer a safe, supportive, and solution-focused recovery program to help individuals break free from alcohol dependence. Our approach is personalized to each person's unique challenges and focuses on identifying the emotional and situational triggers behind addiction.</p>
                <p>
                    We keep our care focused and personal, ensuring that every individual receives attention, guidance, and respect throughout their healing journey. Whether you're seeking help for yourself or a loved one, we are here to walk with you toward a new beginning.
                </p>
                <h1 className='text-primary py-5 text-3xl'>Impact Of Untreated Alcohol Addiction</h1>
                <p>When left untreated, alcohol addiction can seriously affect both physical and mental health. It may lead to job loss, financial struggles, poor hygiene, broken relationships, and even involvement in legal issues like drunk driving or violence.</p>
                <p>In the long term, untreated alcohol abuse can cause disability, long-term illness, and even premature death. **Getting timely support is essential — and NewLife is here to help.**</p>
                <button className='bg-primary text-white px-4 py-2 rounded-md self-start mt-5 cursor-pointer'><Link to="/contact">Contact Us</Link></button>
            </div>

        </div>
      </div>
        {/* symptoms of Alcohol Addiction */}
        <div className='w-full bg-secondary-light'>
        <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 md:py-20'>
                <div className='w-full flex flex-col gap-12 justify-start items-center'>
                    <h1 className='text-primary text-3xl'>Symptoms of Alcohol Addiction</h1>
                    <p className='text-md'>Alcohol addiction can deeply affect both individuals and their families. It often comes with a range of emotional, physical, and social symptoms.</p>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {symptoms.map((symptom, index) =><SymptomCard key={index} symptom={symptom}/>)}
                    </div>
                </div>
            </div>
        </div>
        {/* our approach to treat Alcohol Addiction */}
        <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10  space-y-8'>
          <div className='w-full py-2 space-y-5 sm:text-center pb-7'>
            <h1 className='text-primary text-3xl'>Our Approach To Treat Alcohol Addiction</h1>
            <p className='text-md'>At NewLife, we understand that alcohol addiction is a complex issue that requires a comprehensive and compassionate approach. Our treatment program is designed to address the physical, emotional, and psychological aspects of addiction, ensuring a holistic recovery experience.</p>
            <p className='text-md'>We offer a range of evidence-based therapies and support systems tailored to each individual's needs. Our team of experienced professionals is dedicated to providing the highest level of care, helping individuals regain control of their lives and build a brighter future.</p>    
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
              {remedy.map((rem,index)=><RemedyCard key={index} title={rem.title} description={rem.description} img={rem.img}/>)}
          </div>

        </div>
      </div>
  )
}

export default AlcoholPage

const remedy = [
  {
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to keep your body hydrated and support overall health.",
    img: "/insta1.jpg"
  },
  {
    title: "Regular Exercise",
    description: "Engage in at least 30 minutes of moderate physical activity most days of the week.",
    img: "/insta2.jpg"
  },
  {
    title: "Balanced Diet",
    description: "Eat a variety of fruits, vegetables, whole grains, and lean proteins for optimal nutrition.",
    img: "/insta3.jpg"
  }
]