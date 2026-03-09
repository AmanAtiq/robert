import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BioAndCallToActionSection } from "./sections/BioAndCallToActionSection";
import { ContactFormSection } from "./sections/ContactFormSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestmentPhilosophySection } from "./sections/InvestmentPhilosophySection";
import { ServicesAndClientsSection } from "./sections/ServicesAndClientsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import React, { useState } from "react";
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
  {
    quote:
      "With Robert's cleverness we were always one step ahead. We achieved excellent results.",
    author: "Mehmet Taluk,",
    role: "Consultant",
    image: "/figmaAssets/image-296.png",
  },  {
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

const QuoteMarkIcon = (): JSX.Element => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 mb-8"
    aria-hidden="true"
  >
    <path
      d="M35.0168 16.668H30.2668C30.7168 14.968 31.9501 12.4846 35.4168 11.618L36.6834 11.3013V6.66797H35.0168C30.3834 6.66797 26.8334 7.9513 24.5001 10.4846C21.3501 13.9013 21.6668 18.2846 21.6834 18.3346V30.0013C21.6834 31.8346 23.1834 33.3346 25.0168 33.3346H35.0168C36.8501 33.3346 38.3501 31.8346 38.3501 30.0013V20.0013C38.3501 18.168 36.8501 16.668 35.0168 16.668ZM15.0168 16.668H10.2668C10.7168 14.968 11.9501 12.4846 15.4168 11.618L16.6834 11.3013V6.66797H15.0168C10.3834 6.66797 6.83344 7.9513 4.50011 10.4846C1.35011 13.9013 1.66678 18.2846 1.68344 18.3346V30.0013C1.68344 31.8346 3.18344 33.3346 5.01678 33.3346H15.0168C16.8501 33.3346 18.3501 31.8346 18.3501 30.0013V20.0013C18.3501 18.168 16.8501 16.668 15.0168 16.668Z"
      fill="#9C2D1D"
    />
  </svg>
);

export const HomePage = (): JSX.Element => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
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
              Only Invest In What&apos;s{" "}
            </span>
            <span className="text-[#d84935]">Truly Worth Building</span>
          </h2>
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
                  className={`flex flex-col gap-3 py-8 first:pt-0 ${
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
       <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        {/* TOP CONTENT: Centered Header and Intro Paragraphs */}
        <div className="relative z-20 max-w-[1140px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center mb-16">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-4xl lg:text-5xl tracking-[-0.96px] mb-12">
            Speaking &amp; Media
          </h2>

          <div className="flex flex-col items-center">
            {/* Reduced negative tracking from -0.80px to -0.01em for better readability */}
            <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-lg lg:text-xl tracking-[-0.2px] leading-[30px] mb-4 max-w-[1100px]">
              I am a Strategic Advisor trusted inside some of the largest enterprises to guide complex technology, product, and governance decisions.
            </p>
            <p className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-lg lg:text-xl tracking-[-0.2px] leading-[30px] max-w-[1850px]">
              I am known for asking the questions most people avoid, especially when the cost of getting it wrong is high.
            </p>
          </div>
        </div>

        {/* BOTTOM CONTENT AREA */}
        <div className="relative w-full min-h-fit">

          {/* VERTICAL BACKGROUND TEXT: 90 Degree Standing */}
          <div className="absolute top-0 left-[-13%] bottom-110 hidden lg:flex items-center justify-center z-0 pointer-events-none">
            <div className="rotate-[-90deg] [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[120px] lg:text-[144px] tracking-[-7.36px] uppercase text-center leading-[1]">
              Speaking &<br />
              Media
            </div>
          </div>

          {/* BACKGROUND IMAGE LAYER */}
          <div className="absolute top-0 left-0 lg:left-[20%] right-0 bottom-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/figmaAssets/mask-group.png"
              alt="Background"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#220000] via-[#220000]/80 to-[#972b1c]/15" />
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 max-w-[1140px] mx-auto px-4 lg:px-8 py-4">
            <div className="w-full flex flex-col items-start text-left">
              <h3 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-2xl lg:text-[28px] tracking-[-0.56px] leading-9 mb-6">
                Signature Keynotes
              </h3>

              <div className="max-w-3xl w-full">
                {keynotes.map((keynote, index) => (
                  <div
                    key={index}
                    className={`py-8 first:pt-0 relative z-10 ${
                      index < keynotes.length - 1 ? "border-b border-[#d84935]" : ""
                    }`}
                  >
                    <h4 className="font-bold text-white text-lg lg:text-xl mb-3">
                      {keynote.title}
                    </h4>
                    <p className="text-[#b7b7b7] text-base lg:text-lg leading-relaxed">
                      {keynote.description}
                    </p>
                  </div>
                ))}
              </div>

              <Button className="mt-8 inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#972b1c] rounded-lg h-auto hover:bg-[#7a2316] relative z-20">
                <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-lg tracking-[-0.36px]">
                  Invite Me to Speak
                </span>
                <ArrowRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full py-20">
        <div className="max-w-[1140px] mx-auto px-4 lg:px-5 text-center mb-16">
          <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-3xl lg:text-5xl tracking-tight text-white">
            Trusted Behind the Scenes of <span className="text-[#d84935]">Fortune 100</span>
          </h2>
        </div>

        <div className="max-w-[1140px] mx-auto px-4 lg:px-5 overflow-hidden">
          <div 
            className="flex gap-6 lg:gap-10 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <Card key={i} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-27px)] bg-[#ffffff12] border-none relative">
                <CardContent className="p-10">
                  <QuoteMarkIcon />
                  <p className="text-[#b7b7b7] text-lg lg:text-xl leading-[30px] mb-8 tracking-tight">{t.quote}</p>
                  <div className="w-full h-px bg-[#d84935] mb-8" />
                  <div className="flex items-center gap-4">
                    <img className="w-[46px] h-[46px] rounded-full object-cover" src={t.image} alt={t.author} />
                    <div className="text-white">
                      <p className="font-bold">{t.author}</p>
                      <p className="text-sm opacity-70">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* SLIDER DOTS */}
          <div className="flex justify-center gap-3 mt-12">
            {[0, 1].map((dot) => (
              <button 
                key={dot}
                onClick={() => setTestimonialIndex(dot)}
                title={`Go to testimonial ${dot + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${testimonialIndex === dot ? "bg-[#9c2d1d] scale-125" : "bg-white opacity-40"}`}
              />
            ))}
          </div>
        </div>
      </section>
    
      <section className="relative w-full py-24 lg:py-32 bg-[#1a0505] overflow-hidden">
        <div className="max-w-[1140px] mx-auto px-4 lg:px-8 relative">

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-['Tilt_Warp'] mb-12">
            <span className="text-[#d84935]">Beyond</span>
            <span className="text-white"> the Bio</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Text Content */}
            <div className="flex flex-col gap-8">
              {bioPoints.map((point, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-[35px] h-[35px] bg-white/10 rounded-[4px] flex items-center justify-center">
                    <svg 
                      width="18" 
                      height="20" 
                      viewBox="0 0 18 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path 
                        d="M17.6224 4.11621C18.1246 4.60449 18.1246 5.39746 17.6224 5.88574L7.33669 15.8857C6.83446 16.374 6.01883 16.374 5.5166 15.8857L0.373744 10.8857C-0.128488 10.3975 -0.128488 9.60449 0.373744 9.11621C0.875977 8.62793 1.6916 8.62793 2.19383 9.11621L6.42866 13.2295L15.8063 4.11621C16.3086 3.62793 17.1242 3.62793 17.6264 4.11621H17.6224Z"
                        fill="#D84A35" 
                      />
                    </svg>
                  </div>
                  <p className="font-['Manrope'] text-[#b7b7b7] text-base lg:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            {/* RIGHT: Images - Absolute Positioned Stack */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Image 1: Bottom-right square (334x334) */}
              <div className="absolute right-0 bottom-0 w-[280px] lg:w-[334px] h-[280px] lg:h-[334px] rounded-[10px] overflow-hidden shadow-2xl z-0 bg-white">
                <img 
                  src="/figmaAssets/image-314.png"
                  className="w-full h-full object-cover"
                  alt="Team" 
                />
              </div>

              {/* Image 2: Middle-left (297x297) */}
              <div className="absolute left-0 top-[50px] lg:top-[80px] w-[250px] lg:w-[297px] h-[250px] lg:h-[297px] rounded-[10px] overflow-hidden shadow-2xl z-10 bg-[#a7a7a7]">
                <img 
                  src="/figmaAssets/data-center-engineering-team-implements-ai-virtualization-framew.png"
                  className="w-full h-full object-cover"
                  alt="Engineering" 
                />
              </div>

              {/* Image 3: Top-right small (247x210) */}
              <div className="absolute right-[30px] lg:right-[80px] top-0 w-[200px] lg:w-[247px] h-[170px] lg:h-[210px] rounded-[10px] overflow-hidden shadow-2xl z-20 bg-[#c0c0c0]">
                <img 
                  src="/figmaAssets/image-302.png"
                  className="absolute -left-[101px] -top-[46px] w-[456px] h-64 max-w-none"
                  alt="Detail" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
     
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
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

                <div className="mt-8 [font-family:'Tilt_Warp',Helvetica] font-normal text-[#ffffff08] text-[clamp(52px,18vw,154px)] tracking-[-2px] lg:tracking-[-7.36px] leading-[0.9] whitespace-nowrap pointer-events-none select-none">
                  Right Call
                </div>
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
