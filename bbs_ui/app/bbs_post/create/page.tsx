"use client";

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';

export const formSchema = z.object({
    title: z.string().min(5 , {message : "タイトルは5文字以上にしてください。"}).max(30, {message : "タイトルは30文字以下にしてください。"}),
    content: z.string().min(10 , {message : "内容は10文字以上にしてください。"}).max(500, {message : "内容は500文字以下にしてください。"}),
  })

const PostPage:React.FC = () => {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          content: "",
        },
    })
     
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2 p-4 items-center justify-items-center">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold text-2xl'>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-bold text-2xl'>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="content…" {...field} />
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

export default PostPage;