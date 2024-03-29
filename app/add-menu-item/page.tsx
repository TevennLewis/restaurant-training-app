"use client";

import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import PageTitlePill from "../components/PageTitlePill";
import Input from "../components/Input";
import { BiSolidImageAdd } from "react-icons/bi";
import Button from "../components/Button";

const AddMenuItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    // handle submit logic
    event.preventDefault();

    const formattedAllergies = allergies
      .split(",")
      .map((allergy) => allergy.trim());

    const formattedIngredients = ingredients
      .split(",")
      .map((ingredient) => ingredient.trim());

    const data = {
      name: name,
      price: parseFloat(price),
      ingredients: formattedIngredients,
      allergies: formattedAllergies,
      img: "",
    };

    await fetch("api/menuitems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <PageTitlePill title="Add Menu Item" back />

      <form
        onSubmit={handleSubmit}
        className="w-full mt-10 rounded-[10px] p-5 bg-black"
      >
        <div className="font-bold text-lg underline">Menu Item Information</div>

        <div className="flex flex-col mt-4 gap-y-5">
          <Input
            label="Name"
            id="name"
            required
            value={name}
            name="name"
            placeholder="B.L.T"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
          <Input
            label="Price"
            id="price"
            required
            value={price}
            name="price"
            placeholder="15.99"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPrice(event.target.value)
            }
          />
          <Input
            label="Ingredients (separated by a comma)"
            placeholder="ex. Bacon,Lettuce,Tomato"
            id="ingredients"
            required
            value={ingredients}
            name="ingredients"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setIngredients(event.target.value)
            }
          />
          <Input
            label="Allergies (separated by a comma)"
            placeholder="ex. Gluten,Egg"
            id="allergies"
            value={allergies}
            name="allergies"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setAllergies(event.target.value)
            }
          />
          <div className="mt-5 flex flex-col gap-y-3 font-semibold">
            <div>Add Image</div>
            <BiSolidImageAdd fill="#FB8B24" size={80} />
          </div>
        </div>
        <div className=" w-full flex justify-center mt-10">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default AddMenuItem;
