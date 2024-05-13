import React from 'react'
import ImageUpload from './ImageUpload'
import Name from '../components/card-read-page/Name'


function Homepage() {
  return (
    <>
    <div className="p-6 mt-5 flex bg-[#c32b98] flex-row rounded gap-y-4 mx-auto max-w-xl shadow-lg items-center">
        <div className='flex flex-col flex-1'>
        <ImageUpload />
        </div>
        <div className='flex mr-10'>
        <Name/>
        
        </div>
    </div>
 
    </>
  )
}

export default Homepage