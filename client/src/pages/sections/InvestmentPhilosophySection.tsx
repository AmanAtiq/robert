import { Card, CardContent } from "@/components/ui/card";

const contentParagraphs = [
  "Because no one slows things down early enough to ask the uncomfortable questions. For over 15 years, I've worked behind the scenes inside Fortune 100 and large-scale enterprise environments. I've stood at the intersection of technology, systems, and business outcomes. I've watched capable teams burn time, money, and credibility because governance was unclear, incentives were misaligned, or no one wanted to challenge momentum.",
  "My path to this work was not predictable. I was hacking computers as a teenager and consulting before I fully understood what that meant. I tested as having a genius-level IQ, which sounds impressive until you live with it. Add ADHD and legal blindness, and you learn quickly that raw intelligence does not protect you from consequences.",
  "Today, leaders bring me in when major decisions are drifting and getting them wrong could cost millions. I ask the questions most people are already thinking but will not say out loud. Because reality always collects the bill.",
];

export const InvestmentPhilosophySection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 px-4">
      <Card className="relative max-w-7xl mx-auto bg-[#ffffff12] rounded-lg overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-lg before:[background:linear-gradient(270deg,rgba(152,44,28,1)_0%,rgba(50,14,9,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
        <div className="absolute top-[194px] left-[155px] w-[565px] h-[587px] bg-[#490102] rounded-[282.5px/293.5px] blur-[195px]" />

        <CardContent className="relative p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="flex flex-col gap-8">
              <div className="w-full max-w-[443px] h-auto aspect-[443/731] bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Professional portrait"
                  src="/figmaAssets/image-303.png"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-4xl lg:text-5xl tracking-[-0.96px] leading-tight">
                <span className="text-white tracking-[-0.46px]">
                  Smart People Make{" "}
                </span>
                <span className="text-[#d84935] tracking-[-0.46px]">
                  Expensive
                </span>
                <span className="text-white tracking-[-0.46px]">
                  {" "}
                  Mistakes.
                </span>
              </h2>

              <div className="flex flex-col gap-4">
                {contentParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-lg lg:text-xl tracking-[-0.16px] leading-[30px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
