import React, { CSSProperties } from "react";
import DashMenuItems from "../components/DashMenuItems";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { Quiz } from "../models/quiz";
import QuizListItem from "../components/QuizListItem";

const Dashboard = () => {
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
      <div className="text-2xl font-bold">Dashboard</div>

      <div className="my-4 font-medium">Menu Items</div>

      <DashMenuItems />

      <div className="my-4 font-medium">My Quizzes</div>

      <div className="w-full bg-ironOrange flex flex-col gap-y-2 p-3 rounded-[10px]">
        {quizzes.map(
          (quiz) =>
            quiz.pass !== null && <QuizListItem quiz={quiz} key={quiz.id} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
