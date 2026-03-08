import { Card, CardContent } from "@/components/ui/card";

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
    <section className="relative w-full py-16 overflow-hidden bg-[url(/figmaAssets/frame-2147226140.svg)] bg-[100%_100%]">
      <div className="absolute top-[-58px] left-[-470px] w-[1557px] h-[853px] bg-[#5b061e80] rounded-[778.5px/426.5px] blur-[300px]" />

      <div className="absolute top-[-332px] left-[1362px] w-[966px] h-[724px] bg-[#240202] rounded-[483px/362px] blur-[85px]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-8">
              <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] leading-10">
                Who I Work With
              </h2>

              <ul className="flex flex-col gap-4">
                {clientTypes.map((client, index) => (
                  <li
                    key={`client-${index}`}
                    className="[font-family:'Manrope',Helvetica] font-medium text-white text-xl tracking-[-0.16px] leading-[30px]"
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-8">
              <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[32px] tracking-[-0.64px] leading-10">
                What I Do
              </h2>

              <ul className="flex flex-col gap-4">
                {services.map((service, index) => (
                  <li
                    key={`service-${index}`}
                    className="[font-family:'Manrope',Helvetica] font-medium text-white text-xl tracking-[-0.16px] leading-[30px]"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
