import { z } from "zod";

export const serviceCreateSchema = z.object({
  serviceType: z.string().min(3),
  description: z.string().min(10),
  files: z.string().optional(),
});

export const serviceUpdateSchema = z.object({
  status: z.enum(["open", "in_progress", "resolved"]).optional(),
  notes: z.string().optional(),
});
