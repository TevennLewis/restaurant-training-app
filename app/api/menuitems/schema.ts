import { z } from 'zod';

export const menuItemSchema = z.object({
  name: z.string().min(1),
  price: z.number(),
  ingredients: z.array(z.string()),
  allergies: z.array(z.string()),
  img: z.string(),
  teamId: z.number()
}).strict();

export const partialMenuItemSchema = menuItemSchema.partial().strict();