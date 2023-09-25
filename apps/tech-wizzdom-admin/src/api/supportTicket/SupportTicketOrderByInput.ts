import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
