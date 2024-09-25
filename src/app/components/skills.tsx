import { Badge } from "@/components/ui/badge";

type Props = {};

export default function Skills({}: Props) {
  const technicalSkills = [
    "React",
    "Redux",
    "Next.js",
    "Vue.js",
    "Vuex",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Sass",
    "Shadcn",
    "Ant Design",
    "Material UI",
    "Strapi",
    "Node.js",
    "Firebase",
  ];

  const softSkills = ["Problem Solving", "Teamwork and collaboration", "Time management", "Attention to detail", "Empathy and understanding."];

  const tools = ["Github", "Figma", "Zeplin", "Postman", "Visual Studio Code"];
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-4">Skills 💻</h3>
      <div className="mt-4">
        <h4 className="font-bold text-xl mb-2">Technical Skills</h4>
        <div className="flex flex-wrap items-center gap-1 ">
          {technicalSkills.map((item) => (
            <Badge className="rounded-sm px-3 ">{item}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-bold text-xl mb-2">Soft Skills</h4>
        <div className="flex flex-wrap items-center gap-1 ">
          {softSkills.map((item) => (
            <Badge className="rounded-sm px-3 ">{item}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-bold text-xl mb-2">Tools</h4>
        <div className="flex flex-wrap items-center gap-1 ">
          {tools.map((item) => (
            <Badge className="rounded-sm px-3 ">{item}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
