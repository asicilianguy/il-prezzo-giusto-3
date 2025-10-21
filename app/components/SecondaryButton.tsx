import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
    href: string
}

export const SecondaryButton: React.FC<Props> = ({href ,children}) => {
  return (
    <Link
    className='text-[17px] disabled:bg-gray-1/20 disabled:opacity-50 text-black-1 font-medium font-figtree flex py-3.5 px-6 items-center justify-center text-center bg-green-2 border border-green-2 rounded-full' 
    href={href}
    >{children}
    </Link>
  )
}
