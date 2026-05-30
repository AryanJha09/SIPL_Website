import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { CheckCircle2, Activity, FileText, BarChart3 } from "lucide-react";

export function ClinicianSection() {
  const benefits = [
    "Augment diagnostic confidence with objective behavioral data.",
    "Streamline initial assessments to maximize therapy time.",
    "Monitor longitudinal changes across patient sessions."
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#131313] text-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="lg:w-1/2">
            <MotionWrapper variant="slideUp">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
                Designed for Clinical Excellence
              </h2>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.1}>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                LifeBack translates complex multi-modal AI analysis into clear, structured clinical reports. We provide practitioners with an additional objective lens to support their expertise.
              </p>
            </MotionWrapper>

            <div className="flex flex-col gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <MotionWrapper key={i} variant="slideUp" delay={0.2 + (i * 0.1)}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#8931C4] mt-1 shrink-0" size={24} />
                    <p className="text-lg text-white/90">{benefit}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper variant="slideUp" delay={0.5}>
              <Button size="lg" className="bg-white text-[#131313] hover:bg-white/90">
                For Clinicians
              </Button>
            </MotionWrapper>
          </div>

          {/* Dashboard Mockup */}
          <div className="lg:w-1/2 w-full relative">
            <MotionWrapper variant="fadeIn" delay={0.3} className="relative z-10">
              <div className="bg-[#1A1C23] border border-white/10 rounded-[32px] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Patient Assessment Report</h4>
                    <p className="text-sm text-white/50">Generated: Oct 24, 2026 • Ref: LB-8842</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                    <FileText size={20} className="text-white/50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-white/50">Acoustic Biomarkers</span>
                      <Activity size={18} className="text-[#8931C4]" />
                    </div>
                    <div className="text-3xl font-serif">High</div>
                    <p className="text-xs text-white/50 mt-2">Correlation detected</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-white/50">Sentiment Analysis</span>
                      <BarChart3 size={18} className="text-[#8931C4]" />
                    </div>
                    <div className="text-3xl font-serif">Low</div>
                    <p className="text-xs text-white/50 mt-2">Valence levels</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-5">
                  <h5 className="text-sm text-white/70 font-medium mb-3">Clinical Summary</h5>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#8931C4]/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
          </div>

        </div>
      </Container>
    </section>
  );
}
