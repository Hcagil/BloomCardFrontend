import React from 'react'
import ImageUpload from './ImageUpload'
import Name from '../components/card-read-page/Name'
import HomePageName from './HomePageName'


function Homepage() {
  return (
    <>
    <div className="p-6 mt-5 flex flex-row rounded gap-y-4 mx-auto max-w-xl shadow-lg items-center">
        <div className='flex flex-col flex-1'>
        <ImageUpload />
        </div>
        <div className='flex mr-10'>
        <HomePageName/>
  
        </div>
    </div>
 
    </>
  )
}

export default Homepage