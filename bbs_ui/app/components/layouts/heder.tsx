import React from 'react'
import Link from "next/link";

const Heder = () => {
  return (
    <header className='bg-black p-4'>
        <nav className='text-white flex justify-between mx-4 items-center container'>
            <div className='font-bold'>
                <Link href={"/"}>BBS for Ayumu3746221</Link>
            </div>
            <div className='space-x-4'>
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Contact Us</Link>
              <Link href={"/bbs_post/create"} className=''>Post</Link>
            </div>
        </nav>
    </header>
  )
}

export default Heder