import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/fotoPerfil.jpeg' 
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnmimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref);

  useEffect(() => {
    if(isInView){
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
      <Head>
        <title>Carlos Roque | Sobre mi</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Sobre Mi' className='mb-16'/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 '>Biography</h2>
              <p className='font-medium'>
                Hola, soy CodeBucks, desarrollador web y diseñador UI/UX apasionado por crear experiencias digitales bonitas, funcionales y centradas en el usuario. Con 4 años de experiencia en el campo. Siempre estoy buscando nuevas e innovadoras formas de llevar las visiones de mis clientes a la vida.
              </p>
              <p className='my-4 font-medium'>
                Creo que el diseño es algo más que hacer que las cosas se vean bonitas se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.
              </p>
              <p className='font-medium'>
                Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, aporto mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero tener la oportunidad de aportar mis habilidades y pasión a su próximo proyecto.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                <Image src={profilePic} atl='Carlos Roque' className='w-full h-auto rounded-2xl'/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                    <AnmimatedNumbers value={50}/> +
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 '>Satisfied clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                  <AnmimatedNumbers value={40}/> +
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 '>projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                  <AnmimatedNumbers value={4}/> +
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 '>years of experience</h2>
                </div>
            </div>
          </div>
          <Skills/>
          <Experience/>
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
