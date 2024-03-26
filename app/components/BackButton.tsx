"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();

  return (
    <IoMdArrowRoundBack
      fill="#FB8B24"
      size={30}
      onClick={() => router.back()}
    />
  );
};

export default BackButton;
