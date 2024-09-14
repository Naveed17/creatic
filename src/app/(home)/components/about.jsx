import Image from 'next/image'
import React from 'react'
import { Typography } from '@components/typography'

function About() {
    return (
        <div className="bg-[linear-gradient(93.72deg,_rgba(109,_149,_252,_0.26)_6.51%,_rgba(109,_149,_252,_0)_57.56%)]">
            <div className="container flex-col flex md:flex-row items-center gap-32">
                <div class="relative flex-1 h-[700px] hidden md:block">
                    <Image
                        priority
                        src="/static/images/robot.svg"
                        fill
                        alt='banner'
                        style={{ objectFit: 'cover' }}

                    />
                </div>

                <div class="flex-1 flex flex-col gap-4 py-28">
                    <Typography className='text-primary font-light uppercase'>ABOUT US</Typography>
                    <Typography className='uppercase md:max-w-[500px]' variant='h1' component='h1'>
                        We Bring <span className='text-primary'>Creative</span> ideas to life.
                    </Typography>
                    <hr className='max-w-28 border-t-2 border-t-white' />
                    <Typography className='text-sm text-primary'>We love Creating</Typography>
                    <Typography>
                        Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum
                    </Typography>
                    <Typography className='mt-4'>
                        Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum
                    </Typography>
                    <button className='button-primary-outline self-start'>
                        rEAD more
                    </button>
                </div>
            </div>
        </div>

    )
}

export default About