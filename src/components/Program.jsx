import React from 'react'

const Program = ({programContent}) => {
  return (
    <div className='w-full rounded-lg flex flex-col items-center text-center justify-center gap-3 shadow-lg p-2 pb-5'>
      <div className='w-full aspect-auto overflow-hidden'>
        <img src={programContent.image} alt='program' className='w-full h-64 object-cover rounded-lg' />
      </div>
       <h1 className='text-primary text-xl tracking-wider uppercase'> {programContent.title}</h1>
      <p className=' text-gray-600 text-sm'>{programContent.description}</p>
       <button className='bg-[#E8CC96] px-4 py-2 rounded-md hover:bg-white hover:transition-all hover:duration-500 cursor-pointer capitalize'>more information</button>
    </div>
  )
}

export default Program