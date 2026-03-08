import { Card, CardContent } from "@/components/ui/card";

const clientGains = [
  "Clearer, defensible decisions",
  "Avoidance of expensive missteps",
  "Governance before growth",
  "Strategy that survives contact with reality",
];

const enterpriseResults = [
  "3 million dollars in enterprise revenue year one",
  "8 million dollars in enterprise revenue year two",
  "1.2 million dollar annual recurring revenue win in complex IoT monitoring",
  "High proof-of-value win rates on enterprise-scale initiatives",
  "Production-grade integrations deployed in live environments",
  "AI and observability initiatives guided under real-world constraints",
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Base Image */}
        <img
          className="w-full h-full object-cover opacity-60 filter brightness-50 blur-[2px]"
          src="/figmaAssets/silhouette-business-people-discussion-meeting-cityscape-team-con.png"
          alt="Background"
        />

        {/* Stronger gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-[#9c2d1d]/30" />

        {/* Very subtle red tint */}
        <div className="absolute inset-0 bg-[#9c2d1d]/10 pointer-events-none" />
      </div>
      {/* Subtle Red Pulse Light (Positioned behind the image card) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] bg-[#9c2d1d]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 2. Content Container */}
      <div className="relative z-10 w-full mx-auto px-6 lg:pl-[15%] lg:pr-[8%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

          {/* LEFT: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-20">
            <div className="flex flex-col gap-8">
              <h2 className="font-['Tilt_Warp'] text-white text-2xl lg:text-3xl tracking-tight border-l-4 border-[#9c2d1d] pl-4">
                What Clients Gain
              </h2>
              <ul className="space-y-6">
                {clientGains.map((gain, index) => (
                  <li key={`gain-${index}`} className="flex items-center gap-4 group">
                    <span className="w-2.5 h-2.5 bg-[#9c2d1d] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_10px_#9c2d1d]" />
                    <span className="font-['Manrope'] font-medium text-gray-200 text-lg lg:text-xl tracking-tight group-hover:text-white transition-colors lg:whitespace-nowrap">
                      {gain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="font-['Tilt_Warp'] text-white text-2xl lg:text-3xl tracking-tight border-l-4 border-[#9c2d1d] pl-4">
                Enterprise Results
              </h2>
              <ul className="space-y-6">
                {enterpriseResults.map((result, index) => (
                  <li key={`result-${index}`} className="flex items-center gap-4 group">
                    <span className="w-2.5 h-2.5 bg-[#9c2d1d] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_10px_#9c2d1d]" />
                    <span className="font-['Manrope'] font-medium text-gray-200 text-lg lg:text-xl tracking-tight group-hover:text-white transition-colors lg:whitespace-nowrap">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: The Strategy Image (Matches Height) */}
          <div className="lg:col-span-5 hidden lg:flex items-center">
            <Card className="w-full h-full max-h-[750px] bg-transparent rounded-xl overflow-hidden border-0 shadow-[0_0_60px_rgba(156,45,29,0.3)] rotate-[1deg]">
              <CardContent className="p-0 h-full relative">
                <img
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700"
                  alt="Strategy planning"
                  src="/figmaAssets/silhouettes-workers-planning-strategy-1.png"
                />
                {/* Red tint overlay specifically for the image */}
                <div className="absolute inset-0 bg-[#9c2d1d]/10 mix-blend-overlay pointer-events-none" />
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};