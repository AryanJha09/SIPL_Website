import { HeroSection } from "@/features/public/landing/sections/HeroSection";
import { StatsSection } from "@/features/public/landing/sections/StatsSection";
import { ImpactSection } from "@/features/public/landing/sections/ImpactSection";
import { HowItWorksSection } from "@/features/public/landing/sections/HowItWorksSection";
import { GenomicsPreviewSection } from "@/features/public/landing/sections/GenomicsPreviewSection";
import { ClinicianSection } from "@/features/public/landing/sections/ClinicianSection";
import { TrustSection } from "@/features/public/landing/sections/TrustSection";
import { VisionSection } from "@/features/public/landing/sections/VisionSection";
import { CTASection } from "@/features/public/landing/sections/CTASection";
import { PublicLayout } from "@/layouts/PublicLayout";
import { generateSeoMetadata, organizationSchema, medicalSchema } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "LifeBack | Early Depression Detection",
  description: "AI-assisted behavioral screening platform focused on early depression detection.",
  path: "/"
});

export default function Home() {
  return (
    <PublicLayout>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, medicalSchema]) }} 
      />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ImpactSection />
      <GenomicsPreviewSection />
      <ClinicianSection />
      <TrustSection />
      <VisionSection />
      <CTASection />
    </PublicLayout>
  );
}
