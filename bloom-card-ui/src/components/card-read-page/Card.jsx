import {React, useState} from 'react'
import Tabs from "./Tabs"
import Headers from "./Headers"
import SaveContact from "./SaveContact"

function Card() {
   
  return (
    /** Card Section*/
       <div className='bg-darkgrey p-6 m-4 rounded mx-auto gap-y-4 max-w-sm shadow-xl items-center'>
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
  
  );
}

export default Card