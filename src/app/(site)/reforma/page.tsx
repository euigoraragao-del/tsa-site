import Section from "@/components/Section";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

export default function ReformaPage() {
  return (
    <div>
      <section className="bg-[color:var(--tsa-navy)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[color:var(--tsa-gold)]">
              TSA • Reforma & Valorização
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Reforma estratégica para valorização imobiliária
            </h1>
            <p className="mt-4 text-white/75">
              Projeto personalizado + execução completa, orientados ao mercado para maximizar valor,
              liquidez e rentabilidade do ativo.
            </p>
            <div className="mt-8">
              <Button href="/contato" variant="gold">Solicitar diagnóstico</Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Como atuamos"
        subtitle="Um processo claro do diagnóstico até a entrega pronta para venda/locação."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Diagnóstico e estratégia"
            desc="Análise do ativo e do mercado para definir o melhor plano de valorização."
            bullets={["Objetivo (venda/locação)", "Público-alvo", "ROI estimado"]}
          />
          <ServiceCard
            title="Projeto arquitetônico"
            desc="Projeto funcional e estético com especificação técnica e orçamentação."
            bullets={["Layout", "Materiais e acabamentos", "Cronograma"]}
          />
          <ServiceCard
            title="Reforma completa"
            desc="Gestão da obra com controle de qualidade, prazos e custos."
            bullets={["Fornecedores", "Supervisão", "Entrega final"]}
          />
        </div>
      </Section>
    </div>
  );
}
