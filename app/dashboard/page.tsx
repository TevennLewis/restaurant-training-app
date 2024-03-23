import React from "react";
import DashMenuItems from "../components/DashMenuItems";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Quiz } from "../models/quiz";
import QuizListItem from "../components/QuizListItem";
import Link from "next/link";
import food1 from "@/public/images/pizza.jpg";
import food2 from "@/public/images/chicken-wrap.jpg";
import food3 from "@/public/images/fruit-parfe.jpg";
import food4 from "@/public/images/rice-bowl.jpg";

const Dashboard = () => {
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

  const quizzes: Quiz[] = [
    {
      id: 1,
      name: "Server Quiz",
      pass: true,
    },
    {
      id: 2,
      name: "Busser Quiz",
      pass: true,
    },
    {
      id: 3,
      name: "Line Cook Quiz",
      pass: null,
    },
    {
      id: 4,

      name: "Head Chef Quiz",
      pass: null,
    },
    {
      id: 5,
      name: "Host Quiz",
      pass: true,
    },
    {
      id: 6,
      name: "Bartender Quiz",
      pass: false,
    },
  ];

  return (
    <div className="flex flex-col p-5">
      <div className="text-2xl bg-xmasCandy rounded-full px-4 border-2 border-ironOrange py-2 w-fit font-bold">
        Dashboard
      </div>

      <div className="mt-10 mb-4 flex bg-xmasCandy p-2 rounded-[5px] border border-ironOrange items-center font-medium">
        <div>Featured Menu Items</div>

        <div className="flex-1" />

        <Link
          className="text-xs flex items-center gapx1 font-light"
          href="/menu"
        >
          View Full Menu
          <MdKeyboardArrowRight fill="#FB8B24" />
        </Link>
      </div>

      <DashMenuItems menuItems={menuItems} />

      <div className="mt-10 mb-4 bg-xmasCandy p-2 rounded-[5px] border border-ironOrange font-medium">
        My Quizzes
      </div>

      <div className="w-full bg-gradient-to-br from-xmasCandy via-ironOrange to-flameOrange to flex flex-col gap-y-2 p-3 rounded-[10px]">
        {quizzes.map(
          (quiz) =>
            quiz.pass !== null && <QuizListItem quiz={quiz} key={quiz.id} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
