import { z } from 'zod';

export const quizSchema = z.object({
  name: z.string()
}).strict();