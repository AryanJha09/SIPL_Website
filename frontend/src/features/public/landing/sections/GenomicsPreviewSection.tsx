import { Button } from "@/shared/ui/Button";
import { Badge } from "@/shared/ui/Badge";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { SectionHeading } from "@/shared/ui/SectionHeading";

export function GenomicsPreviewSection() {
  return (
    <section className="py-24 bg-[#F5F8FC]">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <MotionWrapper variant="slideUp" delay={0.1}>
            <Badge variant="muted" className="mb-6">
              Future of Detection
            </Badge>
          </MotionWrapper>
          <SectionHeading
            title="Voice, Video, and Genomics Together"
            subtitle="SIPL's focus is multimodal detection: combining behavioral, acoustic, visual, and genomics-informed research signals so LifeBack™ can support a more complete clinical evidence picture."
            align="center"
          />
        </div>

        <MotionWrapper variant="slideUp" delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative rounded-[32px] overflow-hidden bg-[#F9F8F3] p-8 md:p-12 lg:p-16 text-center border border-[#001B65]/10">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-[#001B65] rounded-full flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 21C4 17.134 7.13401 14 11 14C11.5523 14 12 13.5523 12 13V11C12 10.4477 11.5523 10 11 10C7.13401 10 4 6.86599 4 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 21C20 17.134 16.866 14 13 14C12.4477 14 12 13.5523 12 13V11C12 10.4477 12.4477 10 13 10C16.866 10 20 6.86599 20 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 5H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 19H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif text-[#0A0C10] mb-4">
                Complementary Modalities, One Clinical Lens
              </h3>
              
              <p className="text-[#4A5568] text-lg mb-8 leading-relaxed">
                Voice and video can reveal behavioral expression; genomics-informed research can add biological context. LifeBack™ keeps these signals organized for screening and assessment support, while clinical professionals remain responsible for care decisions.
              </p>
              
              <Link href="/research" passHref>
                <Button size="lg" variant="outline">
                  Learn About Our Research
                </Button>
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  );
}
