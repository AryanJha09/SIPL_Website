import { PublicRoutePage } from "@/components/layout/PublicRoutePage";

export default function ContactPage() {
  return (
    <PublicRoutePage
      eyebrow="Contact"
      title="Contact Us"
      description="For research partnerships, clinical collaborations, and LifeBack demonstrations, contact the SIPL team."
      points={["Research partnerships", "Clinical validation conversations", "Platform demo requests"]}
    />
  );
}
