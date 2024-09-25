import React from 'react'
import { Badge } from '@/components/ui/badge'
type Props = {}

export default function Contact({}: Props) {
  return (
	<div className='mt-16 text-center'>
		<Badge>Contact</Badge>
		<h1 className="text-4xl font-bold mt-4 mb-2">Let's Connnect</h1>
		<p className='text-sm'>Got a question or just want to chat? Drop me a message on Twitter. I'll get back to you soon.
		P.S. While you're here, check out my blogs and case studies for some interesting reads.</p>
	</div>
  )
}