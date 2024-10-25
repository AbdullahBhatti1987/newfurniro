import React from 'react'

export default function Button({text, disabled, className= "bg-white, text-gray-400 " }) {
  return (
    <button disabled={disabled} className={`text-sm border border-black rounded-xl py-2 min-w-24 font-bold active:shadow-sm shadow-lg  ${className}`}>{text}</button>
  )
}
