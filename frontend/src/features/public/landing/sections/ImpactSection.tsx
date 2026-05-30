import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";
import { AnimatedCounter } from "@/shared/animations/AnimatedCounter";

export function ImpactSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-[#050505] text-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <MotionWrapper variant="slideUp">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6">
              These are not statistics.<br />
              These are people.
            </h2>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <MotionWrapper variant="slideUp" delay={0.1} className="text-center">
            <div className="text-5xl lg:text-7xl mb-4 font-serif text-white">
              <AnimatedCounter end={280} suffix="M+" />
            </div>
            <p className="text-white/70 text-lg">People globally living with depression</p>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" delay={0.2} className="text-center">
            <div className="text-5xl lg:text-7xl mb-4 font-serif text-white flex justify-center items-baseline">
              <AnimatedCounter end={4} suffix="–" />
              <AnimatedCounter end={10} suffix=" yrs" />
            </div>
            <p className="text-white/70 text-lg">Average delay between onset and diagnosis</p>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" delay={0.3} className="text-center">
            <div className="text-5xl lg:text-7xl mb-4 font-serif text-white">
              <AnimatedCounter end={60} suffix="%+" />
            </div>
            <p className="text-white/70 text-lg">Individuals who do not seek professional help</p>
          </MotionWrapper>

          <MotionWrapper variant="slideUp" delay={0.4} className="text-center">
            <div className="text-5xl lg:text-7xl mb-4 font-serif text-white flex justify-center">
              Millions
            </div>
            <p className="text-white/70 text-lg">Of lives that could be improved with early detection</p>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
