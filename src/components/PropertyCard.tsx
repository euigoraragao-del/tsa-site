import Link from "next/link";
import type { Property } from "@/lib/data";

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <Link
      href={`/imoveis/${p.slug}`}
      className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="aspect-[16/10] bg-black/5 overflow-hidden">
        {/* Troque para next/image quando colocar imagens reais */}
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover group-hover:scale-[1.03] transition"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-[color:var(--tsa-navy)]">
            {p.purpose}
          </div>
          <div className="text-xs text-black/50">
            {p.neighborhood} • {p.city}
          </div>
        </div>

        <div className="mt-2 text-base font-semibold">{p.title}</div>
        <div className="mt-2 text-lg font-bold text-[color:var(--tsa-navy)]">
          {p.priceLabel}
        </div>

        <div className="mt-3 flex gap-3 text-sm text-black/60">
          <span>{p.area}m²</span>
          <span>{p.beds}q</span>
          <span>{p.parking}v</span>
        </div>

        <div className="mt-4 text-sm text-black/60 line-clamp-2">
          {p.description}
        </div>
      </div>
    </Link>
  );
}
