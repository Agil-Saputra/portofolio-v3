import React from 'react'
import { Badge } from '@/components/ui/badge'
import * as motion from "framer-motion/client"

export default function Contact() {
  return (
	<motion.div initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y: 0}} viewport={{once : true}} className='mt-16 text-center'>
		<Badge>Contact</Badge>
		<h1 className="text-4xl font-bold mt-4 mb-2">Let&lsquo;s Connnect</h1>
		<p className='text-sm'>Got a question or just want to chat? Drop me a message on Linkedin. I&apos;ll get back to you soon.
		</p>
	</motion.div>
  )
}