"use client"
import { ReactSvg } from '@/lib'
import { Typography } from '@components/typography'
import React from 'react'

function WhyUs() {
    return (
        <div className='container pt-24 pb-36'>
            <div className="flex flex-col items-start mb-8">
                <Typography className='text-center uppercase'>why us?</Typography>
                <hr className='min-w-[70px] border-t-2 border-t-primary' />
            </div>
            <div className="flex flex-col md:flex-row gap-16">
                <div className="inline-flex items-start flex-1 flex-col">
                    <Typography variant='h1' component='h2'>
                        25 years of <span className='text-primary'>experience</span> as a creative agency
                    </Typography>
                    <button className='button-primary-outline self-start uppercase mt-16'>
                        Read More
                    </button>
                </div>
                <div className="flex-1">
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis beatae incidunt quisquam voluptas recusandae voluptates quae facere voluptatum ea atque eveniet facilis cum quo, enim nemo quibusdam, ipsam officiis! Quas.
                    </Typography>
                    <ul className='mt-16 flex flex-col gap-2'>
                        <li className='flex items-center gap-2'><ReactSvg path="ic-check" width={14} height={14} /> Happy Customer</li>
                        <li className='flex items-center gap-2'><ReactSvg path="ic-check" width={14} height={14} /> Experienced Team</li>
                        <li className='flex items-center gap-2'><ReactSvg path="ic-check" width={14} height={14} /> Modern Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WhyUs