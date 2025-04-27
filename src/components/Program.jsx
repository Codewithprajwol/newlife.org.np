import React from 'react'

const Program = ({title,description}) => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col max-w-[760px]'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Program