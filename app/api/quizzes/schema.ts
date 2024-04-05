import { z } from 'zod';

export const quizSchema = z.object({
  name: z.string(),
  teamId: z.number()
}).strict();