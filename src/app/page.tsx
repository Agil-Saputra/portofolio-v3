import Image from "next/image";
import Navbar from "./components/navbar";
import WorkExperience from "./components/workExperience";
import Education from "./components/education";
import Skills from "./components/skills";
import WorkProjects from "./components/workProjects";
import Contact from "./components/contact";
import Certification from "./components/certification";
import MyProfilePhoto from "@/assets/my-profile-photo.png"

export default function Home() {
  return (
    <main className="container pb-32">
		<div className="flex justify-between mt-16 gap-4">
		<div>
			<h1 className="md:text-6xl text-4xl  font-bold">Hi, I'm Agil Saputra👋</h1>
			<h3 className="md:text-3xl text-xl font-semibold mt-2">Frontend Developer✨</h3>
		</div>
		<Image
		src={MyProfilePhoto}
		alt="Agil's Profile Photo"
		className="md:w-32 md:h-32 w-16 h-16 bg-slate-200 rounded-full"
		/>
		</div>
		<div className="mt-8">
		<h3 className="text-2xl font-bold mb-4">About Me 😎</h3>
			<p>Hello, I‘m Agil Saputra, a Front End Developer with 1+ years of experience in creating engaging and user-friendly websites. My technical skills include deep knowledge and experience in the frontend field, I also possess strong soft skills, such as effective teamwork, communication, and problem-solving abilities. I am passionate about bringing ideas to life and creating digital experiences that make a difference in people‘s lives.</p>
		</div>
		<WorkExperience/>
		<Education/>
		<Skills/>
		<WorkProjects/>
		<Contact/>
		<Navbar/>
    </main>
  );
}
