import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import simbatras from "@/assets/simbatras.png";
import elmart from "@/assets/elmart.png";
import code from "@/assets/code.png";
import kudata from "@/assets/kudata.png";
import bookmark from "@/assets/bookmark-landing-page.png";
import rentalmobiligra from "@/assets/rental-iqra.png";
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function WorkProjects() {
  const projects = [
    {
      name: "Kudata",
      description: "platform designed to help students find respondents for their surveys. My role involves fixing bugs and improving existing features to enhance the website’s performance and user experience. This platform simplifies the process for students by connecting them with the right respondents, making data collection for their research projects more efficient and streamlined.",
      link: "/",
      source: "/",
      image: kudata,
      tech: ["Vue.js", "Vuex", "Sass", "Tailwind CSS", "Shadcn"],
    },
    {
      name: "Simbatras",
      description:
        "System information website using Laravel and ReactJS. This site helps manage data for a trash bank in Triaharjo village. It makes it easier to track and manage trash collection, recycling, and disposal. The goal is to improve the efficiency of the trash bank's operations and provide clear, accurate data to support the village's waste management efforts.",
      link: "/",
      source: "/",
      image: simbatras,
      tech: ["React.js", "Laravel", "Material UI", "Tailwind CSS"],
    },
    {
      name: "Elmart",
      description:
        "An E-commerce app using Next.js with full functionality, including a cart feature using React Context API and Local Storage for cart data. I integrated Contentful CMS for easy product management, used Tailwind CSS and Material UI for an intuitive UI, and implemented Stripe for secure payments.",
      link: "/",
      source: "/",
      image: elmart,
      tech: ["Next.js", "Contentful", "Material UI", "Tailwind CSS"],
    },
    {
      name: "CODE 2023 Landing Page",
      description:
        "Fully responsive landing page for the CODE 2024 event held by AMCC, CODE is an annual competition event with the software development and competitive programming categories. ",
      link: "https://code.amcc.or.id/",
      source: "",
      image: code,
      tech: ["Laravel", "Alpine.js", "Tailwind CSS", "Javascript"],
    },
    {
      name: "Bookmark | Landing Page",
      description:
        "Landing page that allows user to interact with incredible animations and interactive components while get the information from this website, this kind of landing page is perfect for business or organizations purpose.",
      link: "https://simplebookmarkextension.netlify.app/",
      source: "https://github.com/Agil-Saputra/Bookmark-Landing-Page",
      image: bookmark,
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "Rentalmobiliqra.com",
      description:
        "Landing page website for renting cars using WordPress and Elementor. The site offers a user-friendly experience with clear information & attractive images making it simple for customers to find cars online.",
      link: "https://rentalmobiliqra.com",
      source: "",
      image: rentalmobiligra,
      tech: ["Wordpress", "CSS", "Elementor"],
    },
  ];
  return (
    <div className="mt-24 text-center">
      <Badge>Work Projects</Badge>
      <h1 className="text-4xl font-bold mt-4 mb-2">Let's Get To Work 🚀</h1>
      <p>
        A showcase of my work—from quick fixes to full-fledged apps. Whether
        simple or complex, each project has its own story (and maybe a few late
        nights).
      </p>
      <div className="mt-12 grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <div className="border rounded-md text-left" key={project.name}>
            <Image
              src={project.image}
              alt="simbatras.com"
              className="rounded-t-md"
            />
            <div className="px-4">
              <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.map((item) => (
                  <Badge className="bg-[#272727] text-white rounded-md">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 mb-4 flex gap-2">
                <a href={project.link}>
                  <Badge className="px-4 py-1.5 gap-1 rounded-md">
                    <GlobeIcon />
                    Visit Site
                  </Badge>
                </a>
                {project.source == "" ? null : (
                  <a href={project.source}>
                    <Badge className="px-4 py-1.5 gap-1 rounded-md">
                      <GitHubLogoIcon />
                      Source
                    </Badge>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
