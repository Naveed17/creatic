"use client"
import { ReactSvg } from '@/lib'
import { Typography } from '@components/typography'
import React from 'react'

function Counter() {
    return (
        <div className="py-8 bg-[linear-gradient(-90deg,_#6D95FC_-127.55%,_rgba(21,_21,_21,_0.35)_50.97%)]">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <ReactSvg path="ic-group" width={64} height={64} />
                        <Typography variant='h1' component='h3'>
                            50+
                        </Typography>
                        <Typography className='text-primary text-sm'>Team members</Typography>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ReactSvg path="ic-project" width={64} height={64} />
                        <Typography variant='h1' component='h3'>
                            200+
                        </Typography>
                        <Typography className='text-primary text-sm'>Project done</Typography>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ReactSvg path="ic-h-custom" width={64} height={64} />
                        <Typography variant='h1' component='h3'>
                            500+
                        </Typography>
                        <Typography className='text-primary text-sm'>Happy customers</Typography>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ReactSvg path="award-w" width={64} height={64} />
                        <Typography variant='h1' component='h3'>
                            75+
                        </Typography>
                        <Typography className='text-primary text-sm'>Award Winning</Typography>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Counter