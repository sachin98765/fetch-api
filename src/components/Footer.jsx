import React from 'react'
import { Linkedin, X } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Youtube } from 'lucide-react'


const Footer = () => {
  return (
    <div>
      <div className='bg-zinc-500 w-full h-[0.5px]'></div>
      <div className='flex flex-col justify-center items-center my-10x'>
        <h1>Code Coding</h1>
        <div className='flex justify-center gap-4 my-4'>
            <a href=""><Linkedin/></a>
            <a href=""><Twitter/></a>
            <a href=""><Github/></a>
            <a href=""><Instagram/></a>
            <a href=""><Youtube/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
