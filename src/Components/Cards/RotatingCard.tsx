import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { LuClipboardCopy } from "react-icons/lu";

const RotatingCards = ({ children }: { children: React.ReactNode }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const firstGlow = useRef<HTMLDivElement | null>(null);
  const secondGlow = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const containerEl = container.current;
    const glowEl = firstGlow.current;
    const glowEl2 = secondGlow.current;
    if (!containerEl || !glowEl || !glowEl2) return;

    const containerRect = containerEl.getBoundingClientRect();
    const glowRect = glowEl.getBoundingClientRect();

    const maxX = containerRect.width - glowRect.width;
    const maxY = containerRect.height - glowRect.height;

    const tl = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline({ repeat: -1 });

    tl.to(glowEl, {
      x: maxX,
      duration: 2,
      delay: 4,
    })
      .to(glowEl, {
        x: maxX,
        y: maxY,
        duration: 1,
      })
      .to(glowEl, {
        x: 0,
        y: maxY,
        duration: 2,
        delay: 4,
      })
      .to(glowEl, {
        x: 0,
        y: 0,
        duration: 1,
      });

    tl2
      .to(glowEl2, {
        x: maxX * -1,
        y: 0,
        duration: 2,
        delay: 4,
      })
      .to(glowEl2, {
        x: maxX * -1,
        y: maxY * -1,
        duration: 1,
      })
      .to(glowEl2, {
        x: 0,
        y: maxY * -1,
        duration: 2,
        delay: 4,
      })
      .to(glowEl2, {
        x: 0,
        y: 0,
        duration: 1,
      });
  });

  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden lg:overflow-visible">
      <div className="w-[90%] lg:w-[90%] mx-auto h-auto flex relative items-center justify-center">
        <div ref={container} className="w-full h-full absolute inset-0">
          <div className="w-full h-full flex items-center max-w-[1024px] flex-nowrap">
            <div
              ref={firstGlow}
              className="will-change-transform left-0 top-0 right-auto bottom-auto absolute h-1/2 w-[60%]"
              style={{ transformOrigin: "50% 50% 0px", transform: "none" }}
            >
              <div
                className="framer-1mp0ms h-full w-full absolute top-0 left-0 mix-blend-color"
                style={{
                  backgroundColor: "rgb(242, 113, 40)",
                  filter: "blur(40px)",
                  borderRadius: "14px",
                  opacity: 0.6,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-1vb0prg h-full w-full absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(242, 113, 40)",
                  filter: "blur(24px)",
                  borderRadius: "14px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-1peacfq h-full w-full absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(242, 113, 40)",
                  filter: "blur(6px)",
                  borderRadius: "14px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-18s8pui h-full w-full absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  mask: "radial-gradient(100% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                  borderRadius: "14px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-za08jn h-full w-full absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  filter: "blur(4px)",
                  borderRadius: "12px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-nnjnwr inset-[-96px] absolute pointer-events-none"
                data-framer-name="Dots"
                style={{
                  mask: "radial-gradient(50% 46% at 50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                  transform: "none",
                  transformOrigin: "50% 50% 0px;",
                }}
              >
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    backgroundImage: `url("https://framerusercontent.com/images/Qq5c89sJrXJ3dNdpquNZ7ptg0o.svg")`,
                    backgroundPosition: "left top",
                    backgroundSize: "3px",
                  }}
                  className="absolute rounded-[inherit] inset-0 bg-repeat h-full w-full pointer-events-none top-0 left-0"
                ></div>
              </div>
            </div>

            <div
              ref={secondGlow}
              className="w-[60%] h-1/2 right-0 bottom-0 absolute pointer-events-none will-change-transform transform-none"
              data-framer-name="Indigo"
              style={{ transformOrigin: "50% 50% 0px" }}
            >
              <div
                className="framer-toakzy w-full h-full mix-blend-color absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(99, 102, 241)",
                  filter: "blur(40px)",
                  borderRadius: "14px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-qg6hwr w-full h-full absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(99, 102, 241)",
                  filter: "blur(24px)",
                  borderRadius: "14px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-13paqzx w-full h-full absolute top-0 left-0"
                style={{
                  backgroundColor: "rgb(99, 102, 241)",
                  filter: "blur(6px)",
                  borderRadius: "14px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-hyej3l w-full h-full absolute right-0 bottom-0"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  mask: "radial-gradient(100% 100% at 100% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                  filter: "blur(40px)",
                  borderRadius: "12px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  willChange: "auto",
                }}
              ></div>
              <div
                className="framer-156m4ec w-full h-full absolute right-[2px] bottom-[2px]"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  filter: "blur(4px)",
                  borderRadius: "12px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <div
                className="framer-1o0o3cw inset-[-96px] absolute pointer-events-none"
                data-framer-name="Dots"
                style={{
                  mask: "radial-gradient(50% 46% at 50% 50%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              >
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    backgroundImage: `url("https://framerusercontent.com/images/Qq5c89sJrXJ3dNdpquNZ7ptg0o.svg")`,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "left top",
                    border: "0px",
                    backgroundSize: "3px",
                  }}
                  className="absolute rounded-[inherit] inset-0"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-nowrap relative rounded-[14px] h-[min-content] w-[1px] p-[6px] flex-col gap-[16px]"
          style={{
            backgroundColor: "rgba(165, 180, 252, .1)",
            boxShadow:
              "inset 0 1px 0 0 rgba(165, 180, 252, .1),inset 0 0 4px 0 var(--token-4438996a-43bf-4eb8-864e-0204c9867d45, rgba(165, 180, 252, .3)),inset 0 -4px 8px 0 rgba(165, 180, 252, .1),0 2px 0 0 rgba(165, 180, 252, .1)",
            flex: "1 0 0px",
          }}
        >
          <div
            style={{ backgroundColor: "rgb(9, 9, 11)" }}
            className="h-[560px] w-full rounded-[8px] overflow-hidden"
          >
            <div
              className="border-b-[1px] h-[42px] bg-black/[0.5] w-full relative"
              style={{
                borderColor: "rgba(255, 255, 255, .05)",
              }}
            >
              <div className="flex gap-[8px] items-center absolute left-[16px] top-1/2 -translate-y-1/2 h-[min-content] w-[min-content] flex-nowrap">
                {[
                  ["#ff857a", "#ee6a5f"],
                  ["#ffde9c", "#f4be4f"],
                  ["#85ff75", "#62c555"],
                ].map((e, idx) => {
                  return (
                    <div
                      key={`${idx}`}
                      style={{ backgroundColor: e[0] }}
                      className="p-[1px] flex items-center justify-center flex-nowrap rounded-full"
                    >
                      <div
                        style={{ backgroundColor: e[1] }}
                        className="size-[9px]  rounded-full"
                      ></div>
                    </div>
                  );
                })}
              </div>
              <LuClipboardCopy className="absolute text-xl text-white/50 right-[16px] top-1/2 -translate-y-1/2" />
            </div>
            <div
              style={{ backgroundColor: "rgb(9, 9, 11)", flex: "1 0 0px" }}
              className="relative h-full  flex-nowrap w-full"
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCards;

//background: linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%);
