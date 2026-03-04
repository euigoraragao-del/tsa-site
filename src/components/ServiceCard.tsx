export default function ServiceCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="text-sm font-semibold text-[color:var(--tsa-navy)]">
        {title}
      </div>
      <p className="mt-2 text-sm text-black/60">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-black/70">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--tsa-gold)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
