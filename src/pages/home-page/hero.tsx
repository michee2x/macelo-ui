import {motion} from "motion/react";
const Hero = () => {
  return (
    <div className="w-screen overflow-x-hidden flex-col relative min-h-screen flex items-center justify-center">
      <motion.img
        src="https://i.imgur.com/GEEU91r.png"
        alt=""
        className="absolute lg:w-[1500px] -translate-x-1/2 left-1/2 -translate-y-1/2 lg:top-1/2 top-[40%] inset-0 object-cover"
      />
      <h1 className="font-batmanmini text-[18px] bottom-[15%] lg:bottom-[5%] -translate-x-1/2 left-1/2 w-full p-6 text-center h-auto  absolute font-extralight text-white/80">
        Do More Than <br />
        <span
          className="flex w-full h-fit justify-center bg-gradient-to-t to-[#019fa9] from-[#f6ec59] text-center bg-clip-text text-transparent  text-7xl lg:text-9xl"
        >
          Magic
        </span>
      </h1>
    </div>
  );
}

export default Hero