import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CardHeader } from '@/components/ui/card'
import { CardTitle } from '@/components/ui/card'
import { CardDescription } from '@/components/ui/card'
import Socials from './Socials'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const CreateForm: React.FC = () => {

  return (
    <Card className='flex flex-col gap-4 border-border px-6 py-10 '>
  
          <CardHeader className="flex flex-col gap-1">
            <CardTitle className="text-3xl font-extrabold">Create an Account</CardTitle>
            <CardDescription className=" text-sm">Enter your email below to create your <br/> account</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 mt-4">
            <Socials/>
          </CardContent>
          <CardContent className="flex gap-4 items-center justify-between self-center relative w-full">
            <span className="h-[1px] bg-border w-[10%] "/>
            <CardDescription className="text-sm uppercase block w-36">or continue with</CardDescription>
            <span className="h-[1px] bg-border w-[10%] "/>
          </CardContent>
          
           <CardContent className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
            </CardContent> 

          <CardContent className="flex flex-col gap-4">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </CardContent>
          
          <CardContent className='w-full'>
            <Button className="bg-primary text-primary-foreground mt-4" type="submit">Create Account</Button>
          </CardContent>

    </Card>
  )
}

export default CreateForm