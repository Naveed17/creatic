import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ReactSvg } from '@/lib'
import { navData } from '@components/base/header/config'
function MobileNav({ open, handleClose }) {
    return (
        <>
            {open && <div onClick={handleClose} className={`fixed inset-0 bg-gray-800 bg-opacity-60 backdrop-blur-md z-10`} />}
            <aside className={`fixed h-full bg-[#101010] md:max-w-[300px] shadow-md w-full top-0 right-0 z-[99999] 
                ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out p-4`}>
                <div className="flex items-center justify-between">
                    <Link href='/'>
                        <Image src='/static/images/logo.svg' width={80} height={80} alt='logo' />
                    </Link>
                    <button onClick={handleClose}>
                        <ReactSvg path='ic-close' width={16} height={16} />
                    </button>
                </div>
                <ul className='mt-12'>
                    {
                        navData.map((item, index) => (
                            <li key={index} className='mb-4'>
                                <Link className='p-2 min-w-fit' href={item.path}>{item.title}</Link>
                            </li>
                        ))
                    }

                </ul>
            </aside>
        </>

    )
}

export default MobileNav