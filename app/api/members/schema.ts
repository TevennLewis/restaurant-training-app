import { z } from 'zod';

export const memberSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  isAdmin: z.boolean()
}).strict();

export const partialMemberSchema = memberSchema.extend({
  profilePic: z.string()
}).partial().strict();
// .superRefine(({ confirmPassword, password }, ctx) => {
//   if (confirmPassword !== password) {
//     ctx.addIssue({
//       code: 'custom',
//       message: 'Passwords did not match'
//     });
//   }
