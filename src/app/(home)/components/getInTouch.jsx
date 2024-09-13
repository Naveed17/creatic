'use client'
import { ReactSvg } from '@/lib'
import { Typography } from '@components/typography'
import React from 'react'

function GetInTouch() {
    return (
        <div className='container'>
            <div className="flex gap-16 pt-32">
                <div className="flex-1">
                    <Typography variant='h1' component='h2'>Get in <span className='text-primary'>Touch</span></Typography>
                    <Typography className='mt-4'>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  </Typography>
                    <hr className='max-w-28 border-t-2 border-t-white mt-8' />
                    <ul className='mt-24 flex flex-col gap-8'>
                        <li className='flex gap-4 items-center'>
                            <ReactSvg path="ic-pin" width={32} height={32} />
                            <div className="flex flex-col">
                                <Typography className='font-bold'>
                                    Office Address
                                </Typography>
                                <Typography className='text-primary'>
                                    98, Arca St, PR City, 33414 , Indonesia
                                </Typography>

                            </div>
                        </li>
                        <li className='flex gap-4 items-center'>
                            <ReactSvg path="ic-tell" width={32} height={32} />
                            <div className="flex flex-col">
                                <Typography className='font-bold'>
                                    Call Us
                                </Typography>
                                <a href='tell://' className='text-primary'>
                                    (+BK) 123 456 7891
                                </a>

                            </div>
                        </li>
                        <li className='flex gap-4 items-center'>
                            <ReactSvg path="ic-mail" width={32} height={32} />
                            <div className="flex flex-col">
                                <Typography className='font-bold'>
                                    Mail Us
                                </Typography>
                                <a href='mailto://' className='text-primary'>
                                    info@creaticagency.com
                                </a>

                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <form className='flex flex-col gap-4 bg-[linear-gradient(179.96deg,_#12192B_0.03%,_rgba(18,_25,_43,_0)_109.04%)] p-8 rounded-lg'>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className='uppercase'>YOUR NAME</label>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className='uppercase'>YOUR EMAIL</label>
                            <input type="email" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message" className='uppercase'>YOUR MESSAGE</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button className='button-primary self-start rounded'>SEND MESSAGE</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch