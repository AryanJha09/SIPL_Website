import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/features/public/landing/components/Footer";
import { ScrollToTopButton } from "@/features/public/landing/components/ScrollToTopButton";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F8FC] font-body">
      <Header />
      <main className="flex-1 bg-[#F5F8FC]">{children}</main>
      <div
        aria-hidden="true"
        className="h-16 bg-gradient-to-b from-transparent via-[#F5F8FC]/80 to-[#F5F8FC]"
      />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
