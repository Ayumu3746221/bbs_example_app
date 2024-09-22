"use client";

import { AppDispatch, RootState } from '@/app/redux/store';
import Link from 'next/link'
import React from 'react'
import { useSelector , useDispatch } from "react-redux";
import { signOutMethod } from "../../../../FireBaseConfig/AuthencatingMethod";
import { logoutedUser } from '@/app/redux/userSlice';
import { Button } from '@/components/ui/button';

const LoginButton = () => {

  const dispatch:AppDispatch = useDispatch();
  const loginState:boolean = useSelector((state: RootState) => state.user.loading);

  const handleLogout = () => {
    signOutMethod();
    dispatch(logoutedUser());
  }

  return (
    loginState ? 
    <Button onClick={() => handleLogout()} className='text-white bg-red-500 hover:bg-red-600 text-whit e px-4 py-2 rounded'>Logout</Button>
    :
    <Link href={"/bbs_post/login"} className='text-white bg-blue-500 hover:bg-blue-600 text-whit e px-4 py-2 rounded'>Login</Link>
        
  )
}

export default LoginButton