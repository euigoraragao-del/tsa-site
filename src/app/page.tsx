import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import PropertyCard from "@/components/PropertyCard";
import CaseCard from "@/components/CaseCard";
import { properties, caseStudies } from "@/lib/data";

export default function HomePage() {
  const featured = properties.filter((p) => p.featured);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[color:var(--tsa-navy)]" />
          <div className="absolute inset-0 opacity-25">
            <img
              src="/images/hero.jpg"
              alt="Arquitetura premium"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[color:var(--tsa-gold)]" />
              Projeto • Reforma • Gestão
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-white">
              TSA Asset Management
            </h1>

            <p className="mt-4 text-lg text-white/80">
              Transformamos imóveis em <span className="text-white font-semibold">ativos de alto valor</span>{" "}
              com projeto de reforma personalizado, reforma completa e gestão imobiliária.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/imoveis" variant="gold">
                Ver imóveis
              </Button>
              <Button
                href="/contato"
                variant="ghost"
                className="bg-white/10 text-white border-white/15 hover:bg-white/15"
              >
                Avaliar meu imóvel
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-white/80 text-xs max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Valorização</div>
                <div className="mt-1">Estratégia de mercado</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Execução</div>
                <div className="mt-1">Gestão de obra</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Gestão</div>
                <div className="mt-1">Venda/locação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO TSA */}
      <Section
        title="Nosso modelo de valorização imobiliária"
        subtitle="Atuamos em todo o ciclo do ativo: diagnóstico, projeto, reforma, colocação no mercado e gestão contínua."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {[
            "Diagnóstico do imóvel",
            "Projeto estratégico",
            "Reforma completa",
            "Colocação no mercado",
            "Gestão do ativo",
          ].map((t, idx) => (
            <div
              key={t}
              className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <div className="text-xs font-semibold text-[color:var(--tsa-gold)]">
                0{idx + 1}
              </div>
              <div className="mt-2 text-sm font-semibold">{t}</div>
              <div className="mt-1 text-sm text-black/60">
                Processo padronizado com execução premium.
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVIÇOS */}
      <Section
        title="O que a TSA faz"
        subtitle="Três frentes integradas para maximizar liquidez, valor e rentabilidade."
        className="bg-[linear-gradient(to_bottom,rgba(13,43,69,0.03),transparent)]"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Projeto de reforma personalizado"
            desc="Projetos arquitetônicos orientados ao mercado para extrair o máximo potencial do imóvel."
            bullets={[
              "Layout e funcionalidade",
              "Especificação de acabamentos",
              "Planejamento de custos e prazos",
            ]}
          />
          <ServiceCard
            title="Reforma completa"
            desc="Execução completa com gestão profissional de obra, qualidade e previsibilidade."
            bullets={[
              "Gestão de fornecedores",
              "Controle de cronograma",
              "Entrega pronta para mercado",
            ]}
          />
          <ServiceCard
            title="Gestão de ativos imobiliários"
            desc="Venda, locação e administração com concierge sob demanda."
            bullets={[
              "Captação e anúncio",
              "Seleção e contratos",
              "Manutenção e concierge",
            ]}
          />
        </div>
      </Section>

      {/* IMÓVEIS EM DESTAQUE */}
      <Section
        title="Imóveis em destaque"
        subtitle="Seleção de ativos com alta qualidade e liquidez."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="mt-8">
          <Button href="/imoveis" variant="navy">
            Ver todos os imóveis
          </Button>
        </div>
      </Section>

      {/* PORTFÓLIO */}
      <Section
        title="Portfólio de valorização"
        subtitle="Casos reais (modelo). Troque pelos seus cases ao vivo."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((c) => (
            <CaseCard key={c.title} c={c} />
          ))}
        </div>
      </Section>

      {/* CTA CAPTAÇÃO */}
      <Section className="bg-[color:var(--tsa-navy)]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12 text-white">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Transforme seu imóvel em um ativo valorizado
            </h3>
            <p className="mt-3 text-white/75">
              Envie as informações do imóvel e receba uma avaliação com estratégia
              de valorização (projeto/reforma/gestão).
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/contato" variant="gold">
                Receber avaliação gratuita
              </Button>
              <Button
                href="/gestao"
                variant="ghost"
                className="bg-white/10 text-white border-white/15 hover:bg-white/15"
              >
                Conhecer gestão de ativos
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
