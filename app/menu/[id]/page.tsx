import { MenuItem } from "@/app/models/menu-item";
import React from "react";
import food1 from "@/public/images/pizza.jpg";
import food2 from "@/public/images/chicken-wrap.jpg";
import food3 from "@/public/images/fruit-Parfait.jpg";
import food4 from "@/public/images/rice-bowl.jpg";
import PageTitlePill from "@/app/components/PageTitlePill";
import MenuItemDetailsCard from "@/app/components/MenuItemDetailsCard";

interface Props {
  menuItem: MenuItem;
  params: { id: string };
}

const MenuItemDetails = ({ menuItem, params }: Props) => {
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

  const menuItemDetails = menuItems.find(
    (item) => item.id === parseInt(params.id)
  );

  return (
    <>
      {menuItemDetails && (
        <div className="w-full p-5 ">
          <div className="w-full bg-gradient-to-br flex flex-col p-4 from-plumPurple via-rubyRed to-ironOrange rounded-[10px]">
            <PageTitlePill back title={menuItemDetails.name} />

            <MenuItemDetailsCard menuItemDetails={menuItemDetails} />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItemDetails;
