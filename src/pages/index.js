import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/developer-pic-4.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full gap-8'>
            <div className='w-1/2'>
              <Image src={ProfilePic} alt="CodeBucks" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Convertir ideas en soluciones innovadoras con tecnología" className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>Como desarrollador  web y móvil, combino creatividad y habilidad técnica para transformar ideas en aplicaciones funcionales y atractivas. Mi experiencia abarca desde React.js hasta Flutter, abarcando tecnologías modernas como SwiftUI, Node.js, NextJS.</p>
            
            <div className='flex items-center self-start mt-2'>
              <Link href="/cv.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark' download={true}>CV<LinkArrow className={'w-6 ml-1'}/> 
              </Link>
              {/* <Link href="mailto:carlos.roque@tecsup.edu.pe" target={"_blank"} className='ml-4 text-lg font-medium capitalize text-dark underline'>Contacto</Link> */}
              <Link href="/projects" className='ml-4 text-lg font-medium capitalize text-dark underline'>Proyectos</Link>
            </div>
          </div>
        </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
