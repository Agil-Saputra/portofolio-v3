import { FC } from "react";
type EducationCardProps = {
  major: string;
  institution: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  relatedCourse : string | undefined;
  isCurrent : boolean;
};

const EducationCard: FC<EducationCardProps> = ({
  major,
  institution,
  endMonth,
  endYear,
  startMonth,
  startYear,
  isCurrent,
  relatedCourse
}) => {
  return (
    <a
      target="_blank"
      className="relative col-span-12 overflow-scroll no-scrollbar rounded-2xl border bg-gradient-to-br via-white transition-all hover:border-gray-35 active:top-[1px] dark:border-gray-500  dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70  hover:-translate-y-1 active:translate-y-0 "
    >
      <div className="flex h-full items-center justify-between space-x-4 transition-colors">
        <div className="flex-shrink-0 p-4 md:px-6 md:py-4 pr-2">
          <h3 className="text-md md:text-lg font-bold leading-none">{major}</h3>
          <div className="text-sm md:text-md leading-snug text-gray-50">
            {institution} ({startMonth} {startYear} - {isCurrent ? 'Now' : (`${endMonth} ${endYear}`)})
          </div>
          {relatedCourse && (
			<div className="text-sm mt-2 md:text-md leading-snug text-gray-50 max-w-[50ch]">
            Related Course : {relatedCourse}
          </div>
		  )}
        </div>
      </div>
    </a>
  );
};
export default EducationCard;
