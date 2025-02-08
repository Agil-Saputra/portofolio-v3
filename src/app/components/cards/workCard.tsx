import { FC } from "react";
import { motion } from "framer-motion";

type WorkCardProps = {
  role: string;
  company: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
};

const WorkCard: FC<WorkCardProps> = ({
  role,
  company,
  endMonth,
  endYear,
  startMonth,
  startYear,
}) => {
  return (

      <div className="flex h-full items-center justify-between space-x-4 transition-colors ">
        <div className="flex-shrink-0 p-4 md:px-6 md:py-4 pr-2">
          <h3 className="text-md md:text-lg font-bold leading-none">{role}</h3>
          <div className="text-sm md:text-md leading-snug text-gray-50">
            {company}
          </div>
          <div className="mt-2 text-xs md:text-sm italic leading-snug text-gray-50">
            {startMonth} {startYear} - {endMonth} {endYear}
          </div>
        </div>
      </div>
  );
};
export default WorkCard;
