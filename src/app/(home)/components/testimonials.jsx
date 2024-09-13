'use client'
import { ReactSvg } from '@/lib'
import { Typography } from '@components/typography'
import Link from 'next/link'
import React from 'react'

function Testimonials() {
    return (
        <div className='max-w-[400px] w-full p-16 pb-52 px-8 mx-auto relative testimonials'>
            <div className="max-w-[300px] text-center">
                <Typography variant='h1' component='h2' className='uppercase'>
                    WHAT <span className='text-primary'>our</span> CLIENTS SAY?
                </Typography>
                <hr className='max-w-[150px] mt-3 mx-auto border-t-2 border-t-primary' />
                <Typography className='mt-3 uppercase'>
                    TESTIMONIALS
                </Typography>
            </div>
            <div className="mt-24 py-4 px-8 rounded-md bg-[linear-gradient(175.64deg,_rgba(17,_24,_42,_0.7)_19.67%,_rgba(17,_24,_42,_0)_121.51%)]">
                <Typography className='text-left'>
                    Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit
                </Typography>
                <div className="flex gap-2 text-left items-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-primary"></div>
                    <div className="flex flex-col">
                        <Typography className='font-bold'>
                            John Doe
                        </Typography>
                        <Link href="/" className='text-sm text-blue-400'>
                            @caroles.gmail.com
                        </Link>
                    </div>
                    <ReactSvg className="ml-auto" path="qouts" width={24} height={24} />
                </div>
            </div>
            <button className='mt-24 button-primary-outline'>
                View All Testimonials
            </button>


        </div>
    )
}

export default Testimonials