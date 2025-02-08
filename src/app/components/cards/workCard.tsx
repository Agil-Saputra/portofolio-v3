import { FC } from "react";

type WorkCardProps = {
	href : string | undefined,
	role : string,
	company : string,
	startMonth : string,
	startYear : string,
	endMonth : string,
	endYear: string
};

const WorkCard: FC<WorkCardProps> = ({role, href, company, endMonth, endYear, startMonth, startYear}) => {
  return (
    <a
      target="_blank"
      href={href}
      className="relative col-span-12 overflow-hidden rounded-2xl border border-gray-30 bg-gradient-to-br via-white transition-all active:top-[1px] dark:border-gray-500 dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70 hover:-translate-y-1 active:translate-y-0  "
    >
      <div className="flex h-full items-center justify-between space-x-4 transition-colors ">
        <div className="flex-shrink-0 p-4 md:px-6 md:py-4 pr-2">
          <h3 className="text-md md:text-lg font-bold leading-none">
            {role}
          </h3>
          <div className="text-sm md:text-md leading-snug text-gray-50">
            {company}
          </div>
          <div className="mt-2 text-xs md:text-sm italic leading-snug text-gray-50">
            {startMonth} {startYear} - {endMonth} {endYear}
          </div>
        </div>
      </div>
    </a>
  );
};
export default WorkCard;
