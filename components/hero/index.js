import Image from 'next/image'
import React from 'react'
import hero from "../../src/assets/img/banner.webp"

const Hero = () => {
    return (
        <div className='hero h-full'>
            <Image src={hero} alt='hero' className='w-full h-full object-cover'/>
        </div>
    )
}

export default Hero