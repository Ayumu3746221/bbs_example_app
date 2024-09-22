"use client";
 
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { loginMethod } from '@/FireBaseConfig/AuthencatingMethod';
import { useRouter } from 'next/navigation';
import { useDispatch } from "react-redux";
import { loginedUser } from '@/app/redux/userSlice';
import { AppDispatch } from '@/app/redux/store';
import { User } from 'firebase/auth';
import { exit } from 'process';
 
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password:z.string().min(5, { message: "Password must be at least 5 characters" }),
});


const LoginForm:React.FC = () => {

  const dispach:AppDispatch = useDispatch();
  const [message , setMessage] = useState("");

    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password:"",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema> ) => {
        const {email , password} = values;

      try {
        const user:User | null = await loginMethod({ email, password });

        if (user) {
          console.log(user);
          dispach(loginedUser(user));
          router.push("/");
        }else {
          setMessage("Email address or password is incorrect.");
          exit();
        }
      } catch (error) {
        console.error("Login failed" , error);
      }

    }

  return (
    <Form {...form}>
      <p className='text-red-600 px-4 py-2'>{message}</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 p-4 items-center justify-items-center">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passeord</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default LoginForm