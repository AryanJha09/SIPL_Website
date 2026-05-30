import { ReactNode } from "react";
import { PublicHeader } from "@/features/public/landing/components/PublicHeader";
import { Footer } from "@/features/public/landing/components/Footer";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#F7F9FC]">
      <PublicHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
