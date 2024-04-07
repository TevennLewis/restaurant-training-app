import { z } from 'zod';

export const gradeSchema = z.object({
  grade: z.number(),
  memberId: z.number(),
  quizId: z.number()
}).strict();