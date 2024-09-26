import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import kudataLogo from "@/assets/kudata-logo.png";
import riSoftware from "@/assets/ri-software-logo.png";
import jiss from "@/assets/jiss-logo.png";

export default function workExperience() {
  const workExperiences = [
    {
      company: "Kudata",
      position: "Front End Engineer",
      period: "June 2024 - Present",
      description:
        'I integrated Google Single Sign-On (SSO) for user login and registration, developed a detailed header for survey previews, and implemented a Forgot Password feature to enhance user experience. Additionally, I built a user email verification system and implemented identity verification with KTP, both integrated with the backend API.',
      type: "Part Time",
      logo: kudataLogo,
    },
    {
      company: "Jasa Inti Solusi Sukses",
      position: "Front End Developer",
      period: "June 2024 - Present",
      description:
        "Develop cutting-edge business sites with Next.js for a sleek, efficient, and user-friendly online presence. Maintain and update websites proactively for optimal performance and user satisfaction. customize sites precisely to align with company vision and objectives & Manage the entire developmental lifecycle for a seamless, high-quality website experience from development to deployment.",
      type: "Full Time",
      logo: jiss,
    },
    {
      company: "RI Software",
      position: "Front End Developer",
      period: "June 2024 - Present",
      description:
        "In my role, I convert Figma designs into React TypeScript components using Zeplin, ensuring a smooth design-to-code transition. I prioritize clean code principles to maintain a robust codebase and facilitate effective planning by scheduling meetings for task discussions. Additionally, I submit daily pull requests on GitHub and provide project reports to ensure transparency and seamless collaboration.",
      type: "Internship",
      logo: riSoftware,
    },
  ];
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold">Work Experience 💼</h3>
      {workExperiences.map((item, index) => (
        <div className="w-full mt-6" key={index}>
          <div className="flex items-start justify-between w-full max-md:flex-col">
            <div className="flex items-start gap-4">
              <Image
                alt={item.company}
                src={item.logo}
                className="w-14 h-14 p-1 object-cover rounded-full border"
              />
              <div>
                <h3 className="capitalize text-xl font-bold">{item.company}</h3>
                <p className="text-md capitalize">{item.position}</p>
              </div>
            </div>

            <div className="flex flex-col md:items-end max-md:mt-4">
              <Badge className="rounded-sm transition-all ease-in-out duration-200 w-fit">
                {item.type}
              </Badge>
              <p className="flex items-center gap-2 mt-1 text-sm">
                {item.period}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
