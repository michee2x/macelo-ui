import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {motion} from "motion/react";
import { useRef } from "react";
import SciFiTextDemo from "../../Components/ScifiTextWriter";
const Hero = () => {
    const texts = useRef<(HTMLSpanElement | null)[]>([])

  useGSAP(() => {
    if(!texts.current) return;

    const tl = gsap.timeline({
      repeat:-1,
    })

    texts.current.forEach((text, idx) => {
      if (!text) return;

      //texts-container
      tl.to("#texts-container", {
        yPercent: (-100 * idx) / texts.current.length,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.7 * idx,
      });
    })

    tl.set("#texts-container", {
      yPercent: 0,
      delay: 0.7, // Optional pause before restarting
    });
  })
  
  return (
    <div className="w-screen overflow-x-hidden flex-col relative min-h-screen flex items-cente justify-center">
      <motion.img
        src="https://i.imgur.com/GEEU91r.png"
        alt=""
        className="absolute lg:w-[1200px] -translate-x-1/2 left-1/2 -translate-y-1/2 lg:top-[65%] top-[40%] inset-0 object-cover"
      />
      <h1 className="font-batmanmini text-[18px] bottom-[15%] lg:bottom-[10%] -translate-x-1/2 lg:translate-x-0 lg:left-0 left-1/2 w-full p-6 text-center h-auto  absolute font-extralight text-white/80">
        Do More Than <br />
        <span className="w-full flex h-[4.5rem] lg:h-[8rem] overflow-hidden flex-start">
          <span
            id="texts-container"
            className="flex w-full justify-center flex-col text-7xl lg:text-9xl h-[max-content]"
          >
            {["Magic", "Brand", "Tech", "Edge", "Magic"].map((e, idx) => {
              return (
                <span
                  className="w-full flex bg-gradient-to-t to-[#019fa9] from-[#f8dc2a] text-transparent bg-clip-text justify-center items-center"
                  key={e}
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

      <h1 className="absolute z-20 bottom-11 hidden">
        <SciFiTextDemo />
      </h1>
    </div>
  );
}

export default Hero