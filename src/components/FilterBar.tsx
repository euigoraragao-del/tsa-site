"use client";

import { useMemo, useState } from "react";
import type { Property } from "@/lib/data";
import PropertyCard from "./PropertyCard";

export default function FilterBar({ items }: { items: Property[] }) {
  const [purpose, setPurpose] = useState<"Todos" | "Venda" | "Locação">("Todos");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((p) => {
      const okPurpose = purpose === "Todos" ? true : p.purpose === purpose;
      const okQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.neighborhood.toLowerCase().includes(query) ||
        p.city.toLowerCase().includes(query);
      return okPurpose && okQuery;
    });
  }, [items, purpose, q]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2">
          {(["Todos", "Venda", "Locação"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setPurpose(v)}
              className={[
                "rounded-xl px-4 py-2 text-sm font-semibold border transition",
                purpose === v
                  ? "bg-[color:var(--tsa-navy)] text-white border-transparent"
                  : "bg-white text-black/70 border-black/10 hover:bg-black/5",
              ].join(" ")}
            >
              {v}
            </button>
          ))}
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por bairro, cidade ou título..."
          className="w-full md:w-[360px] rounded-xl border border-black/10 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PropertyCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
