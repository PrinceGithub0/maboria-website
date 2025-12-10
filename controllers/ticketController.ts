import "server-only";
import { createTicket, getTicket, listTickets, updateTicket } from "@/services/ticketService";

export const TicketController = {
  list: listTickets,
  create: createTicket,
  get: getTicket,
  update: updateTicket,
};
