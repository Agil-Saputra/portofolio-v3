import { FC } from "react";
type LicenseCardProps = {
  title: string;
  source: string;
  startMonth: string;
  startYear: string;
  certificateID: string | undefined;
};

const LicenseCard: FC<LicenseCardProps> = ({
  title,
  source,
  startMonth,
  startYear,
}) => {
  return (
      <div className="flex h-full items-center justify-between space-x-4 transition-colors">
        <div className="flex-shrink-0 p-4 md:px-6 md:py-4 pr-2">
          <h3 className="text-md md:text-lg font-bold leading-none">{title}</h3>
          <div className="text-sm md:text-md leading-snug text-gray-50">
            {source} 
          </div>
            <div className="mt-2 text-xs md:text-sm leading-snug text-gray-20">
              {startMonth} {startYear}
            </div>
        </div>
      </div>
  );
};
export default LicenseCard;
