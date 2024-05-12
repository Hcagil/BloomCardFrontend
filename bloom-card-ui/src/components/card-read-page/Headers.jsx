import React from 'react'
import Tabs from "./Tabs"
import ImageUpload from '../ImageUpload'
import Name from './Name'

export default function Header() {
  return (
    <>
       <div className="flex flex-row items-center">
        
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
