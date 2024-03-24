import React from "react";

interface Props {
  title: string;
}

const PageTitlePill = ({ title }: Props) => {
  return (
    <div className="text-2xl bg-black rounded-full px-4 border-2 border-ironOrange py-2 w-fit font-bold">
      {title}
    </div>
  );
};

export default PageTitlePill;
