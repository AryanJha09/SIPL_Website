import { Button } from "@/shared/ui/Button";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/shared/assets/Hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] lg:min-h-[85dvh] pt-28 pb-8 px-4 md:px-8 lg:px-12 flex flex-col justify-center bg-[#F5F8FC]">
      <div className="max-w-[1440px] mx-auto w-full">

        <div className="bg-[#F9F8F3] rounded-[40px] shadow-sm overflow-hidden flex flex-col lg:flex-row h-full w-full p-4 lg:p-6 gap-6">

          {/* Content Area */}
          <div className="flex-1 flex flex-col justify-center px-4 py-8 lg:px-12 lg:py-12 lg:w-[45%] shrink-0 order-2 lg:order-1">
            <MotionWrapper variant="slideUp" delay={0.2}>
              <h1 className="font-serif text-[44px] leading-[1.1] md:text-[56px] lg:text-[72px] tracking-tight text-[#0A0C10] mb-6">
                Depression hides<br />
                in plain sight.<br />
                We help find it early.
              </h1>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.3}>
              <p className="text-lg md:text-xl text-[#4A5568] mb-10 max-w-xl leading-relaxed">
                LifeBack™ brings voice, video, and genomics-informed research together in a
                multimodal screening platform that helps clinicians see early behavioral patterns
                with more evidence, not less judgment.
              </p>
            </MotionWrapper>

            <MotionWrapper variant="slideUp" delay={0.4} className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Video Area */}
          <div className="relative w-full lg:w-[55%] min-h-[400px] lg:min-h-[500px] bg-[#001B65] rounded-[32px] overflow-hidden order-1 lg:order-2">
            <Image
              src={HeroImage}
              alt="LifeBack™ Screening"
              fill
              priority
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
