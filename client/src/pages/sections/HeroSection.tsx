import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "About" },
  { label: "Speaking & Media" },
  { label: "VDV Labs" },
  { label: "Contact" },
];

const verticalLines = [
  { left: "left-[116px]" },
  { left: "left-[371px]" },
  { left: "left-[624px]" },
  { left: "left-[875px]" },
  { left: "left-[1104px]" },
  { left: "left-[1420px]" },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[849px] bg-[#0e0519] overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
          src="/figmaAssets/image-283.png"
        />

        {verticalLines.map((line, index) => (
          <img
            key={`line-${index}`}
            className={`absolute top-0 ${line.left} w-[169px] h-[849px]`}
            alt="Decorative line"
            src={`/figmaAssets/line-${index === 0 ? "14" : index === 1 ? "15" : index === 2 ? "16" : index === 3 ? "17" : index === 4 ? "18" : "19"}.svg`}
          />
        ))}

        <div className="absolute top-[849px] left-[-119px] w-[882px] h-[75px] bg-[#a12f1e] rounded-[441px/37.5px] blur-[187px]" />

        <header className="absolute top-0 left-0 w-full h-[124px] flex items-start bg-transparent px-[390px]">
          <div className="mt-[34px] w-[180px] h-14 relative flex-shrink-0">
            <div className="absolute top-[9px] left-[69px] h-[39px] [font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[19.3px] tracking-[-0.58px] leading-[19.3px]">
              Robert
              <br />
              Vandervoort
            </div>

            <img
              className="absolute top-2.5 left-0 w-[33px] h-[38px]"
              alt="Logo subtract"
              src="/figmaAssets/subtract.svg"
            />

            <img
              className="absolute top-2.5 left-[42px] w-[17px] h-[35px]"
              alt="Logo vector"
              src="/figmaAssets/vector-42.svg"
            />

            <img
              className="absolute top-2.5 left-[27px] w-[18px] h-[38px]"
              alt="Logo vector"
              src="/figmaAssets/vector-43.svg"
            />
          </div>

          <nav className="flex mt-[50px] h-6 ml-10 items-center gap-10">
            {navigationItems.map((item, index) => (
              <button
                key={`nav-${index}`}
                className="[font-family:'Manrope',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button className="mt-[37px] ml-[266px] h-auto bg-white text-black hover:bg-white/90 rounded-lg px-6 py-3 gap-2.5">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-lg tracking-[-0.36px]">
              Book to Speak
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </header>

        <div className="absolute top-[517px] left-[772px] bg-[linear-gradient(270deg,rgba(255,255,255,0.05)_0%,rgba(153,153,153,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Tilt_Warp',Helvetica] font-normal text-transparent text-[164px] tracking-[-6.56px] leading-[normal] pointer-events-none">
          Robert
        </div>

        <div className="absolute top-[373px] left-[1559px] bg-[linear-gradient(275deg,rgba(255,255,255,0.05)_0%,rgba(153,153,153,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Tilt_Warp',Helvetica] font-normal text-transparent text-[146px] tracking-[-2.92px] leading-[normal] pointer-events-none">
          voort
        </div>

        <div className="absolute top-[395px] left-[555px] w-[346px] h-[67px] bg-[#9c2d1d]" />

        <div className="absolute top-[194px] left-[390px] flex items-center gap-1.5">
          <div className="w-2 h-2 bg-[#9c2d1d] rounded-[1px]" />
          <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-2xl tracking-[-0.48px] leading-6 whitespace-nowrap">
            Strategic Advisor
          </span>
        </div>

        <h1 className="absolute top-[238px] left-[calc(50.00%_-_570px)] w-[751px] [font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[54px] tracking-[-1.08px] leading-[76px]">
          Who Leaders Call When the Stakes Are High and Getting It Wrong Costs
          Millions
        </h1>

        <p className="absolute top-[502px] left-[390px] [font-family:'Manrope',Helvetica] font-medium text-[#d6d6d6] text-2xl tracking-[-0.96px] leading-[44px] whitespace-nowrap">
          I pressure-test ideas before you waste people, capital, or
          credibility.
        </p>

        <p className="absolute top-[665px] left-[390px] w-[559px] [font-family:'Manrope',Helvetica] font-medium text-white text-xl tracking-[-0.80px] leading-[34px]">
          Trusted inside Fortune 100 and global enterprise environments for
          high-stakes AI, product, and governance decisions.
        </p>

        <div className="absolute top-[578px] left-[390px] flex items-center gap-4">
          <Button className="h-auto bg-[#972b1c] hover:bg-[#972b1c]/90 text-white rounded-lg px-6 py-3 gap-2.5">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-lg tracking-[-0.36px]">
              Book Me to Speak
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            className="h-auto bg-transparent hover:bg-white/10 text-white border-white rounded-lg px-6 py-3 gap-2.5"
          >
            <span className="[font-family:'Manrope',Helvetica] font-medium text-lg tracking-[-0.36px]">
              Get No-BS Consulting
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>

        <img
          className="absolute top-[74px] left-[960px] w-[778px] h-[775px] object-cover"
          alt="Robert Vandervoort portrait"
          src="/figmaAssets/gemini-generated-image-xpdyf8xpdyf8xpdy-2.png"
        />

        <img
          className="absolute top-[616px] left-[976px] w-[712px] h-[234px]"
          alt="Decorative vector"
          src="/figmaAssets/vector-44.svg"
        />
      </div>
    </section>
  );
};
