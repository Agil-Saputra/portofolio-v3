import Image from "next/image";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";
import Skills from "./components/skills";
import WorkProjects from "./components/workProjects";
import Contact from "./components/contact";
import MyProfilePhoto from "@/assets/my-profile-photo.png"
import * as motion from "framer-motion/client"

export default function Home() {
  return (
    <main className="container pb-32">
		<div className="flex justify-between mt-16 gap-4">
		<div>
			<motion.h1 initial={{opacity : 0, y : 100}} animate={{opacity : 1, y: 0}} viewport={{once : true}} className="md:text-6xl text-4xl  font-bold">Hi, I&lsquo;m Agil Saputra👋</motion.h1>
			<motion.h3 initial={{opacity : 0, y : 100}} animate={{opacity : 1, y: 0}} viewport={{once : true}} transition={{delay: 0.2}} className="md:text-3xl text-xl font-semibold mt-2">Frontend Developer✨</motion.h3>
		</div>
		<motion.div initial={{opacity : 0, x : 100}} animate={{opacity : 1, x :0}} transition={{delay: 0.4}} viewport={{once : true}}>
			<Image
			src={MyProfilePhoto}
			alt="Agil's Profile Photo"
			className="md:w-32 md:h-32 w-28 bg-slate-200 object-cover rounded-full"
			/>
		</motion.div>
		</div>
		<div  className="mt-8">
		<motion.h3 initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y: 0}} transition={{delay: 0.6}} viewport={{once : true}} className="text-2xl font-bold mb-4">About Me 😎</motion.h3>
			<motion.p initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y: 0}} transition={{delay: 0.8}} viewport={{once : true}}>Hello, I‘m Agil Saputra, a Front End Developer with 1+ years of experience in creating engaging and user-friendly websites. My technical skills include deep knowledge and experience in the frontend field, I also possess strong soft skills, such as effective teamwork, communication, and problem-solving abilities. I am passionate about bringing ideas to life and creating digital experiences that make a difference in people‘s lives.</motion.p>
		</div>
		<WorkExperience/>
		<Education/>
		<Skills/>
		<WorkProjects/>
		<Contact/>
    </main>
  );
}
