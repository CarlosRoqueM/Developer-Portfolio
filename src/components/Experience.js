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
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experiencia</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details  postion='Practicante Preprofesional de Desarrollo Web' company='Inelpamin S.A.C' comnpanyLink='' time='07/2023 - 08/2023' address='Híbrido - Huancayo, Perú' work='Actualice el contenido del sitio web modificando texto, imágenes, videos y enlaces para reflejar la información más reciente de la empresa, optimizando su rendimiento mediante la reducción de tiempos de carga con técnicas como la optimización de imágenes, el uso de caché y la minimización de archivos CSS y JavaScript, además de configurar y ejecutar copias de seguridad periódicas para garantizar la integridad de los datos.'/>
            <Details  postion='Practicante Preprofesional de Desarrollo Web' company='NeonHouseLed S.A.C' comnpanyLink='www.google.com' time='10/2024 - 01/2025' address='Remoto - Lima, Perú' work='Identifique y correji errores en scripts PHP para garantizar el correcto funcionamiento del sitio web, implemente nuevas funcionalidades dinámicas que mejoren la experiencia del usuario y se alineen con los objetivos de decoración de interiores, optimice el rendimiento con técnicas como la optimización de imágenes, uso de caché y minimización de archivos CSS y JavaScript, actualice el contenido del sitio web para reflejar la información más reciente de la empresa y ejecute copias de seguridad periódicas para asegurar la integridad de los datos, además de migrar tecnologías de PHP a Next.js para una mejor eficiencia y modernización del desarrollo.'/>
        </ul>
      </div>
    </div>
  )
}

export default Experience
