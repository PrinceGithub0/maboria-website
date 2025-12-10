"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DataCard } from "@/components/DataCard";
import { StatusBadge } from "@/components/StatusBadge";
import type { Ticket, ServiceRequest } from "@/models/types";

export default function DashboardPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", description: "" });
  const [serviceForm, setServiceForm] = useState({ serviceType: "", description: "" });

  useEffect(() => {
    async function load() {
      try {
        const [ticketsRes, servicesRes] = await Promise.all([
          fetch("/api/tickets", { credentials: "include" }),
          fetch("/api/services", { credentials: "include" }),
        ]);
        if (ticketsRes.status === 401 || servicesRes.status === 401) {
          router.push("/login");
          return;
        }
        const ticketsJson = await ticketsRes.json();
        const servicesJson = await servicesRes.json();
        if (!ticketsRes.ok) throw new Error(ticketsJson.message || "Tickets error");
        if (!servicesRes.ok) throw new Error(servicesJson.message || "Services error");
        setTickets(ticketsJson.data || []);
        setRequests(servicesJson.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  async function submitTicket(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    });
    const json = await res.json();
    if (!res.ok) return setError(json.message || "Unable to create ticket");
    setTickets((prev) => [json.data, ...prev]);
    setForm({ title: "", description: "" });
  }

  async function submitService(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceForm),
      credentials: "include",
    });
    const json = await res.json();
    if (!res.ok) return setError(json.message || "Unable to create request");
    setRequests((prev) => [json.data, ...prev]);
    setServiceForm({ serviceType: "", description: "" });
  }

  return (
    <DashboardLayout title="Client Dashboard" variant="client">
      {loading ? (
        <p className="text-slate-300">Loading...</p>
      ) : (
        <div className="grid gap-6">
          {error && <p className="text-sm text-rose-300">{error}</p>}

          <div className="grid gap-4 md:grid-cols-2">
            <form onSubmit={submitTicket} className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
              <p className="text-sm font-semibold text-white">Create Ticket</p>
              <div className="mt-3 grid gap-3 text-sm text-slate-200">
                <input
                  placeholder="Title"
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  required
                  rows={3}
                />
                <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-500/30">
                  Submit ticket
                </button>
              </div>
            </form>

            <form onSubmit={submitService} className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
              <p className="text-sm font-semibold text-white">Create Service Request</p>
              <div className="mt-3 grid gap-3 text-sm text-slate-200">
                <input
                  placeholder="Service type"
                  value={serviceForm.serviceType}
                  onChange={(e) => setServiceForm((f) => ({ ...f, serviceType: e.target.value }))}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm((f) => ({ ...f, description: e.target.value }))}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                  required
                  rows={3}
                />
                <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-500/30">
                  Submit request
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Tickets</p>
                <StatusBadge status={tickets[0]?.status ?? "open"} />
              </div>
              <div className="grid gap-3">
                {tickets.map((ticket) => (
                  <DataCard key={ticket.id} title={ticket.title} status={ticket.status}>
                    <p className="text-xs text-slate-300">{ticket.description}</p>
                  </DataCard>
                ))}
                {tickets.length === 0 && <p className="text-sm text-slate-400">No tickets yet.</p>}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Service Requests</p>
                <StatusBadge status={requests[0]?.status ?? "open"} />
              </div>
              <div className="grid gap-3">
                {requests.map((req) => (
                  <DataCard key={req.id} title={req.serviceType} status={req.status}>
                    <p className="text-xs text-slate-300">{req.description}</p>
                  </DataCard>
                ))}
                {requests.length === 0 && <p className="text-sm text-slate-400">No service requests yet.</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
