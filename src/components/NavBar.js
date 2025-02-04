import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, LinkArrow, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import { useThemeSwitcher } from './hooks/useThemeSwitcher'



const CustomLink = ({ href, title, className=''}) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[2px] inline-block w-0 bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}
const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>

        <nav>
          <CustomLink href='/' title={'Inicio'} className='mr-4 p-1'/>
          <CustomLink href='/about'title={'Sobre Mi'} className='mx-4 p-1'/>
          <CustomLink href='/projects' title={'Portafolio'} className='ml-4 p-1'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href="https://x.com/Forest_long21" target={'_blank'}
            whileHover={{y:2}} whileTap={{scale: 0.9}} className='w-8 mr-3'><TwitterIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/carlosroquem/" target={'_blank'} whileHover={{y:2}} whileTap={{scale: 0.9}} className='w-8 mx-3'><LinkedInIcon/></motion.a>
            <motion.a href="https://github.com/CarlosRoqueM" target={'_blank'} whileHover={{y:2}} whileTap={{scale: 0.9}} className='w-8 ml-3'><GithubIcon/></motion.a>

            <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className='w-10 ml-3 flex items-center justify-center rounded-full p-1'>
              {mode === 'dark' ? <SunIcon className='fill-dark'/> : <MoonIcon className='fill-dark'/>}
            </button>

        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Logo />
        </div>
    </header>
  )
}

export default NavBar
