import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BioAndCallToActionSection } from "./sections/BioAndCallToActionSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestmentPhilosophySection } from "./sections/InvestmentPhilosophySection";
import { ServicesAndClientsSection } from "./sections/ServicesAndClientsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const approachPrinciples = [
  {
    title: "Truth Over Comfort",
    description: "Honest questions now beat painful consequences later.",
  },
  {
    title: "Judgment Beats Genius",
    description: "Smart ideas fail all the time without discernment.",
  },
  {
    title: "Human First — Always",
    description: "People matter more than trends, tools, or ego.",
  },
  {
    title: "Integrity in Action",
    description: "If it's not worth doing, I'll say so.",
  },
  {
    title: "Pressure-Test Everything",
    description: "If your idea survives scrutiny, it's worth building.",
  },
];

const keynotes = [
  {
    title: "Why Smart Ideas Fail",
    description:
      "How intelligent teams make expensive mistakes and how judgment prevents them.",
  },
  {
    title: "AI, Governance & The Human Cost of Getting It Wrong",
    description:
      "The financial and human consequences of rushed AI implementation.",
  },
  {
    title: "Pressure-Testing Innovation Before It Burns Resources",
    description: "Designing systems that survive contact with reality.",
  },
  {
    title: "Building the Wrong Thing Well Is Still Failure",
    description: "Why execution doesn't save flawed strategy.",
  },
];

const testimonials = [
  {
    quote:
      "Robert naturally adds value to organizations and goes the extra mile without being asked. These qualities are invaluable.",
    author: "Edward Shanahan,",
    role: "Sr. AI Solutions Engineer",
    image: "/figmaAssets/image-295.png",
  },
  {
    quote:
      "Robert brings quality in every interaction he has and delivers results. You truly do inspire.",
    author: "Eugene Breen,",
    role: "Senior Customer Success Engineer",
    image: "/figmaAssets/image-294.png",
  },
  {
    quote:
      "With Robert's cleverness we were always one step ahead. We achieved excellent results.",
    author: "Mehmet Taluk,",
    role: "Consultant",
    image: "/figmaAssets/image-296.png",
  },
];

const bioPoints = [
  "Hacked my first computer before I could legally drive",
  "Lived on both sides of complex systems, inside enterprise and outside it",
  "Obsessed with building things, whether it's tech or perfecting my BBQ smoker",
  "I believe in leaving things better, unless you're algae on my boat (sorry, no mercy!)",
];

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#220000] overflow-hidden w-full relative">
      <div className="absolute top-[749px] left-[-293px] w-[1705px] h-[315px] bg-[#210806] rounded-[852.5px/157.5px] blur-[112px] pointer-events-none" />
      <div className="absolute top-[652px] left-[1513px] w-[565px] h-[389px] bg-[#490102] rounded-[282.5px/194.5px] blur-[100px] pointer-events-none" />
      <div className="absolute top-[1098px] left-[-230px] w-[590px] h-[619px] bg-[#ffffff1a] rounded-[295px/309.5px] blur-[100px] pointer-events-none" />
      <div className="absolute top-[3790px] left-[-38px] w-[1232px] h-[509px] bg-[#95514799] rounded-[616px/254.5px] blur-[295px] pointer-events-none" />
      <div className="absolute top-[6418px] left-[-38px] w-[753px] h-[311px] bg-[#95514799] rounded-[376.5px/155.5px] blur-[295px] pointer-events-none" />
      <div className="absolute top-[6979px] left-[1436px] w-[617px] h-[507px] bg-[#490102] rounded-[308.5px/253.5px] blur-[200px] pointer-events-none" />

      <HeroSection />

      <section className="relative w-full py-20">
        <div className="absolute top-[-64px] left-[1380px] [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[204px] tracking-[-8.16px] leading-[normal] pointer-events-none">
          Ideas
        </div>
        <div className="max-w-[1140px] mx-auto px-5 text-center">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-5xl tracking-[-0.96px] leading-[normal] mb-12">
            <span className="text-white tracking-[-0.46px]">
              I Ruin Bad Ideas Early So You
              <br />
              only Invest In What&apos;s{" "}
            </span>
            <span className="text-[#d84935] tracking-[-0.46px]">
              truly worth building
            </span>
          </h2>
        </div>
      </section>

      <InvestmentPhilosophySection />

      <section className="relative w-full py-20">
        <div className="absolute top-[-100px] left-[1333px] [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[134px] tracking-[-5.36px] leading-[normal] pointer-events-none">
          Approach
        </div>
        <div className="max-w-[1140px] mx-auto px-5">
          <div className="flex gap-20 items-start">
            <div className="w-[582px] flex-shrink-0">
              <div className="w-full h-[727px] flex justify-center bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Building dreamy"
                  src="/figmaAssets/building-dreamy-setting-1.png"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-5xl tracking-[-0.96px] leading-[normal] mb-12">
                <span className="text-white tracking-[-0.46px]">My </span>
                <span className="text-[#d84935] tracking-[-0.46px]">
                  Approach
                </span>
              </h2>

              <div className="flex flex-col gap-0">
                {approachPrinciples.map((principle, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-4 pt-0 pb-6 ${
                      index < approachPrinciples.length - 1
                        ? "border-b border-[#d84935]"
                        : ""
                    }`}
                  >
                    <h3 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[28px] tracking-[-0.56px] leading-9">
                      {principle.title}
                    </h3>
                    <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="absolute top-[-70px] left-[-341px] w-[1058px] -rotate-90 [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[164px] tracking-[-6.56px] leading-[147px] pointer-events-none">
          Speaking &amp; Media
        </div>
        <img
          className="w-full h-[798px] object-cover mb-12"
          alt="Mask group"
          src="/figmaAssets/mask-group.png"
        />

        <div className="max-w-[1140px] mx-auto px-5">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-5xl tracking-[-0.96px] leading-[normal] text-center mb-12">
            Speaking &amp; Media
          </h2>

          <div className="flex flex-col gap-4 mb-12 text-center">
            <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
              I am a Strategic Advisor trusted inside some of the largest
              enterprises to guide complex technology, product, and governance
              decisions.
            </p>
            <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
              I am known for asking the questions most people avoid, especially
              when the cost of getting it wrong is high.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[28px] tracking-[-0.56px] leading-9 mb-6">
              Signature Keynotes
            </h3>

            <div className="flex flex-col gap-0">
              {keynotes.map((keynote, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 pt-0 pb-6 ${
                    index < keynotes.length - 1
                      ? "border-b border-[#d84935]"
                      : ""
                  }`}
                >
                  <h4 className="[font-family:'Manrope',Helvetica] font-bold text-white text-xl tracking-[-0.80px] leading-[normal]">
                    {keynote.title}
                  </h4>
                  <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
                    {keynote.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#972b1c] rounded-lg h-auto hover:bg-[#7a2316]">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-[normal]">
              Invite Me to Speak
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </section>

      <ServicesAndClientsSection />

      <section className="relative w-full py-20">
        <div className="max-w-[1140px] mx-auto px-5 text-center mb-16">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-5xl tracking-[-0.96px] leading-[normal]">
            <span className="text-white tracking-[-0.46px]">
              Trusted Behind the Scenes of
              <br />
            </span>
            <span className="text-[#d84935] tracking-[-0.46px]">
              Fortune 100{" "}
            </span>
            <span className="text-white tracking-[-0.46px]">
              and Global Enterprise Organizations
            </span>
          </h2>
        </div>

        <div className="max-w-[1140px] mx-auto px-5">
          <div className="grid grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#ffffff12] rounded-lg overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-lg before:[background:linear-gradient(270deg,rgba(152,44,28,1)_0%,rgba(50,14,9,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="p-10 relative">
                  <img
                    className="w-10 h-10 mb-8"
                    alt="Quote"
                    src="/figmaAssets/boxicons-quote-left-filled.svg"
                  />
                  <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px] mb-8">
                    {testimonial.quote}
                  </p>
                  <div className="w-full h-px bg-[#d84935] mb-8" />
                  <div className="flex items-center gap-4">
                    <img
                      className="w-[46px] h-[46px] rounded-full object-cover"
                      alt={testimonial.author}
                      src={testimonial.image}
                    />
                    <div className="[font-family:'Manrope',Helvetica] text-base leading-4">
                      <span className="font-bold text-white tracking-[-0.05px]">
                        {testimonial.author}{" "}
                      </span>
                      <span className="font-medium text-white tracking-[-0.05px]">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-[7px] mt-12">
            <div className="w-2.5 h-2.5 bg-[#9c2d1d] rounded-[5px]" />
            <div className="w-2.5 h-2.5 bg-white rounded-[5px] opacity-40" />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="relative w-full py-20">
        <div className="max-w-[1140px] mx-auto px-5">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-5xl tracking-[-0.96px] leading-[normal] mb-12">
            <span className="text-[#d84935] tracking-[-0.46px]">Beyond</span>
            <span className="text-white tracking-[-0.46px]"> the Bio</span>
          </h2>

          <div className="flex gap-20 items-start">
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                {bioPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <img
                      className="w-[35px] h-[35px] flex-shrink-0"
                      alt="Checkmark"
                      src="/figmaAssets/frame-2147226154.svg"
                    />
                    <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="absolute top-[-84px] left-[205px] w-[247px] h-[210px] bg-[#c0c0c0] rounded-[10px] overflow-hidden z-30">
                <img
                  className="w-full h-full object-cover"
                  alt="Image"
                  src="/figmaAssets/image-302.png"
                />
              </div>
              <div className="absolute top-[-60px] left-0 w-[297px] h-[297px] bg-[#a6a6a6] rounded-[10px] overflow-hidden z-20">
                <img
                  className="w-full h-full object-cover"
                  alt="Data center"
                  src="/figmaAssets/data-center-engineering-team-implements-ai-virtualization-framew.png"
                />
              </div>
              <div className="w-[334px] h-[334px] bg-white rounded-[10px] overflow-hidden z-10">
                <img
                  className="w-full h-full object-cover"
                  alt="Image"
                  src="/figmaAssets/image-314.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="absolute top-[-100px] left-5 [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[184px] tracking-[-7.36px] leading-[normal] pointer-events-none">
          Right Call
        </div>
        <div className="max-w-[1140px] mx-auto px-5">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-5xl tracking-[-0.96px] leading-[62px] mb-8">
            <span className="text-[#d84935] tracking-[-0.46px]">Ready</span>
            <span className="text-white tracking-[-0.46px]">
              {" "}
              to Make the Right Call?
            </span>
          </h2>
          <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px] max-w-[440px]">
            If you are about to commit serious capital, reputation, or talent to
            a major decision and want clarity before consequences, send me a
            message.
          </p>
        </div>
      </section>

      <ContactFormSection />

      <BioAndCallToActionSection />
    </div>
  );
};
