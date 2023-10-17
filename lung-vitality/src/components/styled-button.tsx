import { cn } from "@/lib/utils";
import React from "react";

type Props = { title: string; className?: string };

const StyledButton = ({ title, className }: Props) => {
  return (
    <div
      className={cn(
        "bg-main rounded-md px-5 py-2 text-primary-foreground",
        className,
      )}
    >
      {title}
    </div>
  );
};

export default StyledButton;
