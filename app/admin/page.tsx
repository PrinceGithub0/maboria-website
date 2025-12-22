"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DataCard } from "@/components/DataCard";
import { StatusBadge } from "@/components/StatusBadge";
import type { Ticket, ServiceRequest, User, ContactMessage } from "@/models/types";

export default function AdminPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [ticketRes, serviceRes, userRes, contactRes] = await Promise.all([
          fetch("/api/tickets", { credentials: "include" }),
          fetch("/api/services", { credentials: "include" }),
          fetch("/api/admin/users", { credentials: "include" }).catch(() => null),
          fetch("/api/admin/contacts", { credentials: "include" }).catch(() => null),
        ]);
        if (
          ticketRes?.status === 401 ||
          serviceRes?.status === 401 ||
          userRes?.status === 401 ||
          contactRes?.status === 401
        ) {
          router.push("/login");
          return;
        }
        const [ticketJson, serviceJson, userJson, contactJson] = await Promise.all([
          ticketRes.json(),
          serviceRes.json(),
          userRes ? userRes.json() : Promise.resolve({ data: [] }),
          contactRes ? contactRes.json() : Promise.resolve({ data: [] }),
        ]);
        if (!ticketRes.ok) throw new Error(ticketJson.message || "Tickets error");
        if (!serviceRes.ok) throw new Error(serviceJson.message || "Services error");
        if (userRes && !userRes.ok) throw new Error(userJson.message || "Users error");
        if (contactRes && !contactRes.ok) throw new Error(contactJson.message || "Contacts error");
        setTickets(ticketJson.data || []);
        setRequests(serviceJson.data || []);
        setUsers(userJson.data || []);
        setContacts(contactJson.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load admin data");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  function formatDate(value: string) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toISOString().slice(0, 10);
  }

  return (
    <DashboardLayout title="Admin Dashboard" variant="admin">
      {loading ? (
        <p className="text-slate-300">Loading...</p>
      ) : (
        <div className="grid gap-6">
          {error && <p className="text-sm text-rose-300">{error}</p>}

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
              <p className="text-sm font-semibold text-white">Users</p>
              <p className="text-3xl font-bold text-cyan-200">{users.length}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
              <p className="text-sm font-semibold text-white">Tickets</p>
              <p className="text-3xl font-bold text-cyan-200">{tickets.length}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
              <p className="text-sm font-semibold text-white">Service Requests</p>
              <p className="text-3xl font-bold text-cyan-200">{requests.length}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">All Tickets</p>
              </div>
              <div className="grid gap-3">
                {tickets.map((ticket) => (
                  <DataCard key={ticket.id} title={ticket.title} subtitle={ticket.clientId} status={ticket.status}>
                    <p className="text-xs text-slate-300">{ticket.description}</p>
                  </DataCard>
                ))}
                {tickets.length === 0 && <p className="text-sm text-slate-400">No tickets available.</p>}
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-white">All Service Requests</p>
              </div>
              <div className="grid gap-3">
                {requests.map((req) => (
                  <DataCard key={req.id} title={req.serviceType} subtitle={req.clientId} status={req.status}>
                    <p className="text-xs text-slate-300">{req.description}</p>
                  </DataCard>
                ))}
                {requests.length === 0 && <p className="text-sm text-slate-400">No service requests available.</p>}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Contact Messages</p>
            </div>
            <div className="grid gap-3">
              {contacts.map((message) => (
                <DataCard
                  key={message.id}
                  title={message.name}
                  subtitle={`${message.email} • ${formatDate(message.createdAt)}`}
                >
                  <p className="text-xs text-slate-300">{message.message}</p>
                </DataCard>
              ))}
              {contacts.length === 0 && <p className="text-sm text-slate-400">No contact messages yet.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Users</p>
              <StatusBadge status="open" />
            </div>
            <div className="mt-3 grid gap-2 text-sm text-slate-200">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2"
                >
                  <div>
                    <p className="font-semibold text-white">{user.name}</p>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {user.role}
                  </span>
                </div>
              ))}
              {users.length === 0 && <p className="text-sm text-slate-400">No users found.</p>}
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
