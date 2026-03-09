import React from "react";

const clientTypes = [
  "Executives making high-stakes technology bets",
  "Product leaders navigating feature sprawl and roadmap drift",
  "Enterprise teams implementing AI without clear governance",
  "Organizations about to commit significant capital or reputation",
];

const services = [
  "Pressure-test ideas before major investment",
  "Challenge assumptions that hide risk",
  "Clarify governance and decision frameworks",
  "Cut through hype, noise, and internal politics",
  "Align strategy with real-world execution",
];

export const ServicesAndClientsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-black overflow-hidden border-t border-white/5">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/figmaAssets/frame-2147226140.svg"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />

        {/* subtle tint */}
        <div className="absolute inset-0 bg-[#5b061e]/20" />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[100%] bg-[#5b061e70] rounded-full blur-[150px]" />
        <div className="absolute top-[10%] -right-[10%] w-[60%] h-[80%] bg-[#24020270] rounded-full blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[0%] w-[70%] h-[90%] bg-[#5b061e50] rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full mx-auto px-6 lg:pl-[45%] lg:pr-[5%]">
        <div className="flex flex-col gap-24">

          {/* Who I Work With */}
          <div className="flex flex-col gap-8">
            <h2 className="font-['Tilt_Warp'] text-white text-2xl lg:text-3xl tracking-tight 
              ">
              Who I Work With
            </h2>

            <ul className="space-y-6">
              {clientTypes.map((client, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <span className="w-2.5 h-2.5 bg-[#9c2d1d] rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-['Manrope'] text-gray-300 text-lg lg:text-xl group-hover:text-white transition-colors">
                    {client}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Do */}
          <div className="flex flex-col gap-8">
            <h2 className="font-['Tilt_Warp'] text-white text-2xl lg:text-3xl tracking-tight  ">
              What I Do
            </h2>

            <ul className="space-y-6">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <span className="w-2.5 h-2.5 bg-[#9c2d1d] rounded-full group-hover:scale-125 transition-transform" />
                  <span className="font-['Manrope'] text-gray-300 text-lg lg:text-xl group-hover:text-white transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
};