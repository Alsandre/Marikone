import React from "react";
import { LocationIcon, PhoneIcon } from "../icons";

export const StoreInfo = ({
  title,
  address,
  phone,
}: Record<string, string>) => {
  return (
    <>
      <div className="text-body flex flex-col items-start mb-8">
        <h1 className="font-semibold mb-2">{title}</h1>

        <div className="flex flex-col pt-1">
          <div className="flex flex-row">
            <LocationIcon />
            <h1 className="font-extralight text-xs pl-2">{address}</h1>
          </div>

          <div className="flex flex-row pt-2">
            {phone && <PhoneIcon />}
            <h1 className="font-extralight text-xs pl-2">{phone}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
