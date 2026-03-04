import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold">
              <span className="text-[color:var(--tsa-navy)]">TSA</span>{" "}
              <span className="text-black/60 text-sm">Asset Management</span>
            </div>
            <p className="mt-2 text-sm text-black/60 max-w-sm">
              Projeto de reforma, reforma completa e gestão imobiliária para transformar
              imóveis em ativos de alto valor.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Menu</div>
            <div className="mt-3 grid gap-2 text-black/60">
              <Link href="/imoveis" className="hover:text-black">Imóveis</Link>
              <Link href="/reforma" className="hover:text-black">Reforma & Valorização</Link>
              <Link href="/gestao" className="hover:text-black">Gestão de Ativos</Link>
              <Link href="/portfolio" className="hover:text-black">Portfólio</Link>
              <Link href="/contato" className="hover:text-black">Contato</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Contato</div>
            <div className="mt-3 grid gap-2 text-black/60">
              <div>São Paulo • SP</div>
              <div>WhatsApp: (11) 90000-0000</div>
              <div>Email: contato@tsa.com.br</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-black/40">
          © {new Date().getFullYear()} TSA Asset Management. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
