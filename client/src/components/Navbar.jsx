import React from 'react'
import { CgShortcut } from "react-icons/cg";


function Navbar() {
  return (
    <div className='w-full h-[4rem] bg-black text-white flex p-3'>
      <h1 className='text-3xl font-semibold text-white'>Briefify</h1>
      <CgShortcut className='text-4xl'/>
    </div>
  )
}

export default Navbar