'use client'
import { Typography } from '@components/typography'
import React from 'react'
import ProjectCarousel from './projectCarousel'

function LatestProjects() {
    return (
        <div className='py-16'>
            <div className="flex flex-col items-center">
                <div className='max-w-[400px] flex flex-col items-center gap-8'>
                    <Typography className='text-center' variant='h1' component='h1'>
                        ENJOY OUR <span className='text-primary'>LATEST</span> PROJECTS
                    </Typography>
                    <div className="relative border-t max-w-44 w-full">
                        <Typography className='uppercase text-primary text-sm inline-flex bg-[#101010] px-2 absolute top-[-10px] left-[50%] text-nowrap translate-x-[-50%]'>our WORK</Typography>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <ProjectCarousel />
            </div>
        </div>
    )
}

export default LatestProjects