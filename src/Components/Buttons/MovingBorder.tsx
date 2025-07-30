import React from 'react'
import {motion} from "motion/react"

const MovingBorder = ({
  children,
  clockwise,
}: {
  children: React.ReactNode;
  clockwise?: Boolean;
}) => {
  return (
    <div
      style={{
        opacity: 1,
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        transformStyle: "preserve-3d",
      }}
      className="flex w-full h-full relative items-center justify-center will-change-transform"
    >
      <div className="rounded-[10px] w-full h-full relative p-[1px] overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full z-10 flex items-center rounded-[10px] bg-[#111215]">
          {children}
        </div>
        <motion.div
          className="pointer-events-none will-change-transform h-[800%] w-[50%] absolute"
          style={{
            transformStyle: "preserve-3d",
            backgroundImage: "linear-gradient(90deg,#000,#019fa9 61%,#000)",
          }}
          animate={{
            rotateZ: clockwise ? 360 : -360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

//text-[#019fa9]
export default MovingBorder