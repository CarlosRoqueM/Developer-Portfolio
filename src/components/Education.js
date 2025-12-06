import React from 'react'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, placeLink, info}) => {
  const ref = useRef(null); 
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
          <LiIcon  reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type:'spring'}} >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {type}
                </h3>
                <div
                    className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'
                >
                    {time} |&nbsp;  
                  <a className='capitalize font-medium text-primary cursor-pointer' href={placeLink} target='_blank'>
                      {place}
                  </a>
                </div>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}        

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Educación</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details type='Diseño y Desarrollo de Software' time='2021 - 2024' placeLink={"https://www.tecsup.edu.pe"} place='Tecsup' info='Formación en desarrollo de software con enfoque en diseño, programación y gestión de aplicaciones. Adquisición de conocimientos en bases de datos, desarrollo web y móvil, optimización de código y metodologías ágiles.'/>
            <Details type='Ingenieria de Sistemas' time='2025 - Actualidad' placeLink='https://www.ue.edu.pe/' place='Universidad Esan' info='Formación en Ingeniería de Sistemas con enfoque en análisis, diseño y gestión de soluciones tecnológicas. Adquisición de conocimientos en arquitectura de sistemas, desarrollo de software, bases de datos, infraestructura TI y metodologías ágiles para la optimización de procesos y aplicaciones.'/>
            <Details type='Desarrollador IOS' time='2025 - Actualidad' placeLink={"https://www.coursera.org"} place='Coursea' info='Capacitación en desarrollo de aplicaciones para iOS utilizando Swift y SwiftUI, con enfoque en arquitectura de software, diseño de interfaces intuitivas y optimización de rendimiento. Implementación de patrones de diseño, consumo de APIs y gestión de almacenamiento local y en la nube.'/>
        </ul>
      </div>
    </div>
  )
}

export default Education

