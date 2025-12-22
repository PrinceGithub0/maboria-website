import "server-only";
import { createContactMessage, listContactMessages } from "@/services/contactService";

export const ContactController = {
  create: createContactMessage,
  list: listContactMessages,
};
