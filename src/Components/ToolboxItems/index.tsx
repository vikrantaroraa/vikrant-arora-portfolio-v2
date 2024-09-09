import TechIcon from "@/Components/TechIcon";
import React, { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface ToolboxItem {
  title: string;
  iconType: ElementType;
}

interface ToolboxItemsProps {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ToolboxItemsProps) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName,
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
