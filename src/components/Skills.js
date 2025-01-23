import React from 'react'
import {motion} from 'framer-motion'
import { HTMLIcon } from './Icons'


const Skill = ({ name, x, y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute' 
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
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center bg-circularLight'>
          <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
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
