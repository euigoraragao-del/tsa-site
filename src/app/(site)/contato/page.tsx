import Section from "@/components/Section";
import Button from "@/components/Button";

export default function ContatoPage() {
  return (
    <Section
      title="Contato / Avaliação do imóvel"
      subtitle="Envie as informações e receba uma proposta de valorização (projeto, reforma e gestão)."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <form
          className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm space-y-4"
          action="#"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]" placeholder="Nome" />
            <input className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]" placeholder="WhatsApp" />
          </div>
          <input className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]" placeholder="Email (opcional)" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]" placeholder="Cidade" />
            <input className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]" placeholder="Bairro" />
          </div>
          <textarea className="w-full min-h-[120px] rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--tsa-gold)]" placeholder="Descreva o imóvel e o objetivo (venda/locação/valorização)..." />
          <Button type="submit" variant="navy" className="w-full">
            Enviar
          </Button>
          <div className="text-xs text-black/45">
            * Integre depois com seu CRM (HubSpot, PipeRun, etc.) ou backend próprio.
          </div>
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl border border-black/5 bg-[color:var(--tsa-navy)] p-6 text-white">
            <div className="text-sm font-semibold">Contato direto</div>
            <div className="mt-3 text-sm text-white/80">WhatsApp: (11) 90000-0000</div>
            <div className="mt-1 text-sm text-white/80">Email: contato@tsa.com.br</div>
            <div className="mt-1 text-sm text-white/80">São Paulo • SP</div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Captação premium</div>
            <p className="mt-2 text-sm text-black/60">
              Se você quer colocar seu imóvel para gestão, a TSA pode propor um plano completo:
              projeto de reforma → reforma completa → colocação no mercado → gestão contínua.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
