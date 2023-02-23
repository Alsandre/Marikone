import { type } from "os";
import React from "react";

type TTypography = "title" | "subtitle" | "label" | "body";

type TText = {
  variant?: TTypography;
  children: React.ReactNode;
  className?: string;
};

export const Text = ({ children, variant, className }: TText) => {
  switch (variant) {
    case "title":
      return <h1 className={`font-light text-2xl italic${className}`}>{children}</h1>;
    case "subtitle":
      return <h2 className={`font-medium text-lg ${className}`}>{children}</h2>;
    case "label":
      return <p className={`font-medium text-sm${className}`}>{children}</p>;
    case "body":
      return <p className={`font-light text-sm${className}`}>{children}</p>;
    default:
      return <p className={className}>{children}</p>;
  }
};
