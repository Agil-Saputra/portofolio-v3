import { FC, ReactElement } from "react";
type Props = {
  title: string;
  href: string;
  children: ReactElement;
};

const ContactIconButton: FC<Props> = ({ title, href, children }) => {
  return (
    <a
      title={title}
      href={href}
      target="_blank"
      className="group relative flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-30 transition-colors hover:border-green-400 active:top-[1px] dark:border-gray-500 dark:hover:border-gray-200"
    >
      {children}
    </a>
  );
};
export default ContactIconButton;
