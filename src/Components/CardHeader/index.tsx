import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:px-10 md:py-8", className)}>
      <div className="flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/60 lg:max-w-xs lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
