import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: Props) => {
  return (
    <div
      className={` bg-black p-2 flex items-center rounded-[5px] font-medium ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
