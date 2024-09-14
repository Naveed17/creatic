'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Typography } from '@components/typography'
import { ReactSvg } from '@/lib'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='container flex flex-col gap-4 pb-10 items-center max-w-[600px] mx-auto mt-32 text-center'>
            <Link href='/'>
                <Image src='/static/images/logo.svg' width={100} height={100} alt='logo' />
            </Link>
            <hr className='min-w-28 border-t-2 border-t-white' />
            <ul className='flex flex-wrap justify-center items-center gap-8 '>
                <li>
                    <Link href='/' className='text-primary'>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link href='/about' className='text-primary'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/services' className='text-primary'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link href='/portfolio' className='text-primary'>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href='/pages' className='text-primary'>
                        Pages
                    </Link>
                </li>
                <li>
                    <Link href='/support' className='text-primary'>
                        Support
                    </Link>
                </li>
            </ul>
            <Typography>
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque
            </Typography>
            <ul className='flex items-center gap-8 '>

                <li>
                    <Link href='/' className='text-primary'>
                        <ReactSvg path="ic-fb" />
                    </Link>
                </li>
                <li>
                    <Link href='/' className='text-primary'>
                        <ReactSvg path="ic-insta" />
                    </Link>
                </li>
                <li>
                    <Link href='/' className='text-primary'>
                        <ReactSvg path="ic-wa" />
                    </Link>
                </li>
                <li>
                    <Link href='/' className='text-primary'>
                        <ReactSvg path="ic-in" />
                    </Link>

                </li>
                <li>
                    <Link href='/' className='text-primary'>
                        <ReactSvg path="ic-pint" />
                    </Link>
                </li>
                <li>
                    <Link href='/' className='text-primary'>
                        <ReactSvg path="ic-x" />
                    </Link>
                </li>
            </ul>
            <Typography className='mt-52'>
                Copyright © {year} Creatic Agency All rights reserved.
            </Typography>
        </footer>
    )
}

export default Footer