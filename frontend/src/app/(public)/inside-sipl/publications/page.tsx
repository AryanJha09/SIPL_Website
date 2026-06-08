import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Publications & IP | SIPL",
  description: "SIPL scientific output, patents, intellectual property, and research collaboration structure.",
  path: "/inside-sipl/publications",
});

const emptyStates = [
  {
    title: "Peer-reviewed publications",
    body: "Publication details will be added here with titles, authors, venues, citations, DOI links, and approved PDFs.",
  },
  {
    title: "Patents and intellectual property",
    body: "Patent details will be added here with titles, application or grant numbers, jurisdictions, public summaries, and technology areas.",
  },
  {
    title: "Research collaborations",
    body: "Research collaboration details will be added here once institution names, partnership scopes, and logo permissions are approved for public display.",
  },
];

export default function InsideSiplPublicationsPage() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Publications & IP" title="Scientific output, patents, and research collaborations.">
          <p>
            SIPL advances clinical AI through research, publication, intellectual property, and institutional collaboration.
          </p>
        </EditorialHero>
        <EditorialSection title="Publication and IP records.">
          <CardGrid cards={emptyStates} />
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
