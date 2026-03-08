import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "Enter First Name",
      type: "text",
    },
    {
      id: "lastName",
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
    },
    {
      id: "email",
      label: "E-mail",
      placeholder: "Enter E-mail",
      type: "email",
    },
    {
      id: "mobile",
      label: "Mobile No.",
      placeholder: "Enter Mobile No.",
      type: "tel",
    },
  ];

  return (
    <div className="relative w-full max-w-[585px] mx-auto bg-[#ffffff12] rounded-lg overflow-hidden border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-lg before:[background:linear-gradient(270deg,rgba(152,44,28,1)_0%,rgba(50,14,9,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <div className="relative z-[2] px-10 py-10">
        <h2 className="[font-family:'Tilt_Warp',Helvetica] font-normal text-white text-[40px] tracking-[-0.80px] leading-[normal] mb-[70px]">
          Get In Touch
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-[18px]">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id} className="flex flex-col gap-[10px]">
                <Label
                  htmlFor={field.id}
                  className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-[#ffffff1a] border-none rounded-md px-5 py-[18px] h-auto [font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-base tracking-[-0.64px] placeholder:text-[#b7b7b7]"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-[18px]">
            {formFields.slice(2, 4).map((field) => (
              <div key={field.id} className="flex flex-col gap-[10px]">
                <Label
                  htmlFor={field.id}
                  className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]"
                >
                  {field.label}
                </Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-[#ffffff1a] border-none rounded-md px-5 py-[18px] h-auto [font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-base tracking-[-0.64px] placeholder:text-[#b7b7b7]"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[10px]">
            <Label
              htmlFor="message"
              className="[font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-xl tracking-[-0.80px] leading-[30px]"
            >
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Enter Message"
              className="bg-[#ffffff1a] border-none rounded-md px-5 py-[18px] h-[83px] resize-none [font-family:'Manrope',Helvetica] font-medium text-[#b7b7b7] text-base tracking-[-0.64px] placeholder:text-[#b7b7b7]"
            />
          </div>

          <Button
            type="submit"
            className="bg-[#972b1c] hover:bg-[#7d2417] rounded-lg px-6 py-3 h-auto gap-2.5"
          >
            <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-lg tracking-[-0.36px] leading-[normal]">
              Send Message
            </span>
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </form>
      </div>
    </div>
  );
};
