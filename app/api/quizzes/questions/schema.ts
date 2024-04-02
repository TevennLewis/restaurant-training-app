import { z } from 'zod';

export const questionSchema = z.object({
  question: z.string(),
  answer: z.string(),
  options: z.array(z.string()),
  quizId: z.number()
}).strict();

export const partialQuestionSchema = questionSchema.partial().strict();