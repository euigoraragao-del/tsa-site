import Link from "next/link";
import Button from "./Button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/imoveis", label: "Imóveis" },
  { href: "/reforma", label: "Reforma & Valorização" },
  { href: "/gestao", label: "Gestão de Ativos" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-[color:var(--tsa-navy)]">TSA</span>
          </span>
          <span className="text-xs text-black/60">Asset Management</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm text-black/70">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="hover:text-black transition"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/imoveis" variant="ghost" className="hidden sm:inline-flex">
            Ver imóveis
          </Button>
          <Button href="/contato" variant="navy">
            Avaliar meu imóvel
          </Button>
        </div>
      </div>
    </header>
  );
}
