import Section from "@/components/Section";
import Button from "@/components/Button";

export default function SobrePage() {
  return (
    <Section
      title="Sobre a TSA"
      subtitle="Uma asset manager imobiliária focada em valorização patrimonial."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-black/70">
          <p>
            A TSA Asset Management atua no ciclo completo do ativo: diagnóstico,
            projeto de reforma, execução da obra e gestão (venda/locação/concierge).
          </p>
          <p>
            O objetivo é aumentar liquidez, reduzir vacância e maximizar valor de mercado
            por meio de padronização de processo e execução premium.
          </p>
          <div className="pt-2">
            <Button href="/contato" variant="navy">Falar com a TSA</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-[color:var(--tsa-navy)] p-8 text-white">
          <div className="text-xs text-white/70">Proposta de valor</div>
          <div className="mt-3 text-lg font-semibold">Projetamos • Reformamos • Valorizamos • Gerimos</div>
          <div className="mt-4 text-sm text-white/75">
            Uma operação unificada, com foco em performance do ativo.
          </div>
        </div>
      </div>
    </Section>
  );
}
