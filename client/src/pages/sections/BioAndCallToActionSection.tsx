import { LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const BioAndCallToActionSection = (): JSX.Element => {
  const socialLinks = [
    {
      icon: TwitterIcon,
      alt: "Twitter",
      href: "#",
    },
    {
      icon: LinkedinIcon,
      alt: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <footer className="relative w-full border-t border-[#982c1c] bg-[linear-gradient(180deg,rgba(59,3,3,1)_0%,rgba(35,1,1,1)_100%)] py-20">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="flex flex-col items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="relative w-[91px] h-[58px]">
              <img
                className="absolute top-0 left-0 w-[50px] h-[58px]"
                alt="Subtract"
                src="/figmaAssets/subtract.svg"
              />
              <img
                className="absolute top-0 left-[24px] w-7 h-[58px]"
                alt="Vector"
                src="/figmaAssets/vector-43-1.svg"
              />
              <img
                className="absolute top-[4px] left-[65px] w-[26px] h-[54px]"
                alt="Vector"
                src="/figmaAssets/vector-42-1.svg"
              />
            </div>
            <div className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[29.7px] tracking-[-0.89px] leading-[29.7px]">
              Robert
              <br />
              Vandervoort
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MailIcon className="w-6 h-6 text-[#b7b7b7]" />
            <div className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
              Contact:
            </div>
            <div className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
              robert@vdvlabs.com
            </div>
          </div>

          <div className="[font-family:'Manrope',Helvetica] font-medium text-white text-[28px] tracking-[-0.56px] leading-9 text-center">
            AI • Governance • Systems Thinking • Enterprise Strategy
          </div>

          <Separator className="w-full bg-[#b7b7b7] h-px" />

          <div className="flex items-center justify-between w-full">
            <div className="[font-family:'Manrope',Helvetica] font-normal text-[#b7b7b7] text-lg tracking-[-0.36px] leading-6">
              © 2026 VDV Labs. All rights reserved.
            </div>

            <div className="flex items-center gap-3">
              <div className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-lg tracking-[-0.36px] leading-6">
                Follow Me:
              </div>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[#b7b7b7] hover:text-white transition-colors"
                  aria-label={link.alt}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
