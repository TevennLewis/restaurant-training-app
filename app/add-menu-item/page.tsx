"use client";

import React, { useState } from "react";
import PageTitlePill from "../components/PageTitlePill";
import Input from "../components/Input";
import { BiSolidImageAdd } from "react-icons/bi";

const AddMenuItem = () => {
  return (
    <>
      <PageTitlePill title="Add Menu Item" back />

      <form className="w-full mt-10 rounded-[10px] p-5 bg-black">
        <div className="font-bold text-lg underline">Menu Item Information</div>

        <div className="flex flex-col mt-4 gap-y-5">
          <Input label="Name" placeholder="B.L.T" />
          <Input label="Price" type="number" placeholder="15.99" />
          <Input
            label="Ingredients (separated by a comma)"
            placeholder="ex. Bacon,Lettuce,Tomato"
          />
          <Input
            label="Allergies (separated by a comma)"
            placeholder="ex. Gluten,Egg"
          />
          <div className="mt-5 flex flex-col gap-y-3 font-semibold">
            <div>Add Image</div>
            <BiSolidImageAdd fill="#FB8B24" size={80} />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddMenuItem;
