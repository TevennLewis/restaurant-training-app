import { z } from 'zod';

export const gradeSchema = z.object({
  memberId: z.number(),
  quizId: z.number()
}).strict();

export const partialGradeSchema = z.object({
  grade: z.number()
}).partial().strict();