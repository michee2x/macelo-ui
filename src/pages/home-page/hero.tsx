import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const translateZPoints = [0, -100, -200, -300];

const HeroButton = () => {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 text-[12px] font-extralight">
        <span>Browse Components</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

const Hero = () => {
  const texts = useRef<(HTMLSpanElement | null)[]>([]);
  const [points, setPoints] = useState([1, 2, 3, 4]);

  useGSAP(() => {
    if (!texts.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    texts.current.forEach((text, idx) => {
      if (!text) return;

      tl.to("#texts-container", {
        yPercent: (-100 * idx) / texts.current.length,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.7 * idx,
        onStart: () => {
          console.log("idx: ", idx);
          if(idx !== 0){
            setPoints((prev) => prev.map((n) => (n % 4) + 1));
          }
        },
      });
    });

    tl.set("#texts-container", {
      yPercent: 0,
      delay: 0.7,
    });
  }, []);

  useEffect(() => {
    console.log("Updated points:", points);
  }, [points[0]]);

  const bodyText = [
    "components that look like",
    "Build precisely to the",
    "Optimized templates for",
    "tools for advance"
  ]

  return (
    <div className="w-screen overflow-x-hidden flex-col relative min-h-screen flex items-center justify-cente">
      <div
        style={{ perspective: "100vh", transformStyle: "preserve-3d" }}
        className="w-full h-full flex items-center justify-center absolute inset-0"
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `translate3d(0px, 0px, 0px)`,
          }}
          className="bg-gradient-to-t from-black flex items-center justify-center via-black/[0.2] to-transparent relative w-full h-full z-30"
        ></div>

        {[
          "home-images/WhatsApp_Image_2025-07-31_at_12.07.20_AM-removebg-preview.png",
          "https://i.imgur.com/GEEU91r.png",
          "https://cdnb.artstation.com/p/assets/images/images/003/236/937/smaller_square/vadim-sadovski-2015-10-30-065811.jpg?1471459344",
          "/home-images/WhatsApp_Image_2025-07-31_at_2.27.21_AM-removebg-preview.png",
        ].map((src, idx) => (
          <motion.img
            key={idx}
            style={{
              transformStyle: "preserve-3d",
              transform: `translate3d(0px, 0px, ${
                translateZPoints[points[idx] - 1]
              }px)`,
            }}
            src={src}
            alt=""
            className="absolute w-auto max-w-[95%] h-[80%] mx-auto object-cover bg-black transition-transform duration-1000 ease-out delay-100"
          />
        ))}
      </div>

      <div className="w-auto h-auto absolute top-[6rem]">
        <HeroButton />
      </div>
      <h1 className="font-batmanmini z-50 text-[16px] bottom-[10%] lg:bottom-[15%] -translate-x-1/2 lg:translate-x-0 lg:left-0 left-1/2 w-full p-6 text-center h-auto  absolute font-extralight text-white/80">
        {bodyText[points[0] - 1]} <br />
        <span className="w-full flex h-[3.75rem] lg:h-[8rem] overflow-hidden flex-start">
          <span
            id="texts-container"
            className="flex w-full justify-center flex-col text-6xl lg:text-9xl h-[max-content]"
          >
            {["Magic", "Target", "SEO", "UIUX", "Magic"].map((e, idx) => {
              return (
                <span
                  className="w-full flex bg-gradient-to-t to-[#019fa9] from-[#f8dc2a] text-transparent bg-clip-text justify-center items-center"
                  key={`${e}-${idx}`}
                  ref={(e) => {
                    texts.current[idx] = e;
                  }}
                >
                  {e}
                </span>
              );
            })}
          </span>
        </span>
      </h1>
    </div>
  );
};

export default Hero;
