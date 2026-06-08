import { PublicLayout } from "@/layouts/PublicLayout";
import { Container } from "@/shared/ui/Container";
import { EditorialHero } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Insights | SIPL",
  description: "Clinical AI, precision psychiatry, and multimodal intelligence perspectives from SIPL.",
  path: "/blog",
});

const categories = [
  "Clinical AI",
  "Precision Psychiatry",
  "Genomics",
  "Multimodal Biomarkers",
  "Evidence-Based Medicine",
  "Digital Phenotyping",
  "SIPL Research Notes",
];

export default function BlogPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Insights" title="Clinical AI, precision psychiatry, and multimodal intelligence.">
          <p>
            Research explainers, industry perspectives, and thought leadership from SIPL will appear here.
          </p>
        </EditorialHero>

        <section className="pb-28 text-[#001B65]">
          <Container>
            <div className="grid gap-8 rounded-[32px] border border-[#001B65]/10 bg-[#F9F8F3] p-7 md:p-10">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-[12px] border border-[#001B65]/14 bg-white/55 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#001B65]/68"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="max-w-3xl text-lg leading-8 text-[#001B65]/72">
                Articles will be published here as SIPL releases research notes, explainers, and thought-leadership content.
              </p>
            </div>
          </Container>
        </section>
      </div>
    </PublicLayout>
  );
}
