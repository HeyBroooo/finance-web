import Image from "next/image";
import features from "@/assets/features.svg";
import texture from "@/assets/texture.svg";
import star from "@/assets/star.svg";

export default function Features() {
  return (
    <section className="relative flex flex-col md:flex-row justify-between items-center w-full mt-20 px-5 md:px-0">
      <div className="w-full md:w-[40%] mb-10 md:mb-0">
        <Image src={features} alt="features" />
      </div>
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <span className="leading-relaxed font-light capitalize text-sm text-[#FF5555] text-center md:text-left">
          FEATURES
        </span>
        <span className="capitalize font-extrabold text-3xl md:text-5xl leading-tight text-center md:text-left">
          Uifry premium
        </span>
        <div className="flex flex-col justify-center my-5 md:my-8 w-full md:w-[70%] mx-auto md:mx-0 space-y-5">
          <FeatureItem
            title="Budgeting Intervals"
            description="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
          <FeatureItem
            title="Advanced Analytics"
            description="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
          <FeatureItem
            title="Custom Integrations"
            description="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
        </div>
      </div>
      <Image src={texture} alt="texture" className="absolute -z-10 -right-10 w-32 md:w-48" />
      <Image src={star} alt="star" width={30} className="absolute -z-10 top-10 left-4 w-8 md:w-12" />
    </section>
  );
}

type FeatureItemProps = {
  title: string;
  description: string;
};

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col space-y-3">
      <span className="font-bold flex items-center leading-tight">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
            stroke="#FF5555"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {title}
      </span>
      <span className="leading-relaxed font-light capitalize text-sm">
        {description}
      </span>
    </div>
  );
}
