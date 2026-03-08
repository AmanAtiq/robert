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
    <section className="relative w-full bg-white py-16">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Silhouette business"
        src="/figmaAssets/silhouette-business-people-discussion-meeting-cityscape-team-con.png"
      />

      <div className="relative container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] leading-10">
                What Clients Gain
              </h2>
              <ul className="flex flex-col gap-4">
                {clientGains.map((gain, index) => (
                  <li
                    key={`client-gain-${index}`}
                    className="[font-family:'Manrope',Helvetica] font-medium text-white text-xl tracking-[-0.16px] leading-[30px]"
                  >
                    {gain}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] leading-10">
                Enterprise Results
              </h2>
              <ul className="flex flex-col gap-4">
                {enterpriseResults.map((result, index) => (
                  <li
                    key={`enterprise-result-${index}`}
                    className="[font-family:'Manrope',Helvetica] font-medium text-white text-xl tracking-[-0.16px] leading-[30px]"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-end">
            <Card className="w-full max-w-[449px] bg-white rounded-lg overflow-hidden border-0">
              <CardContent className="p-0">
                <img
                  className="w-full h-auto object-cover"
                  alt="Silhouettes workers"
                  src="/figmaAssets/silhouettes-workers-planning-strategy-1.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
