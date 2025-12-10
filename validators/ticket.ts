import { z } from "zod";

export const ticketCreateSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});

export const ticketUpdateSchema = z.object({
  status: z.enum(["open", "in_progress", "resolved"]).optional(),
  notes: z.string().optional(),
});
