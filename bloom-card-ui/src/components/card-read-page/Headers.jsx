import React from 'react'
import Tabs from "./Tabs"
import Name from "./Name"

export default function Header() {
  return (
    <>
        <div className='container items-center flex flex-row justify-between space-x-8'>
        <div className='flex items-center'>
            <img
                className="flex ml-5 w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&dpr=2&s=none"
                />
        </div>
        <Name />
        </div>
        
    </>
  )
}
