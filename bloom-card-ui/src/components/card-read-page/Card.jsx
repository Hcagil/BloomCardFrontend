import {React, useState} from 'react'
import Tabs from "./Tabs"
import Headers from "./Headers"
import SaveContact from "./SaveContact"

function Card() {
   
  return (
    /** Card Section*/
       <div className='p-6 m-4 grid rounded mx-auto justify-center max-w-xl shadow-lg'>
        {/**Header Section*/}
          <Headers />
          
         
       
        {/** Tabs Section */}
      
          <Tabs />
    
        {/** Links Section */}
        <SaveContact />
       </div>
  
  );
}

export default Card