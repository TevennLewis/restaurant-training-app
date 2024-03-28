import React from "react";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { Quiz } from "../models/quiz";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  quiz: Quiz;
}

const QuizListItem = ({ quiz }: Props) => {
  return (
    <div className="bg-black p-3 flex border border-flameOrange items-center  rounded-[10px] w-full">
      <div className="text-sm font-semibold">{quiz.name}</div>

      <div className="flex-1" />

      {quiz.pass === null && (
        <>
          <Link className="text-xs" href={`/quizzes/${quiz.id}`}>
            Take Quiz
          </Link>
          <MdKeyboardArrowRight fill="#FB8B24" />
        </>
      )}
      {quiz.pass && <IoMdCheckmarkCircle fill="#00FF00" />}
      {quiz.pass === false && <IoMdCloseCircle fill="#FF3131" />}
      {quiz.percentGrade && (
        <div className="text-base font-medium w-12 flex justify-center items-center rounded-[5px] ml-4 bg-white/10 border border-ironOrange p-1 box-content">
          {quiz.percentGrade}%
        </div>
      )}
    </div>
  );
};

export default QuizListItem;
