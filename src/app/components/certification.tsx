import { Badge } from "@/components/ui/badge";
import React from "react";

type Props = {};

export default function Certification({}: Props) {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold">Certification </h3>

      <div className="w-full mt-6">
        <div className="flex items-start justify-between w-full max-md:flex-col">
          <div className="flex items-start gap-4">
            {/* <Image
              src={AmikomLogo}
              alt="Universitas Amikom Yogyakarta"
              className="w-14 h-14 object-cover rounded-full"
            /> */}

            <div>
              <h3 className="capitalize text-xl font-bold">
            
              </h3>
              <p className="text-md capitalize">
                Undergraduate Bachelor's Degree of Informatics
              </p>
            </div>
          </div>

            <Badge className="text-sm rounded-sm">
              See Credentials
            </Badge>
        </div>
      </div>
    </div>
  );
}
