import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

export default function GestaoPage() {
  return (
    <div>
      <section className="bg-[linear-gradient(135deg,var(--tsa-navy),#071a2b)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[color:var(--tsa-gold)]">
              TSA • Gestão de Ativos
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Gestão profissional do seu imóvel
            </h1>
            <p className="mt-4 text-white/75">
              Venda, locação e administração com concierge sob demanda para reduzir vacância
              e aumentar a previsibilidade do retorno.
            </p>
            <div className="mt-8 flex gap-3 flex-col sm:flex-row">
              <Button href="/contato" variant="gold">Quero colocar meu imóvel</Button>
              <Button
                href="/imoveis"
                variant="ghost"
                className="bg-white/10 text-white border-white/15 hover:bg-white/15"
              >
                Ver ativos disponíveis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Serviços incluídos"
        subtitle="Escopo pensado para maximizar segurança e performance do ativo."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Venda"
            desc="Estratégia comercial, anúncio premium e negociação para liquidez."
            bullets={["Precificação", "Materiais e divulgação", "Fechamento assistido"]}
          />
          <ServiceCard
            title="Locação"
            desc="Seleção e gestão do inquilino com suporte operacional."
            bullets={["Anúncio", "Análise de perfil", "Contrato e renovação"]}
          />
          <ServiceCard
            title="Concierge on demand"
            desc="Serviços sob demanda para manter o ativo sempre em alto padrão."
            bullets={["Manutenção", "Limpeza", "Pequenas melhorias e upgrades"]}
          />
        </div>
      </Section>
    </div>
  );
}
