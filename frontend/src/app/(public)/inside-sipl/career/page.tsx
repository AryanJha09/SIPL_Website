import { CareersContent } from "@/components/layout/CareersContent";
import { generateSeoMetadata } from "@/shared/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Careers | SIPL",
  description: "Careers at SIPL across clinical AI, research, engineering, product, institutional partnerships, and healthcare deployment.",
  path: "/inside-sipl/career",
});

export default function InsideSiplCareerPage() {
  return <CareersContent />;
}
