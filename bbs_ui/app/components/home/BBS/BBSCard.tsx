import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'

const BBSCard = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <Link href={"/bbs_post/1"} className='text-blue-500'>Open Content</Link>
    </CardFooter>
    </Card>
  )

}

export default BBSCard