import Section from "@/components/Section";
import FilterBar from "@/components/FilterBar";
import { properties } from "@/lib/data";

export default function PropertiesPage() {
  return (
    <Section
      title="Imóveis"
      subtitle="Venda e locação. Use filtros para localizar o ativo ideal."
    >
      <FilterBar items={properties} />
    </Section>
  );
}
