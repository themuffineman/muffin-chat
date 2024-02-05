import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CreateForm: React.FC = () => {
  return (
    <div>
        <form action="" className="flex flex-col gap-4 border rounded-xl border-border px-6 py-10 ">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-extrabold">Create an Account</h2>
            <p className=" text-sm">Enter your email below to create your <br/> account</p>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="outline">Sign Up with Google</Button>
            <Button variant="outline">Sign Up with Microsoft</Button>
          </div>
          <div className="flex gap-4 items-center justify-between self-center relative w-full">
            <span className="h-[.1rem] bg-border w-24  "/>
            <p className="text-sm">OR CONTINUE WITH</p>
            <span className="h-[.1rem] bg-border w-24 "/>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <Button className="bg-primary text-primary-foreground mt-4" type="submit">Create Account</Button>
        </form>
    </div>
  )
}

export default CreateForm