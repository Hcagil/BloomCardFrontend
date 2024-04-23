import {React, useState} from 'react'
import Tabs from "./Tabs"
import Headers from "./Headers"
import SaveContact from "./SaveContact"

function Card() {
   
  return (
    /** Card Section*/
       <div className='bg-darkgrey p-6 m-4 mx-auto gap-y-4 max-w-sm items-center'>
        <div className="absolute top-36 left-0 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute left-2/3 w-80 h-80 bg-green rounded-full"></div>
        <div className="overflow-hidden flex flex-col justify-center items-center  bg-white bg-opacity-10 relative shadow-lg backdrop-blur-[40px] rounded-2xl z-2">
        
        
        {/**Header Section*/}
        <div>
          <Headers />
          
          <SaveContact />
        </div>
        {/** Tabs Section */}
        <div className=''>
          <Tabs />
        </div>
        {/** Links Section */}
        <div>
         
        </div>
       </div>
       </div>
  
  );
}

export default Card