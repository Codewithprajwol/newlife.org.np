import React from 'react'

const SymptomCard = ({symptom}) => {

    const {image, topic, description} = symptom;
  return (
    <div className='w-full flex item-center justify-center gap-5'>
        <div className='w-[100px] h-[100px] overflow-hidden rounded-md'>
            <img className='w-full h-full object-cover object-center' src={image} alt={topic} />
        </div>
        <div className='w-full flex flex-col gap-2 items-start justify-start'>
             <p className='uppercase text-sm text-primary  tracking-wider'>{topic}</p>
             <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}

export default SymptomCard