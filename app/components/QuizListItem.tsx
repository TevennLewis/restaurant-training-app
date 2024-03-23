import React from "react";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { Quiz } from "../models/quiz";

interface Props {
  quiz: Quiz;
}

const QuizListItem = ({ quiz }: Props) => {
  return (
    <div className="bg-black p-3 flex items-center h-10 rounded-[10px] w-full">
      <div>{quiz.name}</div>

      <div className="flex-1" />

      {quiz.pass ? (
        <IoMdCheckmarkCircle fill="#00FF00" />
      ) : (
        <IoMdCloseCircle fill="#FF3131" />
      )}
    </div>
  );
};

export default QuizListItem;
