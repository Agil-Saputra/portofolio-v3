import React from "react";
import Image from "next/image";
import AmikomLogo from "@/assets/amikom-logo.jpeg"
import * as motion from "framer-motion/client";

export default function Education() {
  return (
    <div className="mt-16">
      <motion.h3 initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y: 0}} transition={{delay: 0.1}} viewport={{once : true}} className="text-2xl font-bold">Education 🎓</motion.h3>

      <motion.div initial={{opacity : 0, y : 100}} whileInView={{opacity : 1, y: 0}} transition={{delay: 0.1}} viewport={{once : true}} className="w-full mt-6">
        <div className="flex items-start justify-between w-full max-md:flex-col">
          <div className="flex items-start gap-4">
		  <Image src={AmikomLogo} alt="Universitas Amikom Yogyakarta" className="w-14 h-14 object-cover rounded-full" />

            <div>
              <h3 className="capitalize text-xl font-bold">
                Universitas Amikom Yogyakarta
              </h3>
              <p className="text-md capitalize">
                Undergraduate Bachelor&lsquo;s Degree of Informatics
              </p>
            </div>
          </div>

          <div className="flex flex-col md:items-end">
            <p className="flex items-center gap-2 mt-1 text-sm">
              August 2023 - Present
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm">
			<span className="font-bold">Related Courses : </span>
			Object Oriented Programming, Data Stuructures & Algorithm, Human Computer Interaction.
		</p>
      </motion.div>
    </div>
  );
}
