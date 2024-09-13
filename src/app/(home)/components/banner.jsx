'use client'
import React from 'react'
import { Typography } from '@components/typography'
import Image from 'next/image'

function Banner() {
    return (
        <div class="bg-[linear-gradient(268.78deg,_rgba(109,_149,_252,_0.67)_-53.1%,_rgba(109,_149,_252,_0)_30.41%)]">
            <div className="container grid mt-32 grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-7 flex flex-col gap-8 pb-32">
                    <Typography className='text-primary font-light uppercase'>Welcome to creatic</Typography>
                    <Typography className='md:text-6xl' variant='h1' component='h1'>
                        WE ARE <span className='text-primary'>CREATIVE</span> DESIGN AGENCY
                    </Typography>

                    <hr className='max-w-28 border-t-2 border-t-primary' />
                    <Typography className='md:max-w-[80%]'>
                        Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum
                    </Typography>
                    <button className='button-primary-outline self-start'>
                        Get In Touch
                    </button>
                </div>
                <div className="md:col-span-5 relative md:-mt-12">
                    <Image
                        priority
                        src="/static/images/banner-img.png"
                        fill
                        alt='banner'
                        className='mix-blend-screen'
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>

    )
}

export default Banner