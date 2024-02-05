"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

interface LoginProps{
    children: React.ReactNode
    mode?: "modal" | "redirect"
    asChild?: boolean
}

const LoginBtn = ({children, mode="redirect", asChild}:LoginProps) => {

    const router = useRouter()

    const onClick = ()=>{
        router.push("/auth/login")
    }

    if (mode === 'modal'){
        return (
            <span>TOD</span>
        )
    }
  return (
    <span onClick={onClick} className='cursor-pointer'>
        {children}
    </span>
  )
}

export default LoginBtn