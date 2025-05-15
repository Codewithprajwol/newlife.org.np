import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'

const Program = () => {
  return (
//     <div className='w-full min-h-screen bg-gray-500 text-white flex items-center justify-start flex-col gap-3 p-4'>
//         {/* <Program title={'Healing Tailored for Every Journey'} description={'At NewLife Fellowship, we offer a range of specialized programs designed to meet you where you are. Whether your struggles are with substances, mental health challenges, or emotional hardships, our programs provide structured support for lasting change.'}/>
//         <Program title={'Alcohol and Illicit Drugs'} description={'Break free from addiction with professional medical supervision, therapy, group support, and lifestyle rebuilding. Our alcohol and drug recovery program focuses on detoxification, emotional healing, and relapse prevention.'}/>
//         <Program title={'Depression, Anxiety, OCD, Bipolar Disorder'} description={'Struggling with mental health can feel isolating — but you are not alone. We offer therapy sessions, medication management (where needed), coping strategies, and emotional support tailored to each diagnosis.'}/>
//         <Program title={'Eating Disorders'} description={'Our eating disorder program focuses on helping individuals build a healthy relationship with food and body image through counseling, nutritional education, and emotional support.'}/>
//         <Program title={'Digital Detox '} description={'If constant digital exposure is affecting your mental health and relationships, our digital detox program helps you reset, reconnect, and regain control over your life.'}/>
//         <Program title={'Loss of Family Members, Failure, Relationship Breakups'} description={'Grief, failure, and heartbreak can leave deep emotional scars. Our life crisis support programs offer counseling, emotional healing therapies, and community support to help you find hope and purpose again.'}/> */}

// <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
//         <h1 className='text-2xl'>Healing Tailored for Every Journey</h1>
//         <p>At NewLife Fellowship, we offer a range of specialized programs designed to meet you where you are. Whether your struggles are with substances, mental health challenges, or emotional hardships, our programs provide structured support for lasting change.</p>
//     </div>

// <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
//         <h1 className='text-2xl'>Alcohol and Illicit Drugs</h1>
//         <p> Break free from addiction with professional medical supervision, therapy, group support, and lifestyle rebuilding. Our alcohol and drug recovery program focuses on detoxification, emotional healing, and relapse prevention.</p>
//     </div>
// <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
//         <h1 className='text-2xl'>Depression, Anxiety, OCD, Bipolar Disorder</h1>
//         <p>Struggling with mental health can feel isolating — but you are not alone. We offer therapy sessions, medication management (where needed), coping strategies, and emotional support tailored to each diagnosis.
//         </p>
//     </div>
// <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
//         <h1 className='text-2xl'>Eating Disorders</h1>
//         <p>Our eating disorder program focuses on helping individuals build a healthy relationship with food and body image through counseling, nutritional education, and emotional support.
//         </p>
//     </div>
         
// <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
//         <h1 className='text-2xl'>Digital Detox</h1>
//         <p>If constant digital exposure is affecting your mental health and relationships, our digital detox program helps you reset, reconnect, and regain control over your life.
//         </p>
//     </div>
// <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
//         <h1 className='text-2xl'>Loss of Family Members, Failure, Relationship Breakups</h1>
//         <p>Grief, failure, and heartbreak can leave deep emotional scars. Our life crisis support programs offer counseling, emotional healing therapies, and community support to help you find hope and purpose again.
//         </p>
//     </div>
         
         
//     </div>
     <div className="w-full overflow-hidden min-h-screen">
      {/* header section */}
      <motion.div
        className="relative w-full h-64 bg-[url(/ProgramIntro.jpg)] bg-cover  bg-[position:70%_30%] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <div className="absolute bg-gradient-to-b from-transparent to-white h-64 w-full"></div>
        <div className="relative z-20 w-full w-max-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-full grid grid-cols-2">
          <div className='self-end justify-self-start flex flex-col gap-5'>
            <h1 className=" md:text-6xl font-muli text-primary text-center ">
              Our Programs
          </h1>
          <p className='text-md text-left'>NewLife is Nepal’s leading residential retreat. Our tailored programs are created to improve the quality of life for each of our guests and for the people who care about them.</p>
          </div>
        </div>
      </motion.div>
      {/*program section */}
       <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 lg:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            <div className=' flex items-center md:items-start justify-center flex-col gap-3 sm:px-10 md:px-20 lg:px-32'> 
                <h1 className='text-primary text-xl'>SUBSTANCE ABUSE & ADDICTION</h1>
                <p className='text-md  pt-5'>New Life offers targeted support for individuals struggling with substance abuse and addiction. Our programs are confidential, personalized, and designed for long-term recovery.</p>
                <button className='px-3 py-2 bg-secondary text-primary rounded-md  '><Link to='/team'>More Information</Link></button>
            </div>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/substanceAbuse.jpg'} className='w-full h-full object-cover ' alt="Substance abuse & addiction" />
            </div>

        </div>
      </div>
      {/* another program section */}
     <div className='w-full overflow-hidden bg-[#FEF5EF] lg:py-20'>
         <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/mental-health.jpg'} className='w-full h-full object-cover ' alt="Mental health & trauma recovery" />
            </div>
            {/* text div */}
            <div className=' flex items-center md:items-start justify-center flex-col gap-3 sm:px-10 md:px-20 lg:px-32'> 
                <h1 className='text-primary text-xl'>MENTAL HEALTH & TRAUMA RECOVERY</h1>
                <p className='text-md  pt-5'>We provide compassionate care for those experiencing depression, anxiety, PTSD, and trauma. Our holistic approach combines therapy, mindfulness, and medical support and wellbegin</p>
                <button className='px-3 py-2 bg-secondary text-primary rounded-md  '><Link to='/team'>More Information</Link></button>
            </div>
        </div>
      </div>
     </div>
        {/* another program section */}
         <div className='max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 lg:py-20'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            <div className=' flex items-center md:items-start justify-center flex-col gap-3 sm:px-10 md:px-20 lg:px-32'> 
                <h1 className='text-primary text-xl'>STRESS, BURNOUT & WELLNESS</h1>
                <p className='text-md  pt-5'>New Life's wellness programs are ideal for individuals suffering from chronic stress, burnout, or auto-immune conditions. Reconnect, recharge, and restore your health with us.</p>
                <button className='px-3 py-2 bg-secondary text-primary rounded-md  '><Link to='/team'>More Information</Link></button>
            </div>
            {/* image div */}
            <div className='w-full h-auto overflow-hidden rounded-md '>
              <img src={'/depression.jpg'} className='w-full h-full object-cover ' alt="Depression & wellness" />
            </div>

        </div>
      </div>
      {/* contact area */}
      <Contact/>
      </div>
  )
}

export default Program


// # Programs  
// **Healing Tailored for Every Journey**  
// At NewLife Fellowship, we offer a range of specialized programs designed to meet you where you are. Whether your struggles are with substances, mental health challenges, or emotional hardships, our programs provide structured support for lasting change.
 
// ## Addiction Recovery  
// **Alcohol and Illicit Drugs**  
// Break free from addiction with professional medical supervision, therapy, group support, and lifestyle rebuilding. Our alcohol and drug recovery program focuses on detoxification, emotional healing, and relapse prevention.
 
// ## Mental Health Support  
// **Depression, Anxiety, OCD, Bipolar Disorder**  
// Struggling with mental health can feel isolating — but you are not alone. We offer therapy sessions, medication management (where needed), coping strategies, and emotional support tailored to each diagnosis.
 
// ## Specialized Programs  
// **Eating Disorders**  
// Our eating disorder program focuses on helping individuals build a healthy relationship with food and body image through counseling, nutritional education, and emotional support.
 
// **Digital Detox**  
// If constant digital exposure is affecting your mental health and relationships, our digital detox program helps you reset, reconnect, and regain control over your life.
 
// ## Life Crisis Support  
// **Loss of Family Members, Failure, Relationship Breakups**  
// Grief, failure, and heartbreak can leave deep emotional scars. Our life crisis support programs offer counseling, emotional healing therapies, and community support to help you find hope and purpose again.
 
// ---