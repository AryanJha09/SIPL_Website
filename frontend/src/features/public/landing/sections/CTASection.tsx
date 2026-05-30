import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { Info } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F9FC]">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <MotionWrapper variant="slideUp">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#0A0C10] mb-12">
              Detection is the first act of care.
            </h2>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" delay={0.1} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
              Begin Assessment
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
              For Clinicians
            </Button>
          </MotionWrapper>

          <MotionWrapper variant="fadeIn" delay={0.3}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-[#4A5568] max-w-2xl mx-auto">
              <Info size={18} className="shrink-0" />
              <p>
                LifeBack is an AI-assisted behavioral screening system and is not a diagnostic tool. 
                If you are in immediate danger or experiencing a medical emergency, call your local emergency services.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
