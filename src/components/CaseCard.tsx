import type { CaseStudy } from "@/lib/data";

export default function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold">{c.title}</div>
      <div className="mt-1 text-xs text-black/50">{c.location}</div>
      <div className="mt-4 grid gap-2">
        <div className="text-sm">
          <span className="font-semibold text-[color:var(--tsa-navy)]">
            {c.uplift}
          </span>
        </div>
        <div className="text-sm text-black/70">{c.daysToRentOrSell}</div>
      </div>
      <p className="mt-4 text-sm text-black/60">{c.summary}</p>
    </div>
  );
}
