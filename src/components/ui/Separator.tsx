import React from "react";
import { cn } from "../../utils/cn";

type SeparatorProps = React.HTMLAttributes<HTMLDivElement>;

const Separator = ({ className }: SeparatorProps) => {
  return <div className={cn("w-full h-[1px] bg-gray-200", className)}></div>;
};

export default Separator;
