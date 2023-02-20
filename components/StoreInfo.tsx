import React from "react";
import { LocationIcon, PhoneIcon } from "../icons";
import { Text } from "./Text";

export const StoreInfo = ({
  title,
  address,
  phone,
}: Record<string, string>) => {
  return (
    <>
      <div className="text-body flex flex-col items-start mb-8">
        <Text varian="h1" styles="font-semibold mb-2" value={title} />

        <div className="flex flex-col pt-1">
          <div className="flex flex-row">
            <LocationIcon />
            <Text styles="font-extralight text-xs pl-2" value={address} />
          </div>

          <div className="flex flex-row pt-2">
            {phone && <PhoneIcon />}
            <Text  styles="font-extralight text-xs pl-2" value={phone} />
          </div>
        </div>
      </div>
    </>
  );
};
