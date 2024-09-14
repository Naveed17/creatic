'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { navData } from './config'
import { ReactSvg } from '@/lib'
import { MobileNav } from '@components/mobileNav'

function Header() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }


        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);


    return (
        <header class="bg-gradient-to-l from-[#101010] via-transparent">
            <nav className='flex justify-between items-center container py-4 '>
                <Link href='/'>
                    <Image src='/static/images/logo.svg' width={100} height={100} alt='logo' />
                </Link>
                <div className='flex items-center gap-8'>
                    {
                        navData.map((item, index) => (
                            <Link className='p-2 min-w-fit hidden lg:flex' key={index} href={item.path}>{item.title}</Link>
                        ))
                    }
                    <button>
                        <ReactSvg path='ic-search' width={18} height={18} />
                    </button>
                    <button className='flex lg:hidden' onClick={() => setOpen(!open)}>
                        <ReactSvg path='ic-menu' width={24} height={24} />
                    </button>
                </div>
            </nav>
            <MobileNav {...{ open, handleClose: () => setOpen(false) }} />
        </header>
    )
}

export default Header