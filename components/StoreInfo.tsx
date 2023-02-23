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
        <Text variant="label" className="font-semibold mb-2">{title}</Text>

        <div className="flex flex-col pt-1">
          <div className="flex flex-row">
            <LocationIcon />
            <Text variant='body' className="font-extralight text-xs pl-2">{address}</Text>
          </div>

          <div className="flex flex-row pt-2">
            {phone && <PhoneIcon />}
            <Text variant='body' className="font-extralight text-xs pl-2">{phone}</Text>
          </div>
        </div>
      </div>
    </>
  );
};
