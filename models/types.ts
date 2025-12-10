export type Role = "admin" | "client";

export type Ticket = {
  id: string;
  clientId: string;
  title: string;
  description: string;
  status: "open" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt: string;
  notes?: string | null;
};

export type ServiceRequest = {
  id: string;
  clientId: string;
  serviceType: string;
  description: string;
  files?: string | null;
  status: "open" | "in_progress" | "resolved";
  createdAt: string;
  updatedAt: string;
  notes?: string | null;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt?: string;
};
