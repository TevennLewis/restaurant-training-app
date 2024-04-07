import { z } from 'zod';

export const gradeSchema = z.object({
  memberId: z.number(),
  quizId: z.number()
}).strict();

export const extendedGradeSchema = gradeSchema.extend({
  grade: z.number()
}).strict();