import { PublicLayout } from "@/layouts/PublicLayout";
import { CardGrid, EditorialHero, EditorialSection } from "@/components/layout/EditorialSections";

const cultureCards = [
  {
    title: "Flat by design, deep by discipline",
    body: "SIPL is a flat team — there is no hierarchy of importance, only clarity of role. Every person on the team is expected to think, challenge, and contribute beyond their job description. Titles describe what you do, not how much your voice matters.",
  },
  {
    title: "Disagreement is a feature, not a failure",
    body: "The best decisions at SIPL emerge from honest, rigorous debate. We expect team members to challenge assumptions — including those of leadership — with evidence and reasoning. Silence in the face of a wrong direction is not professionalism; it is a failure of courage.",
  },
  {
    title: "Growth is structured, not accidental",
    body: "We invest in the development of every team member — through research exposure, clinical immersion, conference participation, and mentorship. The people who build LifeBack™ should leave SIPL — whenever that day comes — as better scientists, engineers, and thinkers than when they arrived.",
  },
  {
    title: "Mental health starts here, at home",
    body: "We cannot build the future of mental healthcare from a team that is burned out, overlooked, or unsupported. SIPL takes the wellbeing of its people seriously — because we mean what we say about mental health being foundational to a productive and fulfilling life.",
  },
];

const tracks = [
  "Business Development",
  "Data Science",
  "Development",
  "Sales & Marketing",
  "Project Management",
].map((track) => ({
  title: track,
  eyebrow: "Career track",
  body: "Area of work. Future opportunities may emerge across this function.",
}));

export function CareersContent() {
  return (
    <PublicLayout>
      <div className="bg-[#F5F8FC]">
        <EditorialHero eyebrow="Careers" title="Build hard science for hard problems.">
          <p>
            SIPL is a flat, research-first team working across genomics, neuroscience, machine learning, clinical medicine, and public health.
          </p>
        </EditorialHero>

        <EditorialSection title="Curiosity over credentials.">
          <div className="grid gap-8">
            <p>
              The problems we are solving sit at the intersection of genomics, neuroscience, machine learning, clinical medicine, and public health. No single discipline contains the answer. We value people who are genuinely curious across domains — who read outside their field, ask uncomfortable questions, and treat knowledge as a lifelong pursuit.
            </p>
            <CardGrid cards={cultureCards} columns="two" />
          </div>
        </EditorialSection>

        <EditorialSection title="Areas we work across.">
          <div className="grid gap-8">
            <p>
              SIPL works across clinical AI, research, engineering, product, institutional partnerships, and healthcare deployment.
            </p>
            <CardGrid cards={tracks} />
          </div>
        </EditorialSection>
      </div>
    </PublicLayout>
  );
}
