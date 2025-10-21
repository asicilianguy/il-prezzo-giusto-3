import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
    href: string
}

export const PrimaryButton: React.FC<Props> = ({href ,children}) => {
  return (
    <Link
    className='text-[17px] text-black-1 font-medium font-figtree flex py-3.5 px-6 items-center justify-center text-center border border-black-1 rounded-full' 
    href={href}
    >{children}
    </Link>
  )
}
