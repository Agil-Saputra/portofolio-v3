"use client";
import Image from "next/image";
import MyProfilePhoto from "@/assets/my-profile-photo.png";
import ContactIconButton from "./components/ui/contactIconButton";

import WorkCard from "./components/cards/workCard";
import LicenseCard from "./components/cards/licenseCard";
import EducationCard from "./components/cards/educationCard";
import ProjectCard from "./components/cards/projectCard";
import { motion } from "framer-motion";

import { skills as SkillsData } from "./db/skills";
import { appProjects } from "./db/projects";
import { workExperiences } from "./db/experiences";
import { certifications } from "./db/certifications";
export default function Home() {
  const date = new Date();

  function greetings(hours: number) {
    if (hours < 12 && hours >= 1) {
      return "Good Morning";
    } else if (hours >= 12 && hours <= 18) {
      return "Good Afternoon";
    } else if (hours > 18) {
      return "Good Evening";
    }
  }
  return (
    <>
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid h-2 max-w-8xl grid-cols-12 px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12 xl:px-10">
          <div className="col-span-10 border-x border-gray-30 dark:border-gray-500 md:col-span-4"></div>
          <div className="col-span-2 border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-4"></div>
          <div className="col-span-6 hidden border-r border-gray-30 dark:border-gray-500 md:block min-[896px]:col-span-5 lg:col-span-4"></div>
        </div>
      </div>

      {/* Name & Contact */}
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10 xl:px-10">
          <div className="col-span-10 border-x border-gray-30 dark:border-gray-500 min-[896px]:col-span-6">
            <motion.div
              initial={{  opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 py-4 px-8 items-center"
            >
              {/* Profile Photo */}
              <Image
                src={MyProfilePhoto}
                alt="Agil Profile Photo"
                className="md:w-32 md:h-32 w-16 h-16 bg-slate-200 object-cover rounded-lg"
              />
              {/* Name & title */}
              <div className="relative">
                <h1 className="md:text-4xl lg:text-5xl text-2xl font-bold text-center md:text-left">
                  Agil Saputra
                </h1>
                <h3 className="md:text-3xl font-semibold mt-2 text-center md:text-left">
                  Frontend Developer✨
                </h3>
                <div className="absolute w-[14rem] text-center grid place-items-center px-4 py-3 bg-green-500 rounded-full md:-right-28 -top-14 font-bold text-xl -right-[125px] md:scale-100 scale-75">
                  {greetings(date.getHours())}👋
                  <svg
                    viewBox="0 0 22 18"
                    fill="none"
                    className="absolute -bottom-[9px] left-[15px] w-5 text-green-500"
                  >
                    <path
                      d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-span-2 border-r border-gray-30 dark:border-gray-500 min-[896px]:col-span-2"></div>
          {/* Contact Buttons */}
          <div className="col-span-12 flex-col items-end justify-end border-x border-t border-gray-30 bg-gradient-to-br from-gray-30/30 via-white to-white p-4 md:p-8 text-right dark:border-gray-500 dark:from-gray-700 dark:via-gray-1000 dark:to-gray-1000  md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-4">
            <div className="flex justify-between md:justify-end md:text-right">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex items-center justify-end space-x-2"
              >
                <ContactIconButton
                  title="LinkedIn"
                  href="https://linkedin.com/in/agilsaputra07"
                >
                  <svg
                    viewBox="0 0 425 512"
                    fill="none"
                    className="w-4 md:w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray--800 dark:text-gray-50 dark:group-hover:text-green-400"
                  >
                    <path
                      d="M317 51q21.5 0 40.5 8.25t33.25 22.5 22.5 33.25 8.25 40.5v209q0 21.5-8.25 40.75t-22.5 33.5-33.25 22.5-40.5 8.25H107.5q-21.5 0-40.5-8.25t-33.25-22.5-22.5-33.5T3 364.5v-209Q3 134 11.25 115t22.5-33.25T67 59.25 107.5 51H317zM147 208H94.5v170H147V208zm-26-13.5q10.5 0 18.25-7.5t7.75-18.5-7.75-18.5-18.25-7.5q-11 0-18.75 7.5t-7.75 18.5 7.75 18.5 18.75 7.5zm209 85q0-18-10-35.25T294 218q-14.5-8-33.75-8.5T225.5 216v-8H173v170h52.5V274l21.5-10.5q4-2 11-2t10.5 2.5q3 1.5 6 6.5t3 9V378H330v-98.5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </ContactIconButton>
                <ContactIconButton
                  title="GitHub"
                  href="https://github.com/Agil-Saputra"
                >
                  <svg
                    viewBox="0 0 22 22"
                    fill="none"
                    className="w-4 md:w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray-800 dark:text-gray-50 dark:group-hover:text-green-400"
                  >
                    <path
                      d="M11 0C4.9225 0 0 5.0503 0 11.2793C0 16.2638 3.1515 20.4907 7.52125 21.9805C8.07125 22.0867 8.27292 21.738 8.27292 21.4382C8.27292 21.1703 8.26375 20.4606 8.25917 19.5207C5.19933 20.2012 4.554 18.0074 4.554 18.0074C4.0535 16.7056 3.33025 16.3578 3.33025 16.3578C2.33383 15.6585 3.40725 15.6726 3.40725 15.6726C4.51183 15.7515 5.09208 16.8343 5.09208 16.8343C6.07292 18.5591 7.667 18.061 8.29583 17.7724C8.39483 17.043 8.67808 16.5458 8.9925 16.2638C6.54958 15.9818 3.982 15.0118 3.982 10.6899C3.982 9.45862 4.40825 8.45289 5.11408 7.66334C4.99033 7.37853 4.61908 6.23181 5.21033 4.67808C5.21033 4.67808 6.13158 4.37542 8.23533 5.83421C9.11533 5.58325 10.0503 5.45918 10.9853 5.45354C11.9203 5.45918 12.8553 5.58325 13.7353 5.83421C15.8253 4.37542 16.7466 4.67808 16.7466 4.67808C17.3378 6.23181 16.9666 7.37853 16.8566 7.66334C17.5578 8.45289 17.9841 9.45862 17.9841 10.6899C17.9841 15.0231 15.4128 15.9771 12.9653 16.2544C13.3503 16.5928 13.7078 17.2846 13.7078 18.3411C13.7078 19.8506 13.6941 21.0631 13.6941 21.4297C13.6941 21.7258 13.8866 22.0783 14.4503 21.9655C18.8512 20.486 22 16.2563 22 11.2793C22 5.0503 17.0748 0 11 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </ContactIconButton>
              </motion.div>
              <motion.div
                initial={{  opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="flex text-xs md:text-sm flex-col md:ml-6"
              >
                <div className="mb-1 md:mb-2 font-bold uppercase">
                  Let`s Connect!
                </div>
                <div className="font-medium text-gray-50">
                  ragelyusuf752@gmail.com
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="mx-auto grid max-w-8xl px-2 xs:px-6 sm:px-10 xl:px-10">
        <div className="px-6 pt-6 md:pt-8 md:px-8 border-r border-l border-b border-gray-500">
          <motion.h2
            initial={{  opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-snug"
          >
            About me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="mt-4 mb-6 space-y-6 text-md md:text-md leading-normal text-gray-50"
          >
            <div className="flex flex-col">
              <p className="max-md:text-sm">
                Hi, I’m{" "}
                <span className="text-gray-1000 underline decoration-green-400 dark:text-white">
                  Agil Saputra
                </span>{" "}
                from{" "}
                <span className="text-gray-1000 underline decoration-green-400 dark:text-white">
                  Indonesia
                </span>{" "}
                working as a{" "}
                <span className="text-gray-1000 underline decoration-green-400 dark:text-white">
                  Front End Developer
                </span>{" "}
                with 1+ years of experience in creating engaging and
                user-friendly websites. My technical skills include deep
                knowledge and experience in the frontend field, I also possess
                strong soft skills, such as effective teamwork, communication,
                and problem-solving abilities. I am passionate about bringing
                ideas to life and creating digital experiences that make a
                difference in people‘s lives.
              </p>
              {/* <span className="mt-4 md:mt-6">
                Seeking new opportunities to leverage my skills and contribute
                to a dynamic team.
              </span> */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto grid md:grid-cols-2 max-w-8xl px-2 xs:px-6 sm:px-10 xl:px-10 border-gray-500 border-b">
        {/* Work Experience */}
        <div className="w-full col-span-1 border-x bg-gray-5/20 bg-center bg-dotted-light p-4 dark:border-gray-500 dark:bg-transparent md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <svg
              viewBox="0 0 15 17"
              fill="none"
              className="h-5 w-5 text-green-500 dark:text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4995 3.22847C12.735 3.94219 13.7229 5.01642 14.3309 6.30727C14.9388 7.59811 15.1378 9.04392 14.9011 10.451C14.6644 11.8581 14.0034 13.1592 13.0065 14.1801C12.0097 15.201 10.7247 15.8929 9.32372 16.1631C7.9227 16.4334 6.47256 16.269 5.16756 15.692C3.86257 15.1151 2.76505 14.1531 2.02204 12.935C1.27903 11.7169 0.926005 10.3008 1.01027 8.87643C1.09453 7.45208 1.61205 6.08749 2.4935 4.96547C2.6955 4.70847 3.0835 4.74747 3.2865 5.00447C3.5645 5.35647 3.8805 5.67647 4.2295 5.95847C4.5615 6.22747 5.0155 5.90947 5.0025 5.48247C4.97057 4.53036 5.16669 3.58441 5.5745 2.72347C6.10823 1.59984 6.97663 0.668918 8.0605 0.0584723C8.3075 -0.0815277 8.6105 0.0424723 8.7375 0.296472C9.34939 1.52444 10.3102 2.54441 11.4995 3.22847ZM11.9995 10.2905C11.9995 11.3513 11.5781 12.3688 10.8279 13.1189C10.0778 13.869 9.06037 14.2905 7.9995 14.2905C6.0865 14.2905 4.4795 12.8925 4.0895 11.1085C3.9965 10.6795 4.5295 10.4655 4.9035 10.6955C5.39124 10.9946 5.93694 11.1869 6.5045 11.2595C6.8075 11.2975 7.0355 11.0195 7.0145 10.7155C6.90456 9.20185 7.3747 7.7031 8.3295 6.52347C8.38011 6.46027 8.44694 6.412 8.52285 6.38382C8.59876 6.35564 8.6809 6.3486 8.7605 6.36347C9.67227 6.54036 10.4941 7.02894 11.0851 7.74543C11.676 8.46193 11.9993 9.3617 11.9995 10.2905Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
              Work Experience
            </div>
          </motion.div>
          <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5">
            {workExperiences.map((item, index) => (
              <motion.a
                key={item.description}
                initial={{ opacity: 0 }}
                whileInView={{  opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                target="_blank"
                href=""
                className="relative col-span-12 w-full overflow-hidden rounded-2xl border border-gray-30 bg-gradient-to-br via-white active:top-[1px] dark:border-gray-500 dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70 active:translate-y-0  transition-colors"
              >
                <WorkCard
                  company={item.company}
                  role={item.position}
                  endMonth={item.endMonth}
                  endYear={item.endYear}
                  startMonth={item.startMonth}
                  startYear={item.startYear}
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* License & Certification */}
        <div className="w-full col-span-1 border-r border-l md:border-l-0 border-t md:border-t-0 bg-gray-5/20 bg-center p-4 dark:border-gray-500 dark:bg-transparent md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <svg
              viewBox="0 0 15 17"
              fill="none"
              className="h-5 w-5 text-green-500 dark:text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4995 3.22847C12.735 3.94219 13.7229 5.01642 14.3309 6.30727C14.9388 7.59811 15.1378 9.04392 14.9011 10.451C14.6644 11.8581 14.0034 13.1592 13.0065 14.1801C12.0097 15.201 10.7247 15.8929 9.32372 16.1631C7.9227 16.4334 6.47256 16.269 5.16756 15.692C3.86257 15.1151 2.76505 14.1531 2.02204 12.935C1.27903 11.7169 0.926005 10.3008 1.01027 8.87643C1.09453 7.45208 1.61205 6.08749 2.4935 4.96547C2.6955 4.70847 3.0835 4.74747 3.2865 5.00447C3.5645 5.35647 3.8805 5.67647 4.2295 5.95847C4.5615 6.22747 5.0155 5.90947 5.0025 5.48247C4.97057 4.53036 5.16669 3.58441 5.5745 2.72347C6.10823 1.59984 6.97663 0.668918 8.0605 0.0584723C8.3075 -0.0815277 8.6105 0.0424723 8.7375 0.296472C9.34939 1.52444 10.3102 2.54441 11.4995 3.22847ZM11.9995 10.2905C11.9995 11.3513 11.5781 12.3688 10.8279 13.1189C10.0778 13.869 9.06037 14.2905 7.9995 14.2905C6.0865 14.2905 4.4795 12.8925 4.0895 11.1085C3.9965 10.6795 4.5295 10.4655 4.9035 10.6955C5.39124 10.9946 5.93694 11.1869 6.5045 11.2595C6.8075 11.2975 7.0355 11.0195 7.0145 10.7155C6.90456 9.20185 7.3747 7.7031 8.3295 6.52347C8.38011 6.46027 8.44694 6.412 8.52285 6.38382C8.59876 6.35564 8.6809 6.3486 8.7605 6.36347C9.67227 6.54036 10.4941 7.02894 11.0851 7.74543C11.676 8.46193 11.9993 9.3617 11.9995 10.2905Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
              Certificates
            </div>
          </motion.div>
          <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5">
            {certifications.map((certificate, index) => (
              <motion.a
                key={certificate.href}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                target="_blank"
                href={certificate.href}
                className="relative col-span-12 w-full overflow-hidden rounded-2xl border border-gray-30 bg-gradient-to-br via-white active:top-[1px] dark:border-gray-500 dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70  transition-colors"
              >
                <LicenseCard
                  title={certificate.title}
                  source={certificate.source}
                  startYear={certificate.startYear}
                  certificateID={certificate.certificateID}
                  startMonth={certificate.startMonth}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid md:grid-cols-2 max-w-8xl px-2 xs:px-6 sm:px-10 xl:px-10 border-gray-500 border-b">
        {/* Skills */}
        <div className="border-l border-r md:border-r-0 border-b md:border-b-0 border-gray-500 bg-gray-1000/20 p-6 md:p-8 transition-colors hover:bg-transparent ">
          <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:pr-0 mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <svg
                viewBox="0 0 17 16"
                fill="none"
                className="h-5 w-5 text-green-500 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.69968 1.52865V6.17265C6.69968 6.90165 6.40968 7.60065 5.89468 8.11665L4.67768 9.33265C5.89128 9.29107 7.10025 9.50256 8.22768 9.95365L8.72968 10.1546C10.056 10.6853 11.5095 10.8122 12.9077 10.5196L10.5047 8.11665C9.98925 7.60098 9.6997 6.90174 9.69968 6.17265V1.52865C8.70003 1.49133 7.69933 1.49133 6.69968 1.52865ZM11.1997 1.61265L11.3897 1.62765C11.4887 1.63719 11.5887 1.62694 11.6837 1.59747C11.7787 1.56801 11.867 1.51993 11.9432 1.45604C12.0195 1.39214 12.0823 1.31371 12.128 1.22531C12.1736 1.1369 12.2013 1.0403 12.2092 0.941115C12.2172 0.841933 12.2053 0.742159 12.1744 0.647604C12.1434 0.553049 12.0939 0.465603 12.0288 0.39036C11.9637 0.315117 11.8843 0.253581 11.7951 0.209336C11.706 0.165091 11.609 0.139022 11.5097 0.132648C9.30655 -0.044216 7.0928 -0.044216 4.88968 0.132648C4.69375 0.151531 4.5131 0.246682 4.3867 0.397571C4.2603 0.54846 4.19828 0.742992 4.21403 0.939196C4.22978 1.1354 4.32203 1.31755 4.47088 1.44635C4.61973 1.57514 4.81325 1.64026 5.00968 1.62765L5.19968 1.61265V6.17265C5.19968 6.50365 5.06768 6.82165 4.83368 7.05565L0.799677 11.0906C-0.696323 12.5866 -0.017323 15.2406 2.20268 15.5656C4.16068 15.8526 6.16268 16.0006 8.19968 16.0006C10.2367 16.0006 12.2387 15.8526 14.1967 15.5646C16.4167 15.2396 17.0967 12.5856 15.5997 11.0896L11.5657 7.05565C11.3315 6.82143 11.1999 6.50385 11.1997 6.17265V1.61265Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
                Skills
              </div>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 md:mt-0 border-gray-500 border-t ">
            {SkillsData.map((skill, index) => (
              <motion.div
                key={skill}
                className="py-1 md:py-2 group border-b border-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <a className="inline-block active:translate-y-[1px]">
                  <span className="text-sm md:text-md text-white transition-colors group-hover:text-green-500">
                    - {skill}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="w-full border-x col-span-1 border-r bg-gray-5/20 bg-center p-4 dark:border-gray-500 dark:bg-transparent md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <svg
              viewBox="0 0 16 18"
              fill="none"
              className="h-5 w-5 text-green-500 dark:text-white"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 2.75C4 2.02065 4.28973 1.32118 4.80546 0.805456C5.32118 0.289731 6.02065 0 6.75 0H9.25C9.97935 0 10.6788 0.289731 11.1945 0.805456C11.7103 1.32118 12 2.02065 12 2.75V3.193C12.572 3.248 13.14 3.315 13.706 3.393C15.053 3.582 16 4.75 16 6.07V9.539C16 10.665 15.306 11.73 14.17 12.079C12.218 12.678 10.146 13 8 13C5.854 13 3.781 12.678 1.83 12.079C0.694 11.73 0 10.665 0 9.539V6.07C0 4.749 0.947 3.581 2.294 3.394C2.8612 3.31511 3.42999 3.24809 4 3.193V2.75ZM10.5 2.75V3.075C8.83484 2.9748 7.16516 2.9748 5.5 3.075V2.75C5.5 2.06 6.06 1.5 6.75 1.5H9.25C9.94 1.5 10.5 2.06 10.5 2.75ZM8 9C7.73478 9 7.48043 9.10536 7.29289 9.29289C7.10536 9.48043 7 9.73478 7 10V10.01C7 10.2752 7.10536 10.5296 7.29289 10.7171C7.48043 10.9046 7.73478 11.01 8 11.01H8.01C8.27522 11.01 8.52957 10.9046 8.71711 10.7171C8.90464 10.5296 9.01 10.2752 9.01 10.01V10C9.01 9.73478 8.90464 9.48043 8.71711 9.29289C8.52957 9.10536 8.27522 9 8.01 9H8Z"
                fill="currentColor"
              ></path>
              <path
                d="M1 14.055V13.371C1.126 13.424 1.255 13.471 1.39 13.513C3.482 14.155 5.703 14.5 8 14.5C10.297 14.5 12.518 14.155 14.61 13.513C14.745 13.472 14.874 13.424 15 13.371V14.055C15 15.402 14.015 16.585 12.637 16.741C9.5554 17.0879 6.4446 17.0879 3.363 16.741C1.985 16.585 1 15.402 1 14.055Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
              Education
            </div>
          </motion.div>
          <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5">
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              viewport={{ once: true }}
              target="_blank"
              href=""
              className="col-span-12 w-full overflow-hidden rounded-2xl border border-gray-30 bg-gradient-to-br via-white active:top-[1px] dark:border-gray-500 dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70  transition-colors"
            >
              <EducationCard
                major="Undergraduate Bachelor‘s Degree of Informatics"
                institution="Amikom Yogyakarta University"
                startMonth="August"
                startYear="2023"
                endMonth=""
                endYear=""
                isCurrent={true}
                relatedCourse="Object Oriented Programming, Data Stuructures & Algorithm, Human Computer Interaction."
              />
            </motion.a>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              target="_blank"
              href=""
              className="relative col-span-12 w-full overflow-hidden rounded-2xl border border-gray-30 bg-gradient-to-br via-white active:top-[1px] dark:border-gray-500 dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70 hover:-translate-y-1 active:translate-y-0  transition-colors"
            >
              <EducationCard
                major="Mathematic & Science"
                institution="SMA Xaverius 01 Belitang"
                startMonth="August"
                startYear="2023"
                endMonth=""
                endYear=""
                isCurrent={true}
                relatedCourse=""
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* App Projects */}
      <div className="mx-auto grid md:grid-cols-2 max-w-8xl px-2 xs:px-6 sm:px-10 xl:px-10 border-gray-500 border-b bg-gradient-to-br via-white to-white dark:from-gray-800 ">
        <div className="border-x col-span-12 border-gray-500 bg-gray-1000/20 p-6 md:p-8 transition-colors hover:bg-transparent ">
          <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:pr-0">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-green-500 dark:text-white"
              >
                <path
                  d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
                App Portfoliòs
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {appProjects.map((project, index) => (
              <motion.div
                key={project.description}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.name}
                  description={project.description}
                  href={project.link}
                  skills={project.tech}
                  image={project.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Projects */}
      {/* <div className="mx-auto grid grid-cols-12 max-w-8xl px-2 xs:px-6 sm:px-10 xl:px-10 border-gray-500 border-b">
        <div className="col-span-12 border-gray-500 bg-gray-1000/20 p-6 md:p-8 transition-colors hover:bg-transparent border-x">
          <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:pr-0">
            <div className="flex items-center space-x-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[1.15rem] w-[1.15rem] text-green-500 dark:text-white"
              >
                <path
                  d="M14.5 9C14.1022 9 13.7206 8.84196 13.4393 8.56066C13.158 8.27936 13 7.89782 13 7.5C13 7.10218 13.158 6.72064 13.4393 6.43934C13.7206 6.15804 14.1022 6 14.5 6C14.8978 6 15.2794 6.15804 15.5607 6.43934C15.842 6.72064 16 7.10218 16 7.5C16 7.89782 15.842 8.27936 15.5607 8.56066C15.2794 8.84196 14.8978 9 14.5 9ZM11.5 5C11.1022 5 10.7206 4.84196 10.4393 4.56066C10.158 4.27936 10 3.89782 10 3.5C10 3.10218 10.158 2.72064 10.4393 2.43934C10.7206 2.15804 11.1022 2 11.5 2C11.8978 2 12.2794 2.15804 12.5607 2.43934C12.842 2.72064 13 3.10218 13 3.5C13 3.89782 12.842 4.27936 12.5607 4.56066C12.2794 4.84196 11.8978 5 11.5 5ZM6.5 5C6.10218 5 5.72064 4.84196 5.43934 4.56066C5.15804 4.27936 5 3.89782 5 3.5C5 3.10218 5.15804 2.72064 5.43934 2.43934C5.72064 2.15804 6.10218 2 6.5 2C6.89782 2 7.27936 2.15804 7.56066 2.43934C7.84196 2.72064 8 3.10218 8 3.5C8 3.89782 7.84196 4.27936 7.56066 4.56066C7.27936 4.84196 6.89782 5 6.5 5ZM3.5 9C3.10218 9 2.72064 8.84196 2.43934 8.56066C2.15804 8.27936 2 7.89782 2 7.5C2 7.10218 2.15804 6.72064 2.43934 6.43934C2.72064 6.15804 3.10218 6 3.5 6C3.89782 6 4.27936 6.15804 4.56066 6.43934C4.84196 6.72064 5 7.10218 5 7.5C5 7.89782 4.84196 8.27936 4.56066 8.56066C4.27936 8.84196 3.89782 9 3.5 9ZM9 0C6.61305 0 4.32387 0.948211 2.63604 2.63604C0.948211 4.32387 0 6.61305 0 9C0 11.3869 0.948211 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C9.39782 18 9.77936 17.842 10.0607 17.5607C10.342 17.2794 10.5 16.8978 10.5 16.5C10.5 16.11 10.35 15.76 10.11 15.5C9.88 15.23 9.73 14.88 9.73 14.5C9.73 14.1022 9.88804 13.7206 10.1693 13.4393C10.4506 13.158 10.8322 13 11.23 13H13C14.3261 13 15.5979 12.4732 16.5355 11.5355C17.4732 10.5979 18 9.32608 18 8C18 3.58 13.97 0 9 0Z"
                  fill="currentColor"
                />
              </svg>

              <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
                Design Portfoliòs
              </div>
            </div>
          </div>
		  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {designProjects.map((project) => (
              <ProjectCard key={project.description} title={project.name} description={project.description} href={project.link} image={project.image} skills={undefined}/>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="mx-auto grid grid-cols-12 max-w-8xl px-2 xs:px-6 sm:px-10 xl:px-10 border-gray-500 border-b ">
        <div className="col-span-12 border-x border-gray-500 bg-gray-1000/20 p-6 md:p-8 transition-colors hover:bg-transparent bg-dotted-light">
          <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:pr-0">
            <div className="flex items-center space-x-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 dark:text-white"
              >
                <path
                  d="M2 9.13689C2 13.9999 6.02 16.5909 8.962 18.9109C10 19.7289 11 20.4999 12 20.4999C13 20.4999 14 19.7299 15.038 18.9099C17.981 16.5919 22 13.9999 22 9.13789C22 4.27589 16.5 0.824893 12 5.50089C7.5 0.824893 2 4.27389 2 9.13689Z"
                  fill="currentColor"
                />
              </svg>

              <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
                Tech Stacks
              </div>
            </div>
          </div>

          <div className="flex w-full ml-2 mt-10 md:mt-16 md:ml-4 xl:ml-6">
            <span className="italic text-sm md:text-xl text-white transition-colors group-hover:text-green-500">
              Front End Technologies
            </span>
          </div>
          <div className="flex w-full mt-4">
            {frontEndSkills.map((skill) => (
              <div key={skill.name} className="active:translate-y-[1px] flex flex-col justify-center items-center">
                <Image className="h-32 md:h-32 w-auto" alt={skill.name} src={skill.icon}/>
                <span className="text-xs text-center -mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <footer className="text-center py-12">
        <p className="text-xl text-gray-500 ">Get in touch! Let&lsquo;s talk</p>
        <a
          href="mailto:ragelyusuf752@gmail.com"
          className="mt-1 md:text-2xl text-xl text-gray-400 text-md underline"
        >
          ragelyusuf752@gmail.com
        </a>
      </footer>
    </>
  );
}
