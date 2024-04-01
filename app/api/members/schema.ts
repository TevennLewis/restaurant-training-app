import { z } from 'zod';

export const memberSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  isAdmin: z.boolean()
}).strict();

export const partialMemberSchema = memberSchema.extend({
  profilePic: z.string(),
  teamId: z.number()
}).partial().strict();
