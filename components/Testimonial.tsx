import Image from "next/image";
import testimonial from "@/assets/testimonials.svg";
import usermain from "@/assets/usermain.svg";
import usersecondary from "@/assets/usersecondary.svg";
import star from "@/assets/star.svg";

export default function Testimonial() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full mt-20 px-5 md:px-0">
      <span className="font-light leading-relaxed">TESTIMONIAL</span>
      <span className="capitalize leading-tight text-3xl md:text-5xl font-extrabold w-full md:w-[35%] text-center mb-10">
        What our users say about us?
      </span>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-[80%] space-y-10 md:space-y-0">
        <div className="w-full md:w-[60%] flex justify-center md:justify-start">
          <Image src={testimonial} alt="testimonial" className="w-full md:w-auto" />
        </div>
        <div className="w-full md:w-[40%] space-y-4 text-center md:text-left">
          <span className="font-bold text-xl md:text-2xl capitalize leading-tight">
            The best financial accounting app ever!
          </span>
          <p className="leading-relaxed">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="flex justify-center md:justify-start items-center space-x-2">
            <Image src={usermain} alt="usermain" className="w-10 h-10 md:w-auto md:h-auto" />
            <Image src={usersecondary} alt="usersecondary" className="w-10 h-10 md:w-auto md:h-auto" />
          </div>
          <p className="font-bold">Nick Jones</p>
        </div>
      </div>
      <Image src={star} className="absolute -z-10 top-5 md:-top-10 right-5 md:right-10 w-6 md:w-10" alt="star" />
      <Image src={star} className="absolute -z-10 left-5 md:left-10 bottom-5 w-6 md:w-10 rotate-0 md:-rotate-45" alt="star" />
    </section>
  );
}
