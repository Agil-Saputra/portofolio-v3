'use client';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react'
import Navbar from './navbar';
interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({children}: SmoothScrollProps) {
	const contentRef = useRef<HTMLDivElement>(null)
	const [contentHeight, setContentHeight] = useState<number>(0);
	const [windowHeight, setWindowHeight] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			if (contentRef.current) {
				setContentHeight(contentRef.current.scrollHeight);
				setWindowHeight(window.innerHeight);
			}
			setWindowHeight(window.innerHeight)
		}

		handleResize();
		
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [contentRef]);

	const {scrollYProgress} = useScroll()
	const smoothProgress = useSpring(scrollYProgress, {
		mass : 0.1,
		stiffness : 100,
		damping : 20,
		restDelta : 0.001
	})

	const y = useTransform(smoothProgress, (value) => {
		return value * -(contentHeight - windowHeight)
	})
  return (
	<>
	<Navbar/>
	<div style={{height : contentHeight}}></div>
	<motion.div className='w-full flex flex-col fixed top-0' ref={contentRef} style={{y : y}}>
		{children}
	</motion.div>
	</>
  )
}