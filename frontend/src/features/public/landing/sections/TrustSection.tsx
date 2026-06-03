import { Container } from "@/shared/ui/Container";
import { Card } from "@/shared/ui/Card";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { Shield, Lock, Users, Stethoscope } from "lucide-react";

export function TrustSection() {
  const cards = [
    {
      title: "Research First",
      description: "Our algorithms are trained on peer-reviewed clinical datasets, ensuring objective and scientifically valid markers are prioritized over generalized assumptions.",
      icon: Shield
    },
    {
      title: "Privacy First",
      description: "Voice and behavioral data are processed securely, anonymized at the source, and never used for unauthorized advertising or third-party tracking.",
      icon: Lock
    },
    {
      title: "Human-in-the-Loop AI",
      description: "AI does not diagnose. Our system surfaces insights to empower human clinicians, ensuring professional oversight remains central to the care pathway.",
      icon: Users
    },
    {
      title: "Clinically Responsible Design",
      description: "Built in consultation with mental health professionals to ensure the screening experience is safe, non-triggering, and clinically sound.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="trust" className="py-24 md:py-32 bg-[#F0EBE1]">
      <Container>
        <SectionHeading 
          title="Built on Trust and Responsibility" 
          subtitle="Technology in healthcare must be held to a higher standard. LifeBack™ is designed with rigorous ethical boundaries."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {cards.map((card, i) => (
            <MotionWrapper key={card.title} variant="slideUp" delay={0.1 * i}>
              <Card className="h-full bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white transition-colors duration-300">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-[#001B65] flex items-center justify-center text-white mb-6">
                    <card.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#0A0C10]">{card.title}</h3>
                  <p className="text-[#4A5568] leading-relaxed text-lg">{card.description}</p>
                </div>
              </Card>
            </MotionWrapper>
          ))}
        </div>

        <MotionWrapper variant="fadeIn" delay={0.4}>
          <div className="bg-[#001B65] rounded-3xl p-6 md:p-8 text-white flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Stethoscope size={24} className="text-white" />
              </div>
              <p className="text-white/90 text-sm md:text-base font-medium max-w-3xl">
                <strong className="text-white font-semibold">Important Clinical Disclaimer:</strong> LifeBack™ is an AI-assisted behavioral screening system and is not a diagnostic tool. It is designed to support, not replace, professional clinical evaluation.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
