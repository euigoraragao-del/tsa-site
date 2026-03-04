import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { properties } from "@/lib/data";

export default async function PropertyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = properties.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <div>
      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-black/5 bg-black/5">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="text-xs font-semibold text-[color:var(--tsa-navy)]">
                {p.purpose} • {p.neighborhood} • {p.city}
              </div>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                {p.title}
              </h1>
              <div className="mt-4 text-2xl font-bold text-[color:var(--tsa-navy)]">
                {p.priceLabel}
              </div>

              <div className="mt-5 flex gap-4 text-sm text-black/70">
                <span className="rounded-xl bg-black/5 px-3 py-2">
                  {p.area}m²
                </span>
                <span className="rounded-xl bg-black/5 px-3 py-2">
                  {p.beds} quartos
                </span>
                <span className="rounded-xl bg-black/5 px-3 py-2">
                  {p.parking} vagas
                </span>
              </div>

              <p className="mt-6 text-sm text-black/65">{p.description}</p>

              <div className="mt-6">
                <div className="text-sm font-semibold">Destaques</div>
                <ul className="mt-2 space-y-2 text-sm text-black/65">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--tsa-gold)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/contato" variant="gold">
                  Agendar visita
                </Button>
                <Button href="/contato" variant="navy">
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="mt-6 text-xs text-black/45">
                * Conteúdo de exemplo. Integre com seu CRM para captar lead
                automaticamente.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Quer valorizar este ativo?"
        subtitle="A TSA pode projetar, reformar e gerir o imóvel para máxima liquidez e retorno."
      >
        <div className="flex gap-3 flex-col sm:flex-row">
          <Button href="/reforma" variant="navy">
            Reforma & Valorização
          </Button>
          <Button href="/gestao" variant="ghost">
            Gestão de Ativos
          </Button>
        </div>
      </Section>
    </div>
  );
}
                <Button href="/contato" variant="navy">
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="mt-6 text-xs text-black/45">
                * Conteúdo de exemplo. Integre com seu CRM para captar lead automaticamente.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Quer valorizar este ativo?"
        subtitle="A TSA pode projetar, reformar e gerir o imóvel para máxima liquidez e retorno."
      >
        <div className="flex gap-3 flex-col sm:flex-row">
          <Button href="/reforma" variant="navy">Reforma & Valorização</Button>
          <Button href="/gestao" variant="ghost">Gestão de Ativos</Button>
        </div>
      </Section>
    </div>
  );
}
