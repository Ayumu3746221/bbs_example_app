import React from 'react'
import Link from "next/link";

const Heder = () => {

  return (
    <header className='bg-black p-4'>
        <nav className='text-white flex justify-between mx-4 items-center container'>
            <div className='font-bold'>
                <Link href={"/"}>BBS for Ayumu3746221</Link>
            </div>
            <div className='flex items-center justify-between'>
              <div className='space-x-4'>
                <Link href={"/"} className=''>Home</Link>
                <Link href={"/"} className=''>Contact Us</Link>
                <Link href={"/bbs_post/create"} className=''>Post</Link>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Heder