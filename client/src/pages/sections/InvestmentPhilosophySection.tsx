import { Card, CardContent } from "@/components/ui/card";

const contentParagraphs = [
  "Because no one slows things down early enough to ask the uncomfortable questions. For over 15 years, I've worked behind the scenes inside Fortune 100 and large-scale enterprise environments. I've stood at the intersection of technology, systems, and business outcomes. I've watched capable teams burn time, money, and credibility because governance was unclear, incentives were misaligned, or no one wanted to challenge momentum.",
  "My path to this work was not predictable. I was hacking computers as a teenager and consulting before I fully understood what that meant. I tested as having a genius-level IQ, which sounds impressive until you live with it. Add ADHD and legal blindness, and you learn quickly that raw intelligence does not protect you from consequences.",
  "Today, leaders bring me in when major decisions are drifting and getting them wrong could cost millions. I ask the questions most people are already thinking but will not say out loud. Because reality always collects the bill.",
];

export const InvestmentPhilosophySection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 px-4">
      <Card className="relative max-w-7xl mx-auto bg-[#ffffff08] rounded-lg overflow-hidden border border-[#490102] shadow-2xl">

        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#490102] opacity-40 rounded-full blur-[150px] pointer-events-none" />

        <CardContent className="relative p-0">
          {/* We use items-start to let the text define the height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-12 items-start">

            {/* LEFT: Image Column */}
            {/* lg:self-stretch allows the div to match the height of the right column */}
            <div className="relative w-full h-full min-h-[100px]  lg:min-h-0  lg:self-stretch">
              <div className="lg:absolute lg:inset-0 bg-[#1a0505] rounded-lg overflow-hidden border border-white/5">
                <img
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  alt="Professional portrait"
                  src="/figmaAssets/image-303.png"
                />
              </div>
            </div>

            {/* RIGHT: Text Content Column */}
            <div className="flex flex-col justify-center gap-8 py-2">
              <h2 className="font-['Tilt_Warp'] font-normal text-4xl lg:text-5xl leading-tight">
                <span className="text-white">Smart People Make </span>
                <span className="text-[#d84935]">Expensive</span>
                <span className="text-white"> Mistakes.</span>
              </h2>

              <div className="flex flex-col gap-6">
                {contentParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-['Manrope'] font-medium text-[#b7b7b7] text-lg lg:text-xl leading-relaxed tracking-tight"
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