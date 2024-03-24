import React from "react";
import PageTitlePill from "../components/PageTitlePill";
import food1 from "@/public/images/pizza.jpg";
import food2 from "@/public/images/chicken-wrap.jpg";
import food3 from "@/public/images/fruit-parfe.jpg";
import food4 from "@/public/images/rice-bowl.jpg";
import MenuItemCard from "../components/MenuItemCard";

const Menu = () => {
  const menuItems = [
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
      name: "Fruit Parfe",
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
    <div className="flex flex-col p-5">
      <PageTitlePill title="Menu" />

      <div className="flex flex-col gap-y-3 p-5 rounded-[10px] mt-10 w-full bg-black items-center">
        {menuItems.map((item) => (
          <MenuItemCard menuItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
