import Link from 'next/link'
import React from 'react'
import LoginButton from './LoginButton'

const LoginComponent = () => {
  return (
    <div className='px-4 py-5 flex justify-between items-center'>
        <h2 className='font-bold text-bordertext-black'>BBS Card List</h2>
        <LoginButton></LoginButton>
    </div>

  )
}

export default LoginComponent