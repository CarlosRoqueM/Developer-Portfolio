import React from 'react'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({postion, company, comnpanyLink, time, address, work}) => {
  const ref = useRef(null); 
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center'>
          <LiIcon  reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:'spring'}} >
                <h3 className='capitalize font-bold text-2xl'>
                    {postion}&nbsp;<a href={comnpanyLink} target='_blank' className='text-primary capitalize'>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}        

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details  postion='Software Engineer' company='Google' comnpanyLink='www.google.com' time='2020-Present' address='MountainView, USA' work='Trabajo bajo la modalidad remota enfocada a la solucion de bugs y la migracion de tecnologias como php a nextjs'/>
            <Details  postion='Software Engineer' company='Google' comnpanyLink='www.google.com' time='2020-Present' address='MountainView, USA' work='Trabajo bajo la modalidad remota enfocada a la solucion de bugs y la migracion de tecnologias como php a nextjs'/>
            <Details  postion='Software Engineer' company='Google' comnpanyLink='www.google.com' time='2020-Present' address='MountainView, USA' work='Trabajo bajo la modalidad remota enfocada a la solucion de bugs y la migracion de tecnologias como php a nextjs'/>
            <Details  postion='Software Engineer' company='Google' comnpanyLink='www.google.com' time='2020-Present' address='MountainView, USA' work='Trabajo bajo la modalidad remota enfocada a la solucion de bugs y la migracion de tecnologias como php a nextjs'/>
            <Details  postion='Software Engineer' company='Google' comnpanyLink='www.google.com' time='2020-Present' address='MountainView, USA' work='Trabajo bajo la modalidad remota enfocada a la solucion de bugs y la migracion de tecnologias como php a nextjs'/>
        </ul>
      </div>
    </div>
  )
}

export default Experience
