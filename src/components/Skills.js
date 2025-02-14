import React from 'react'
import {motion} from 'framer-motion'
import { HTMLIcon } from './Icons'


const Skill = ({ name, x, y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 lg:text-sm md:py-1.5 md:px-3 md:text-xs xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' 
    whileHover={{scale: 1.1}} 
    initial={{x:0, y:0 }} 
    whileInView={{x:x, y:y }} 
    transition={{duration: 1.5}}
    whileTap={{scale: 0.9}}
    viewport={{once: true}}>
    
      {/* <snap className='p-1'>{}</snap> */}
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Habilidades</h2>
        <div className='w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark rounded-full lg:h-[80vw] sm:h-[60vw] xs:h-[50vw] lg:bg-circularLightLg lg:dark:bg-circularDarkLg'>
          <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:py-6 lg:p-4 md:p-4 xs:p-2 lg:text-sm' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            Web y Movil
          </motion.div>
          <Skill name='HTML' x='-18vw' y='0vw'/>
          <Skill name='CSS' x='-30vw' y='-8vw'/>
          <Skill name='NextJS' x='-30vw' y='8vw'/>
          <Skill name='NodeJS' x='30vw' y='-8vw'/>
          <Skill name='Firebase' x='30vw' y='8vw'/>
          <Skill name='JavaScript' x='-20vw' y='-18vw'/>
          <Skill name='Figma' x='0vw' y='12vw'/>
          <Skill name='Flutter' x='18vw' y='-18vw'/>
          <Skill name='Swift' x='15vw' y='18vw'/>
          <Skill name='PHP' x='-15vw' y='18vw'/>
          <Skill name='SwiftUI' x='18vw' y='0vw'/>
          <Skill name='GitHub' x='0vw' y='-12vw'/>
        </div>
    </>
  )
}

export default Skills
