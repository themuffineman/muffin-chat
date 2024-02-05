"use client"

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
import * as z from "zod"
import { LoginSchema } from '@/Schemas'
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
import { FormError } from '../FormError'
import { FormSuccess } from '../FormSuccess'
import { login } from '@/actions/login'

const CreateForm: React.FC = () => {

  const form = useForm<z.infer<typeof LoginSchema> >({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email: "",
      password:""
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
    login(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>

        <Card className='flex flex-col gap-2 border-border px-10 py-4 '>

              <div className="flex flex-col gap-1">
                <CardTitle className="text-3xl  font-extrabold">Create an Account</CardTitle>
                <CardDescription className=" text-sm">Enter your email below to create your <br/> account</CardDescription>
              </div>
              <CardContent className="flex gap-3 mt-4">
                <Socials/>
              </CardContent>
              <CardContent className="flex gap-4 items-center justify-between self-center relative w-full">
                <span className="h-[1px] bg-border w-[10%] "/>
                <CardDescription className="text-sm uppercase block w-36">or continue with</CardDescription>
                <span className="h-[1px] bg-border w-[10%] "/>
              </CardContent>

              <FormField 
              control={form.control} 
              name="email" 
              render={({field})=>(
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                    {...field}
                    placeholder="johndoe@example.com"
                    type="email"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}/>


              <FormField 
              control={form.control} 
              name="password" 
              render={({field})=>(
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                    {...field}
                    placeholder='*****'
                    type="password"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}/>

              <Button className="bg-primary text-primary-foreground w-full mt-4" type="submit">Create Account</Button>
        </Card>
      </form>
    </Form>
  )
}

export default CreateForm