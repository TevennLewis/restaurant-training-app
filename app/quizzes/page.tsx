import React from "react";
import PageTitlePill from "../components/PageTitlePill";
import SectionTitle from "../components/SectionTitle";
import QuizListItem from "../components/QuizListItem";
import { Quiz } from "../models/quiz";

const QuizzesPage = () => {
  const quizzes: Quiz[] = [
    {
      id: 1,
      name: "Server Quiz",
      pass: true,
      percentGrade: 96,
    },
    {
      id: 2,
      name: "Busser Quiz",
      pass: true,
      percentGrade: 100,
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
      percentGrade: 100,
    },
    {
      id: 6,
      name: "Bartender Quiz",
      pass: false,
      percentGrade: 68,
    },
  ];

  const assignedQuizzes = [
    {
      id: 1,
      name: "Bartender Quiz",
      pass: null,
    },
    {
      id: 2,
      name: "Assistant Manager Quiz",
      pass: null,
    },
  ];

  return (
    <div>
      <PageTitlePill title="Quizzes" />

      <SectionTitle className="mt-10 mb-4">
        <div>Assigned Quizzes</div>
      </SectionTitle>

      <div className="w-full bg-gradient-to-br from-rubyRed via-plumPurple to-black  to flex flex-col gap-y-2 p-3 rounded-[10px]">
        {assignedQuizzes.map((quiz) => (
          <QuizListItem quiz={quiz} key={quiz.id} />
        ))}
      </div>

      <SectionTitle className="mt-10 mb-4">
        <div>Quiz History</div>
      </SectionTitle>

      <div className="w-full bg-gradient-to-br from-black via-plumPurple to-rubyRed  to flex flex-col gap-y-2 p-3 rounded-[10px]">
        {quizzes.map(
          (quiz) =>
            quiz.pass !== null && <QuizListItem quiz={quiz} key={quiz.id} />
        )}
      </div>
    </div>
  );
};

export default QuizzesPage;
