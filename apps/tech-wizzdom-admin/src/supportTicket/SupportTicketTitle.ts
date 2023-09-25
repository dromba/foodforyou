import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "content";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.content?.toString() || String(record.id);
};
