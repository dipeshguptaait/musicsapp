import { React, useState } from 'react'
import DownloadAds from './DownloadAds'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'
function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false)
 
 const bg={
       true:{
           left:'7rem',
       },
       false:{
            left:'19rem'
       }
 }
 const musicPlayer = {
  true: {
    left: "295px",
  },
  false: {
    left: "235px",
  },
};
const rect = {
  true: {
    left: "11rem",
  },
  false: {
    left: "13rem",
  },
}
const heart = {
  true: {
    left: "9rem",
  },
  false: {
    left: "12.5rem",
  },
};
 
  return (
    <ReactVisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)} minTopValue={300}>

      <div className='wrapper bg-[#081730] flex items-center justify-between
    px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]'>
        {/* left side */}
        <div className='headings flex flex-col items-start justify-center 
     h-[100%] text-[3rem]'>
          <span>Experience the</span>{" "}
          <span>
            <b>Best Quality Music</b>
          </span>
          <span className='text-[15px] text-[#525D6E]'>
            hey wohooo i love the test of this music
            <br />
            i will play this once again.
          </span>
          {/* downloadAds */}
          <div>
            <span className='text-[13px]'>Download now on IOS ans Android</span>
            <DownloadAds />
          </div>

        </div>
        {/* right side */}
        <div className='images relative w-[50%]'>
          <motion.img
           variants={bg}
           animate={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require('../img/backgraphics.png')}
            alt=''
            className='absolute top-[-8rem] left-[19rem]'
          />

          <img
            src={require('../img/p 1.png')}
            alt=''
            className='absolute top-[-15rem] h-[34rem] left-[13rem]'
          />
          <motion.img
              variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require('../img/p 2.png')}
            alt=''
            className='absolute top-[94px] left-[235px] w-[175px]'
          />
            <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require('../img/p 3.png')}
            alt=''
            className='absolute top-[12rem] left-[13rem] w-[5rem]'
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={require('../img/p 4.png')}
            alt=''
            className='absolute top-[12rem] left-[12.5rem] w-[5rem]'
          />

        </div>



      </div>



    </ReactVisibilitySensor>


  )
}

export default Hero
