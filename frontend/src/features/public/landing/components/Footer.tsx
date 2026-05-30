import Link from "next/link";
import Image from "next/image";
import { FOOTER_SECTIONS } from "@/features/public/landing/constants/navigation";
import SIPLLogo from "@/shared/assets/SIPL_Logo.png";

export function Footer() {
  return (
    <footer className="bg-[#131313] text-white pt-24 pb-12 w-full px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 w-full max-w-full">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 bg-white rounded-full flex items-center justify-center p-2">
              <div className="relative w-full h-full">
                <Image 
                  src={SIPLLogo} 
                  alt="SIPL Logo" 
                  fill 
                  className="object-contain"
                  sizes="56px"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-semibold leading-none tracking-tight">LifeBack</span>
              <span className="text-xs md:text-sm text-white/60 mt-1 md:mt-1.5 font-medium">by Sequoia In Silico Pvt. Ltd.</span>
            </div>
          </div>
          <p className="text-white/70 max-w-md text-lg font-serif leading-relaxed">
            A world where no one goes undetected. Advanced AI-assisted behavioral screening for early depression detection.
          </p>
        </div>

        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-6">{section.title}</h4>
            <ul className="flex flex-col gap-4">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-white/50 w-full">
        <p className="shrink-0 text-left">© {new Date().getFullYear()} SIPL. All rights reserved.</p>
        <p className="md:text-right max-w-2xl leading-relaxed text-left">
          LifeBack is an AI-assisted behavioral screening system and is not a diagnostic tool.
          If you are in crisis, please contact your local emergency services.
        </p>
      </div>
    </footer>
  );
}
