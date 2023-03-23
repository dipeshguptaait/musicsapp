import { React, useState } from 'react';
import { motion } from "framer-motion";
import ReactVisibilitySensor from 'react-visibility-sensor';
function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
    >
      <div className='feature flex 
    items-center justify-center flex-col relative text-center mx-4 my-12'>
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className='icon bg-[#081730] rounded-2xl p-4'
        >
          <img src={require(`../img/${icon}.png`)}
            alt=''
            className='w-[3rem]'
          />
        </motion.div>
        <span className='mt-5'>{title}</span>
        <span className='text-[#707070] mt-4'>lorem epsum dhuei druwd3 fewcryu feygub efy4u wei3 fhu feu fuir fuyht deuih fri dweu gierrbrw fewygrrb.</span>

        <span className='text-[#E600ff] underline mt-[3rem] hover:cursor-pointer'>Learn More</span>
      </div>

    </ReactVisibilitySensor>

  )
}

export default Feature
