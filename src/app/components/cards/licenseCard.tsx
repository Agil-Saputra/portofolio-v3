import { FC } from "react";
type LicenseCardProps = {
  href: string;
  title: string;
  source: string;
  startMonth: string;
  startYear: string;
  certificateID: string | undefined;
};

const LicenseCard: FC<LicenseCardProps> = ({
  title,
  href,
  source,
  startMonth,
  startYear,
  certificateID,
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className="relative col-span-12 overflow-hidden rounded-2xl border bg-gradient-to-br via-white transition-all hover:border-gray-35 active:top-[1px] dark:border-gray-500  dark:from-gray-900 dark:to-gray-800 dark:hover:border-gray-200/70 hover:-translate-y-1 active:translate-y-0 "
    >
      <div className="flex h-full items-center justify-between space-x-4 transition-colors">
        <div className="flex-shrink-0 p-4 md:px-6 md:py-4 pr-2">
          <h3 className="text-md md:text-lg font-bold leading-none">{title}</h3>
          <div className="text-sm md:text-md leading-snug text-gray-50">
            {source} ({startMonth} {startYear})
          </div>
          {certificateID && (
            <div className="mt-2 text-xs md:text-sm leading-snug text-gray-20">
              ID Credential : {certificateID}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
export default LicenseCard;
