import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/PrototipadoCuidatec.png'
import project2 from '../../public/images/projects/contigoVoy.png'
import Image from 'next/image'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';


const FeatureProject = ({type, title, summary, img, link, github, icons = []}) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <Image src={img} alt={title} className='w-full h-auto' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-lg'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-4 flex flex-row items-center justify-between w-full'>
          <div className='gap-2 flex flex-row items-center'>
          {icons.map((Icon, index) => (
              <Icon key={index} className='w-8 h-10 transform transition-transform duration-300 hover:scale-125 text-primary sm:w-6 sm:h-7'/>
            ))}
          </div>
          <div className='w-10 sm:w-8'>
            <Link href={github} target='_blank' ><GithubIcon className='transform transition-transform duration-300 hover:scale-125 dark:text-light'/></Link>
            {/* <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visitar Proyecto</Link> */}
          </div>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title, summary, img, link, github, icons = []}) => {
  return (
    <article className='w-full flex flex-col rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 dark:bg-dark dark:border-light xs:p-4'>
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg '>
        <Image src={img} alt={title} className='w-full h-auto rounded-md' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
      </Link>
      <div className='w-full flex flex-col items-start justify-between pt-6'>
        <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-lg'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-4 flex flex-row items-center justify-between w-full'>
          <div className='gap-2 flex flex-row items-center'>
          {icons.map((Icon, index) => (
              <Icon key={index} className='w-8 h-10 transform transition-transform duration-300 hover:scale-125 text-primary sm:w-6 sm:h-7'/>
            ))}
          </div>
          <div className='w-10 sm:w-8'>
            <Link href={github} target='_blank' ><GithubIcon className='transform transition-transform duration-300 hover:scale-125 dark:text-light'/></Link>
            {/* <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Visitar Proyecto</Link> */}
          </div>
        </div>
      </div>
    </article>
  );
}


const projects = () => {
  return (
    <>
      <Head>
        <title>Carlos Roque | Proyectos</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Proyectos' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeatureProject img={project1} title='CuidaTec' github='https://github.com/CarlosRoqueM/CuidaTec.git' summary='Cuidatec es una aplicación móvil diseñada para facilitar la conexión entre familias y enfermeras especializadas en el cuidado de personas mayores. El proyecto surge como una respuesta a la creciente necesidad de brindar atención personalizada y profesional a nuestros seres queridos en una etapa crucial de sus vidas.'
              link='/' type='App móvil' icons={[SiFlutter, SiDart, SiFirebase, FaNodeJs]}/>
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project img={project2} title='ContigoVoy' github='https://www.contigo-voy.com' summary='Participé en el desarrollo de una página web para un centro psicológico, corrigiendo errores en scripts PHP, implementando nuevas funcionalidades dinámicas, optimizando el rendimiento con caché e imágenes, actualizando el contenido y asegurando copias de seguridad. Además, colaboré en la migración de PHP a Next.js para modernizar la plataforma.'
              link='https://www.contigo-voy.com' type='Página Web' icons={[ FaHtml5, FaCss3Alt, FaJsSquare, FaPhp]}/>
            </div>
            <div className='col-span-6 sm:col-span-12'>
              {/* <Project img={project1} title='CuidaTec' github='https://github.com/CarlosRoqueM/CuidaTec.git' summary='Cuidatec es una aplicación móvil diseñada para facilitar la conexión entre familias y enfermeras especializadas en el cuidado de personas mayores. El proyecto surge como una respuesta a la creciente necesidad de brindar atención personalizada y profesional a nuestros seres queridos en una etapa crucial de sus vidas.'
              link='/projects' type='Aplicativo movil' icons={[SiFlutter, SiDart, SiFirebase, FaNodeJs]}/> */}
              <article className='w-full flex flex-col rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 dark:bg-dark dark:border-light'>
                <h1 className='font-bold items-center text-center dark:text-light'>En proceso...</h1>
              </article>

            </div>
            {/* <div className='col-span-12'>
              feature projects
            </div>
            <div className='col-span-6'>
              feature projects -1
            </div>
            <div className='col-span-6'>
              feature projects -2
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
