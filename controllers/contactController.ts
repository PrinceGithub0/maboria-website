import "server-only";
import { createContactMessage } from "@/services/contactService";

export const ContactController = {
  create: createContactMessage,
};
