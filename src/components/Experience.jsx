import React from 'react'
import Feature from './Feature'

function Experience() {
  return (
    <div className='experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] 
    relative z-[2] rounded-b-[5rem] '>
       {/* tiled icon */}
      <img 
        src={require('../img/Path_318.png')}
        alt=''
        className='w-[5rem]'
      />
         {/* heading */}
       <div className='headline mt-7 flex flex-col items-center text-[2rem]'>
          <span>An Amazing App Can Change Your Daily Life</span>
        
          <span>
             <b>Music Experience</b>
          </span>
       </div>
         {/* Features */}
         <div className='feature flex items-center justify-around mt-[6rem] w-[100%]'>
          <Feature icon='Group_2' title='For Live Music' />
          <Feature icon='music icon' title='For Daily Music' />
          <Feature icon='Group_4' title='For Artists' />
          
         </div>
    </div>
     
  )
}

export default Experience
