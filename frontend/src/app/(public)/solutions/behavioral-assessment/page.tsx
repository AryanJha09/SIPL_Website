import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function BehavioralAssessmentPage() {
  return (
    <PublicRoutePage
      eyebrow="Solutions / Behavioral Assessment"
      title="Behavioral Assessment"
      description="A focused view of SIPL's structured behavioral assessment layer, designed to collect evidence for clinician-led review."
      points={["Guided clinical prompts", "Response pattern review", "Clinician-led review"]}
    />
  );
}
