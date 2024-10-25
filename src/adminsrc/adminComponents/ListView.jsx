import React from 'react'

export default function ListView() {
  return (
    <div className='flex flex-row justify-between items-center gap-2'>
        <div className="w-1/12"><input type="checkbox" name="sleect" id="pselect" /></div>
        <div className="w-1/12"><img src="" alt="" className='rounded-lg' /></div>
        <div className="w-4/12 title flex flex-col justify-start items-center gap-2">
            <p className="">{title}</p>
            <p className="">{dimensions}</p>
        </div>
        <div className="w-1/12"><p>$<span>{price}</span></p></div>
        <div className="w-1/12 stock">
            <div className="stock"></div>
        </div>
        <div className="w-1/12"></div>
        <div className="w-1/12"></div>
        <div className="w-2/12"></div>
    </div>
  )
}
