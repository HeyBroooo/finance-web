import React from "react";
import texture from "@/assets/texture.svg";
import heroimg from "@/assets/hero.svg";
import tape from "@/assets/tape.svg";
import Image from "next/image";
import star from "@/assets/star.svg";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center mt-20 px-5 md:px-0">
      <Image
        src={star}
        alt="star1"
        className="absolute -z-10 right-8 -top-12"
      />
      <Image
        src={star}
        alt="star2"
        width={40}
        className="absolute -z-10 left-10 top-24 -rotate-45"
      />
      <Image
        src={star}
        alt="star3"
        width={40}
        className="absolute -z-10 right-96 bottom-20 rotate-45"
      />
      <Image
        src={star}
        alt="star4"
        width={40}
        className="absolute -z-10 left-60 bottom-48 -rotate-45"
      />
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start h-auto md:h-[80vh]">
        <div className="flex flex-col justify-center items-start w-full md:w-[50%] text-center md:text-left">
          <span className="relative text-3xl md:text-5xl font-extrabold leading-tight">
            Make The Best Financial Decision
            <Image
              src={texture}
              alt="texture"
              width={400}
              className="absolute -z-10 -top-20"
            />
          </span>
          <span className="leading-relaxed mt-2 font-light capitalize text-sm md:text-base">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </span>
          <div className="self-start flex flex-col md:flex-row justify-between items-center my-5 w-full md:w-[75%] space-y-3 md:space-y-0 md:space-x-3">
            <button className="px-8 py-3 bg-black text-white rounded-md text-base flex justify-between items-center w-full md:w-auto">
              Get Started
              <svg
                width="25"
                height="8"
                viewBox="0 0 25 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="px-5 py-3 w-full md:w-auto flex justify-center items-center hover:bg-black/10 rounded-md">
              <svg
                width="154"
                height="29"
                viewBox="0 0 154 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                <path
                  d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                  fill="black"
                  stroke="black"
                />
                <path
                  d="M49.3 20L51.586 12.98L52.45 9.884H52.612L53.494 12.98L55.924 20H58.786L61.81 7.94H59.686L57.886 15.572L57.382 18.128H57.238L56.554 15.572L53.962 7.94H51.136L48.706 15.572L48.058 18.128H47.914L47.374 15.572L45.412 7.94H43.252L46.438 20H49.3ZM65.5827 20.18C67.6167 20.18 69.0387 19.28 69.5067 17.768H69.6327V20H71.4147V14.564C71.4147 12.422 70.1367 10.874 67.2927 10.874C64.4487 10.874 62.7567 12.404 62.7567 14.438V14.51H64.6827V14.438C64.6827 13.124 65.4927 12.584 67.1487 12.584C68.8587 12.584 69.5067 13.106 69.5067 14.582V15.104L65.4387 15.536C63.6747 15.734 62.5587 16.454 62.5587 17.84C62.5587 19.316 63.7287 20.18 65.5827 20.18ZM64.5027 17.714C64.5027 17.012 64.9887 16.778 65.9967 16.652L69.5067 16.256C69.5067 18.02 68.1387 18.776 66.1047 18.776C64.9887 18.776 64.5027 18.434 64.5027 17.714ZM79.018 20V18.254H77.398C76.282 18.254 75.778 17.966 75.778 16.868V12.674H79.018V11.054H75.778V9.092H73.852V11.054H72.34V12.674H73.852V16.976C73.852 19.154 75.04 20 76.966 20H79.018ZM84.752 20.18C87.434 20.18 89.396 18.668 89.396 16.436V16.238H87.47V16.364C87.47 17.75 86.462 18.434 84.716 18.434C82.7 18.434 81.8 17.462 81.8 15.536C81.8 13.574 82.7 12.62 84.716 12.62C86.462 12.62 87.47 13.304 87.47 14.69V14.798H89.396V14.618C89.396 12.386 87.434 10.874 84.752 10.874C81.8 10.874 79.874 12.746 79.874 15.536C79.874 18.29 81.8 20.18 84.752 20.18ZM92.7776 20V15.662C92.7776 13.772 93.5336 12.62 95.6576 12.62C97.5116 12.62 98.3216 13.34 98.3216 15.14V20H100.248V14.672C100.248 12.494 99.0416 10.874 96.5756 10.874C94.2896 10.874 93.1916 12.278 92.8856 13.79H92.7776V7.94H90.8336V20H92.7776ZM111.984 20L117.132 7.94H114.846L110.706 18.038H110.562L106.386 7.94H104.082L109.23 20H111.984ZM119.901 10.01V7.94H117.957V10.01H119.901ZM119.901 20V11.054H117.957V20H119.901ZM125.643 20.18C127.659 20.18 128.973 19.208 129.351 17.426H129.477V20H131.259V7.94H129.315V13.484H129.207C128.847 11.972 127.641 10.874 125.517 10.874C122.799 10.874 121.251 12.746 121.251 15.536C121.251 18.29 122.817 20.18 125.643 20.18ZM123.213 15.536C123.213 13.376 124.329 12.638 126.201 12.638C128.199 12.638 129.315 13.574 129.315 15.482V15.626C129.315 17.498 128.145 18.398 126.237 18.398C124.311 18.398 123.213 17.678 123.213 15.536ZM137.556 20.18C140.22 20.18 142.092 18.866 142.092 16.958V16.796H140.148V16.94C140.148 18.002 139.374 18.614 137.502 18.614C135.432 18.614 134.586 17.696 134.514 15.968H142.11C142.164 15.698 142.182 15.446 142.182 15.122C142.182 12.404 140.292 10.874 137.52 10.874C134.604 10.874 132.696 12.746 132.696 15.536C132.696 18.524 134.622 20.18 137.556 20.18ZM137.484 12.404C139.392 12.404 140.346 13.196 140.346 14.852V14.888H134.532C134.64 13.286 135.504 12.404 137.484 12.404ZM148.21 20.18C151.198 20.18 153.196 18.29 153.196 15.536C153.196 12.746 151.198 10.874 148.21 10.874C145.24 10.874 143.242 12.746 143.242 15.536C143.242 18.29 145.24 20.18 148.21 20.18ZM148.21 18.452C146.05 18.452 145.15 17.426 145.15 15.536C145.15 13.628 146.05 12.584 148.21 12.584C150.388 12.584 151.288 13.628 151.288 15.536C151.288 17.426 150.388 18.452 148.21 18.452Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <Image src={tape} alt="tape" className="w-[80%] md:w-[60%]" />
        </div>
        <div className="w-full md:w-[50%] h-full flex justify-center items-center mt-10 md:mt-0">
          <Image src={heroimg} alt="heroimg" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
