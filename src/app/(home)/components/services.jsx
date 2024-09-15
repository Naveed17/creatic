"use client"
import React from 'react'
import { Typography } from '@components/typography'
import { ReactSvg } from '@/lib'
function Services() {
    return (
        <div className='container'>
            <div className="flex flex-col md:flex-row gap-32 py-32">
                <div className="flex-1 flex flex-col gap-4">
                    <Typography className='text-primary font-light uppercase'>our services</Typography>
                    <Typography className='uppercase md:max-w-[500px]' variant='h1' component='h1'>
                        Experience the power of <span className='text-primary'>innovation.</span>
                    </Typography>
                    <hr className='max-w-28 border-t-2 border-t-white' />
                    <Typography>
                        Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum
                    </Typography>

                    <button className='button-primary-outline self-start'>
                        VIEW ALL
                    </button>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded p-6 bg-[linear-gradient(-2.42deg,_rgba(109,_149,_252,_0.55)_-180.08%,_rgba(109,_149,_252,_0)_67.52%)]">
                            <div className="flex flex-col items-center gap-4">
                                <ReactSvg className="mx-auto" path="ic-video" width={64} height={64} />
                                <Typography className='text-primary uppercase' variant='h5'>
                                    VIDEO MARKETING
                                </Typography>
                                <Typography className='text-center'>
                                    Lorem ipsum Neque do porro quisquam est qui do quam
                                </Typography>
                            </div>
                        </div>
                        <div className="rounded p-6 bg-[linear-gradient(-2.42deg,_rgba(109,_149,_252,_0.55)_-180.08%,_rgba(109,_149,_252,_0)_67.52%)]">
                            <div className="flex flex-col items-center gap-4">
                                <ReactSvg className="mx-auto" path="ic-graphic" width={64} height={64} />
                                <Typography className='text-primary uppercase' variant='h5'>
                                    Graphic Design
                                </Typography>
                                <Typography className='text-center'>
                                    Lorem ipsum Neque do porro quisquam est qui do quam
                                </Typography>
                            </div>
                        </div>
                        <div className="rounded p-6 bg-[linear-gradient(-2.42deg,_rgba(109,_149,_252,_0.55)_-180.08%,_rgba(109,_149,_252,_0)_67.52%)]">
                            <div className="flex flex-col items-center gap-4">
                                <ReactSvg className="mx-auto" path="ic-ux" width={64} height={64} />
                                <Typography className='text-primary uppercase' variant='h5'>
                                    ui/ux Design
                                </Typography>
                                <Typography className='text-center'>
                                    Lorem ipsum Neque do porro quisquam est qui do quam
                                </Typography>
                            </div>
                        </div>
                        <div className="rounded p-6 bg-[linear-gradient(-2.42deg,_rgba(109,_149,_252,_0.55)_-180.08%,_rgba(109,_149,_252,_0)_67.52%)]">
                            <div className="flex flex-col items-center gap-4">
                                <ReactSvg className="mx-auto" path="ic-web" width={64} height={64} />
                                <Typography className='text-primary uppercase' variant='h5'>
                                    WEBSITE DESIGN
                                </Typography>
                                <Typography className='text-center'>
                                    Lorem ipsum Neque do porro quisquam est qui do quam
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services