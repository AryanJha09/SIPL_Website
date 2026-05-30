import { Button } from "@/shared/ui/Button";
import { Badge } from "@/shared/ui/Badge";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] lg:min-h-[85dvh] pt-28 pb-8 px-4 md:px-8 lg:px-12 flex flex-col justify-center bg-[#F7F9FC]">
      <div className="max-w-[1440px] mx-auto w-full">

        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden flex flex-col lg:flex-row h-full w-full p-4 lg:p-6 gap-6">

          {/* Content Area */}
          <div className="flex-1 flex flex-col justify-center px-4 py-8 lg:px-12 lg:py-12 lg:w-[45%] shrink-0 order-2 lg:order-1">
            <MotionWrapper variant="slideUp" delay={0.1}>
              <Badge variant="muted" className="mb-6">
                AI-Assisted Behavioral Screening
              </Badge>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.2}>
              <h1 className="font-serif text-[44px] leading-[1.1] md:text-[56px] lg:text-[72px] tracking-tight text-[#0A0C10] mb-6">
                Depression hides<br />
                in plain sight.<br />
                We help find it early.
              </h1>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg md:text-xl text-[#4A5568] mb-10 max-w-xl leading-relaxed">
                LifeBack combines structured behavioral assessment, voice-based signal analysis,
                and research-backed AI systems to surface patterns that may otherwise go unnoticed.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.4} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/login" passHref className="w-full sm:w-auto">
                <Button size="lg" className="w-full">
                  Access Platform
                </Button>
              </Link>
              <Link href="/research" passHref className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">
                  Explore Research
                </Button>
              </Link>
            </MotionWrapper>

            <MotionWrapper variant="fadeIn" delay={0.6} className="mt-auto">
              <div className="flex flex-wrap gap-3">
                <Badge variant="muted" className="bg-[#F7F9FC] border border-[#EDEDED]">Research-backed</Badge>
                <Badge variant="muted" className="bg-[#F7F9FC] border border-[#EDEDED]">Privacy-first</Badge>
                <Badge variant="muted" className="bg-[#F7F9FC] border border-[#EDEDED]">Human-in-the-loop</Badge>
              </div>
            </MotionWrapper>
          </div>

          {/* Video Area */}
          <div className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-[500px] bg-[#131313] rounded-[32px] overflow-hidden order-1 lg:order-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085844_21a8f4b3-dea5-4ede-be16-d53f6973bb14.mp4"
            />

            {/* Overlays */}
            <div className="absolute top-6 left-6 z-10">
              <Badge variant="white">
                Research-backed Detection Framework
              </Badge>
            </div>

            <div className="absolute bottom-6 right-6 z-10 bg-white p-5 rounded-2xl max-w-[240px]">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#131313]"></div>
                  <span className="text-sm font-medium">Voice Signals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#131313]"></div>
                  <span className="text-sm font-medium">Behavioral Patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#131313]"></div>
                  <span className="text-sm font-medium">Clinical Insights</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
