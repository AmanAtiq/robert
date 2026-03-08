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

      {/* Investment Philosophy Card */}
      <section className="w-full px-4 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <InvestmentPhilosophySection />
        </div>
      </section>

      {/* Investment Philosophy Section */}
      <section className="w-full py-12 lg:py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
            <span className="text-white">
              I Ruin Bad Ideas Early So You
              <br />
              only Invest In What&apos;s{" "}
            </span>
            <span className="text-[#d84935]">truly worth building</span>
          </h2>
        </div>
      </section>
      
      <section className="relative w-full py-20 lg:py-32 bg-black overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/figmaAssets/mask-group.png"
            alt="Background"
            className="w-full h-full object-cover opacity-50 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          {/* Background text effect */}
          <div className="absolute top-[-70px] left-[-341px] w-[1058px] -rotate-90 [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[164px] tracking-[-6.56px] leading-[147px] pointer-events-none hidden lg:block">
            Speaking &amp; Media
          </div>

          <div className="flex flex-col gap-12">
            <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-4xl lg:text-5xl tracking-[-0.96px] leading-[normal] text-center lg:text-left mb-8">
              Speaking &amp; Media
            </h2>

            <div className="flex flex-col gap-4 mb-12 lg:max-w-2xl">
              <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-lg lg:text-xl tracking-[-0.80px] leading-[30px]">
                I am a Strategic Advisor trusted inside some of the largest
                enterprises to guide complex technology, product, and governance
                decisions.
              </p>
              <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-lg lg:text-xl tracking-[-0.80px] leading-[30px]">
                I am known for asking the questions most people avoid, especially
                when the cost of getting it wrong is high.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-2xl lg:text-[28px] tracking-[-0.56px] leading-9 mb-6">
                Signature Keynotes
              </h3>

              <div className="flex flex-col gap-0 max-w-3xl">
                {keynotes.map((keynote, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-3 py-6 ${
                      index < keynotes.length - 1
                        ? "border-b border-[#d84935]"
                        : ""
                    }`}
                  >
                    <h4 className="font-bold text-white text-lg lg:text-xl">
                      {keynote.title}
                    </h4>

                    <p className="text-[#b7b7b7] text-base lg:text-lg leading-relaxed">
                      {keynote.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Button className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#972b1c] rounded-lg h-auto hover:bg-[#7a2316] w-fit">
              <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-[normal]">
                Invite Me to Speak
              </span>
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      <ServicesAndClientsSection />
      <TestimonialsSection />
      <section className="w-full py-12 lg:py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[590px] h-auto aspect-[590/731] rounded-lg overflow-hidden">

                <img
                  className="w-full h-full object-cover opacity-70"
                  alt="Professional portrait"
                  src="/figmaAssets/building-dreamy-setting-1.png"
                />



              </div>
            </div>

            {/* Text Column */}
            <div className="flex flex-col gap-12">

              {/* Heading moved here */}
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-white">My </span>
                <span className="text-[#d84935]">Approach</span>
              </h2>

              {approachPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 pb-6 ${
                    index < approachPrinciples.length - 1
                      ? "border-b border-[#d84935]"
                      : ""
                  }`}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {principle.title}
                  </h3>

                  <p className="text-[#b7b7b7] text-lg lg:text-xl leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
      <section className="relative w-full py-20">
        <div className="max-w-[1140px] mx-auto px-4 lg:px-5 text-center mb-16">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-3xl lg:text-5xl tracking-[-0.96px] leading-[normal]">
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

        <div className="max-w-[1140px] mx-auto px-4 lg:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#ffffff12] rounded-lg overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-lg before:[background:linear-gradient(270deg,rgba(152,44,28,1)_0%,rgba(50,14,9,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <CardContent className="p-6 lg:p-10 relative">
                  <img
                    className="w-10 h-10 mb-8"
                    alt="Quote"
                    src="/figmaAssets/boxicons-quote-left-filled.svg"
                  />
                  <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-base lg:text-xl tracking-[-0.80px] leading-[30px] mb-8">
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

    
      <section className="relative w-full py-24 lg:py-32 bg-[#1a0505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-['Tilt_Warp'] mb-8 lg:mb-10">
            <span className="text-[#d84935]">Beyond</span>
            <span className="text-white"> the Bio</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT: Text Content (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8 relative z-30">
              {bioPoints.map((point, index) => (
                <div key={index} className="flex gap-5 items-start group">
                  {/* Frame 2147226152 - Checkbox Container */}
                  <div className="flex-shrink-0 relative w-[35px] h-[35px] bg-white/10 rounded-[4px] flex items-center justify-center overflow-hidden">
                    {/* fa6-solid:check Icon / Vector */}
                    <svg 
                      width="18" 
                      height="20" 
                      viewBox="0 0 18 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" 
                        fill="#D84A35" 
                      />
                    </svg>
                  </div>

                  {/* Point Text */}
                  <p className="font-['Manrope'] text-gray-300 text-base lg:text-lg leading-relaxed pt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            {/* RIGHT: Images Section (7 Columns) */}
            <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[550px] w-full">
              {/* 1. The Tall Image - Background Layer */}
              <div className="absolute left-[35%] top-[25%] w-[50%] h-[50%] rounded-[10px] overflow-hidden shadow-2xl z-0 bg-black/20">
                <img 
                  src="/figmaAssets/image-302.png"
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: '0px -220px' }} 
                  alt="Tall Bio" 
                />
              </div>

              {/* 2. The Smaller Top Image */}
              <div className="absolute left-[45%] top-0 w-[35%] h-[35%] rounded-[10px] overflow-hidden shadow-2xl z-20">
                <img 
                  src="/figmaAssets/data-center-engineering-team-implements-ai-virtualization-framew.png"
                  className="w-full h-full object-cover" 
                  style={{ objectPosition: '-60px -10px' }}
                  alt="Top Detail" 
                />
              </div>

              {/* 3. The Square Team Image - Foreground Layer */}
              <div className="absolute left-[10%] top-[15%] w-[42%] aspect-square rounded-[10px] overflow-hidden shadow-2xl z-10">
                <img 
                  src="/figmaAssets/image-314.png"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '-50px center' }}
                  alt="Engineering Team" 
                />
              </div>

              {/* Background Glow to unify the stack */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#9c2d1d]/10 blur-[120px] rounded-full z-[-1] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="absolute top-[-100px] left-5 [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[184px] tracking-[-7.36px] leading-[normal] pointer-events-none">
          Right Call
        </div>
      
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-12">
                  <span className="text-[#d84935]">Ready</span>
                  <span className="text-white"> to Make the Right Call?</span>
                </h2>

                <p className="text-[#b7b7b7] text-lg lg:text-xl leading-relaxed">
                  If you are about to commit serious capital, reputation, or talent to a
                  major decision and want clarity before consequences, send me a
                  message.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ContactFormSection />
              </div>
            </div>
          </div>
        </section>

    

      <BioAndCallToActionSection />
    </div>
  );
};
