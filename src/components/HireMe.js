import React from 'react'
import { CircularText2, CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
return (
    <div className='fixed right-3 bottom-3 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
        <div className='w-48 h-full flex items-center justify-center relative md:w-24'>
            <CircularText2 className={'fill-dark animate-spin-slow dark:fill-light'}/>
            <Link href='mailto:carlos.roque@tecsup.edu.pe' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light text-xs shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition-all duration-300 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]'>
                Correo
            </Link>
        </div>
    </div>
)
}

export default HireMe
