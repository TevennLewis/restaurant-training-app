"use client";

import React, { useState } from "react";
import food1 from "@/public/images/pizza.jpg";
import food2 from "@/public/images/chicken-wrap.jpg";
import food3 from "@/public/images/fruit-Parfait.jpg";
import food4 from "@/public/images/rice-bowl.jpg";
import { MenuItem } from "../models/menu-item";
import FlashCard from "../components/FlashCard";
import PageTitlePill from "../components/PageTitlePill";
import Button from "../components/Button";

const PracticePage = () => {
  const [allFlipped, setAllFlipped] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Pizza",
      price: 13.99,
      ingredients: [
        "pepperoni",
        "mozarella cheese",
        "mushrooms",
        "tomato sauce",
      ],
      allergies: ["gluten", "dairy"],
      img: food1,
    },
    {
      id: 2,
      name: "Chicken Wrap",
      price: 9.99,
      ingredients: [
        "fried chicken",
        "flour tortilla",
        "lettuce",
        "buttermilk ranch",
      ],
      allergies: ["gluten"],
      img: food2,
    },
    {
      id: 3,
      name: "Fruit Parfait",
      price: 7.99,
      ingredients: [
        "raspberries",
        "blueberries",
        "blackberries",
        "greek yogurt",
        "vanilla extract",
      ],
      allergies: ["citrus", "dairy"],
      img: food3,
    },
    {
      id: 4,
      name: "Stirfry Ricebowl",
      price: 15.99,
      ingredients: [
        "steak",
        "grilled chicken",
        "scallions",
        "jasmine rice",
        "soy sauce",
        "teriyaki sauce",
      ],
      allergies: ["soy"],
      img: food4,
    },
  ];

  return (
    <div className="w-full flex p-5 flex-col">
      <PageTitlePill title="Practice" back />

      <div className="mt-10 mb-4 flex bg-black p-5 rounded-[5px] text-xs justify-center font-medium">
        <div className="flex items-center w-full flex-col">
          <div className="text-base font-semibold">Flash Card Game:</div>

          <div className="text-center mb-5">
            Click on each card to reveal the relevant ingredients, food
            allergies, and price! If you would like to start with the details
            first and guess the image, tap or click the button below
          </div>

          <Button
            variant="secondary"
            type="button"
            onClick={() => setAllFlipped(!allFlipped)}
          >
            Flip All Cards
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-6 items-center">
        {menuItems.map((item) => (
          <FlashCard allFlip={allFlipped} menuItem={item} />
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
