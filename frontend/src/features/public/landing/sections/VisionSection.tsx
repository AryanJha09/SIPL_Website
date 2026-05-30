import { Container } from "@/shared/ui/Container";
import { MotionWrapper } from "@/shared/animations/MotionWrapper";

export function VisionSection() {
  return (
    <section className="py-32 md:py-48 lg:py-64 bg-[#131313] text-white overflow-hidden relative">
      <Container>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <MotionWrapper variant="slideUp" delay={0.2}>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[1.1] mb-8">
              A world where<br />
              no one goes<br />
              undetected.
            </h2>
          </MotionWrapper>
        </div>
      </Container>
    </section>
  );
}
