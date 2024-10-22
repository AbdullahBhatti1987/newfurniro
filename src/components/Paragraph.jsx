import React from 'react'

function Paragraph({text, className}) {
  return (
    <div className='w-full'>
        <h1 className={`text-xl text-center ${className}`}>{text}</h1>
    </div>
  )
}

export default Paragraph

