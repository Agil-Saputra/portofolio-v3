"use client";
import React, { cloneElement } from "react";
import {
  HomeIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const { setTheme } = useTheme();

  const navItems = [
    {
      label: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      label: "Github Profile",
      icon: <GitHubLogoIcon />,
      path: "https://github.com/Agil-Saputra",
    },
    {
      label: "Linkedin Profile",
      icon: <LinkedInLogoIcon />,
      path: "https://www.linkedin.com/in/agil-saputra07/",
    },
  ];
  return (
    <div className="w-full grid place-items-center relative z-[999999]">
      <div className="fixed bottom-0 inset-x-0 h-24 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <nav className="fixed bottom-6 flex gap-3 px-6 py-4 rounded-full border dark:bg-black bg-white ">
        {navItems.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger className="hover:px-2 transition-all ease-in-out duration-200">
                <a href={item.path}>{cloneElement(item.icon, { width: 24, height: 24 })}</a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
        <button className="relative transition-all  duration-200 ease-in-out ">
          <Sun
            onClick={() => setTheme("dark")}
            className="absolute top-0 h-[1.5rem] w-[1.5rem] scale-100 dark:-rotate-90 dark:scale-0"
          />
          <Moon
            onClick={() => setTheme("light")}
            className="aabsolute top-0 h-[1.5rem] w-[1.5rem] scale-0 dark:rotate-0 dark:scale-100"
          />
        </button>
      </nav>
    </div>
  );
}
