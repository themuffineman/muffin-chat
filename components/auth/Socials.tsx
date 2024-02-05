import React from 'react'
import { Button } from '../ui/button'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Socials = () => {
  return (
    <>
        <div className=" w-full flex items-center">
            <Button className="w-full" variant="outline"  >
                <FcGoogle className=" h-5 w-5"/>
            </Button>
        </div>
        <div className=" w-full flex items-center">
            <Button className="w-full" variant="outline" >
                <FaGithub className=" h-5 w-5"/>
            </Button>
        </div>
    </>
  )
}

export default Socials