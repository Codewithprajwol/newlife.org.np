import React from 'react'

const RemedyCard = ({img,title,description}) => {
  return (
    <div className='flex flex-col item-center justify-start gap-2 overflow-hidden rounded-md px-3'>
                <div className='w-full h-48 overflow-hidden rounded-md'>
                  <img className='w-full h-full object-cover' src={img} alt="remedy 1"/>
                </div>
                    <div className='flex flex-col items-center gap-2 justify-start'>
                      <h1 className='uppercase text-xl text-primary'>{title}</h1>
                       <p className='text-sm text-center'>{description}</p>
                    </div>
              </div>
  )
}

export default RemedyCard