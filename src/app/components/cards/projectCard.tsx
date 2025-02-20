import { FC } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
type ProjectCardProps = {
  title: string;
  description: string;
  skills: string[] | undefined;
  href: string | undefined;
  image: StaticImageData;
};

const ProjectCard: FC<ProjectCardProps> = ({
  description,
  href,
  skills,
  title,
  image,
}) => {
	
  return (
    <div className="relative flex h-full flex-col items-start bg-white/50 p-4 md:p-6 transition-colors group dark:bg-gray-950/50 border overflow-hidden rounded-lg hover:dark:border-gray-500 trnasition-all">
      <Image
        alt={title}
        loading="lazy"
        decoding="async"
        data-nimg="1"
        className="rounded-lg object-contain object-top w-full "
        src={image}
      />
      <div className="flex w-full mt-4">
        <h2 className="text-md text-gray-20 md:text-lg lg:text-xl font-bold tracking-snug">
          {title}
        </h2>
      </div>
      <div className="flex w-full mt-2">
        <p className="line-clamp-7 text-sm md:text-md leading-normal text-gray-40">
          {description}
        </p>
      </div>
      <div className="flex w-full mt-2 md:mt-4">
        <div className="flex flex-wrap w-full">
          {skills &&
            skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center mr-2 mt-2 bg-gray-10 dark:bg-gray-700 text-gray-20 dark:text-gray-40 rounded-md px-2 py-1 text-xs"
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
      <a
        href={href}
        className="mt-4 md:mt-6 cursor-pointer inline-flex items-center space-x-2 rounded-lg border border-gray-30 bg-white py-2 pl-2.5 pr-2 transition-colors group-hover:border-gray-40 dark:border-gray-500 dark:bg-gray-900 dark:group-hover:border-gray-200"
      >
        <div className="text-sm font-bold leading-none text-gray-1000 dark:text-white">
          View detail
        </div>
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-40 transition-colors group-hove:border-green-500 group-hover:bg-green-500 dark:border-gray-200 dark:group-hover:border-green-400 dark:group-hover:bg-green-400">
          <svg
            viewBox="0 0 8 8"
            fill="none"
            className="h-2 w-2 text-gray-100 transition-colors group-hover:text-white dark:text-white dark:group-hover:text-gray-1000"
          >
            <path
              d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </a>
	  <svg
          width="266"
          height="231"
          viewBox="0 0 266 231"
          fill="none"
          className="absolute text-gray-20 dark:text-gray-500/80 -bottom-6 -right-12 opacity-20 group-hover:opacity-60"
        >
          <path
            d="M205.039 229L265 84.658C238.694 55.5212 205.977 41.2427 166.69 41.9859L106.348 187.663C143.186 182.775 175.877 196.659 205.039 229ZM163.293 41.9883L141.108 43.2969L133.59 61.72L155.773 59.6417L163.293 41.9883ZM154.464 62.8602L132.462 64.3611L124.773 82.7842L147.127 80.7156L154.464 62.8602ZM145.816 83.9124L123.835 85.2113L116.113 103.464L138.479 101.758L145.816 83.9124ZM137.179 104.953L114.985 106.276L107.479 124.504L129.659 122.62L137.179 104.953ZM128.531 125.625L106.348 126.943L98.8186 145.186L121.182 143.3L128.531 125.625ZM119.693 147.047L97.4979 148.38L89.9922 166.803L112.173 164.917L119.693 147.047ZM110.842 168.112L88.8496 169.444L81.1514 187.843L103.502 185.767L110.842 168.112ZM117.809 41.0406L110.842 57.7799L131.331 56.0865L138.298 39.5613L117.809 41.0406Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M122.695 77.3191L129.469 60.7819L108.978 62.2732L102.013 79.0029L122.695 77.3191ZM114.217 97.616L121.182 80.8864L100.512 82.5702L93.7379 99.1074L114.217 97.616Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M91.8518 103.644L84.707 120.374L105.581 118.68L112.341 101.951L91.8518 103.644Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M82.8305 124.867L76.0706 141.585L96.7402 139.937L103.524 123.183L82.8305 124.867ZM74.377 145.186L67.6147 161.903L88.3083 160.21L95.251 143.48L74.377 145.186Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M79.4578 181.25L86.4006 164.713L65.9331 166.204L58.9663 182.753L79.4578 181.25ZM116.871 31.8375L99.574 32.5952L93.377 47.451L110.852 46.4913L116.871 31.8375Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M90.7356 54.0106L84.5362 68.6741L102.013 67.736L108.052 53.2553L90.7356 54.0106ZM82.2773 74.1368L76.2631 88.9806L93.7379 88.0425L99.7545 73.5619L82.2773 74.1368Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M90.928 94.6141L73.4508 95.1673L67.4343 110.023L84.9331 109.097L90.928 94.6141Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M64.6124 116.614L58.413 131.458L76.0802 130.532L82.0872 115.883L64.6124 116.614ZM56.3249 136.911L50.3083 151.382L67.6051 150.648L73.8021 135.985L56.3249 136.911Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M58.9663 171.689L64.9829 157.027L47.6861 157.773L41.4915 172.401L58.9663 171.689ZM82.2772 26.3772L77.9663 36.9081L91.8639 36.3308L96.3793 25.6315L82.2772 26.3772Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M73.4508 47.6194L69.1278 58.1407L83.035 57.5995L87.5505 46.8761L73.4508 47.6194ZM64.9829 67.748L60.6599 78.2789L74.7716 77.894L79.2653 66.8099L64.9829 67.748Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M70.4365 88.0449L56.3249 88.8002L51.8214 99.3311L65.9331 98.9823L70.4365 88.0449Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M47.5081 110.023L43.0023 120.747L57.2968 120.181L61.6198 109.265L47.5081 110.023ZM39.0522 130.339L34.7171 141.053L48.8288 140.49L53.1422 129.584L39.0522 130.339Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M30.2233 151.37L25.8763 162.096L39.9783 161.53L44.4938 150.636L30.2233 151.37ZM76.0802 20.1904L79.8403 11.1605L69.1279 12.6711L65.5482 21.499L76.0802 20.1904Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M60.275 33.9061L56.5173 42.7557L67.2202 41.4327L70.9778 32.2344L60.275 33.9061ZM51.8214 54.2247L48.0614 63.0526L58.7738 61.7416L62.7264 52.5433L51.8214 54.2247Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M43.1731 75.2553L39.413 84.1048L49.9354 82.7818L53.8855 73.5619L43.1731 75.2553Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M34.3443 96.5096L30.7887 105.325L41.299 104.026L45.0687 95.0086L34.3443 96.5096ZM25.8763 116.797L22.3207 125.625L32.8335 124.314L36.5911 115.101L25.8763 116.797Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M17.0499 137.847L13.6627 146.506L24.1947 145.354L27.9548 136.153L17.0499 137.847ZM56.3249 1.7553L53.7051 7.77366L61.7641 7.58123L64.6028 1L56.3249 1.7553Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M47.6885 22.8099L45.0591 29.0159L52.9617 28.8235L55.5791 22.2567L47.6885 22.8099ZM39.2326 42.9144L36.7836 49.1204H44.4818L47.1136 42.5416L39.2326 42.9144Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M30.5746 63.9883L27.9524 70.175H35.8454L38.6576 63.5938L30.5746 63.9883Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M21.7458 85.4013L19.1139 91.4197L27.0045 91.2393L29.6267 85.0405L21.7458 85.4013ZM13.2898 105.708L10.658 111.907L18.5606 111.726L21.3608 105.316L13.2898 105.708Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M4.44897 126.763L2 132.983L9.90263 132.766L12.532 126.188L4.44897 126.763Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M176.084 112.46L195.252 66.4154C185.861 63.2089 173.443 61.9124 158.044 62.2732L139.041 108.149C153.144 107.572 165.562 109.107 176.084 112.46Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M239.428 88.4153C230.782 79.5778 220.62 73.3815 208.982 69.6098L189.426 116.797L202.578 122.25C207.634 124.304 213.471 128.458 220.235 134.847L239.428 88.4153Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M214.613 148.019C205.955 139.35 195.625 133.524 183.782 130.339L164.987 175.629C175.88 179.4 186.051 185.597 195.827 193.862L214.613 148.019Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M152.015 170.741L170.236 126.763C158.766 123.003 146.381 121.502 133.217 122.44L114.612 167.005C125.7 166.406 138.106 167.751 152.015 170.741Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>
    </div>
  );
};
export default ProjectCard;
