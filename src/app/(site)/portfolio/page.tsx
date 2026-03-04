import Section from "@/components/Section";
import CaseCard from "@/components/CaseCard";
import { caseStudies } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <Section
      title="Portfólio"
      subtitle="Casos (modelo). Substitua por projetos reais, com fotos e métricas."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((c) => (
          <CaseCard key={c.title} c={c} />
        ))}
      </div>
    </Section>
  );
}
