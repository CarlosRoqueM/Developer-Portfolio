import React from 'react'
import { CircularText2, CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
return (
    <div className='fixed right-3 bottom-3 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-full flex items-center justify-center relative'>
            <CircularText2 className={'fill-dark animate-spin-slow'}/>
            <Link href='mailto:carlos.roque@tecsup.edu.pe' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light text-xs shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark transition-all duration-300'>
                Contrátame
            </Link>
        </div>
    </div>
)
}

export default HireMe
