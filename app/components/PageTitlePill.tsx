import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import BackButton from "./BackButton";
interface Props {
  title: string;
  back?: boolean;
}

const PageTitlePill = ({ title, back }: Props) => {
  return (
    <div className="flex gap-x-2 items-center">
      {back && <BackButton />}
      {back && <div className="flex-1" />}

      <div className="text-2xl bg-black rounded-full px-4 border-2 border-ironOrange py-2 w-fit font-bold">
        {title}
      </div>
    </div>
  );
};

export default PageTitlePill;
