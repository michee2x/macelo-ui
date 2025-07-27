
const Hero = () => {
  return (
    <div
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      className="w-full overflow-hidden relative h-screen flex items-center justify-center"
    >
      <img
        src="https://framerusercontent.com/images/1xOqMa4sAAwBCrdkiSJfIXups.png?scale-down-to=2048"
        alt=""
        className="absolute z-10 w-full h-full object-cover bg-repeat"
      />
      <div
        className="absolute hidden -inset-y-[100%] flex w-[100vw] flex-col md:-right-6 md:w-[1200px] blur"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          opacity: 1,
          transform: "none",
        }}
      >
        <div
          className="grow bg-green-700"
          style={{
            background:
              "conic-gradient(from 180deg at 99.78% 35% in lab, rgb(255, 255, 255) 18deg, #03A9F4 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)",
          }}
        ></div>
        <div
          className="grow"
          style={{
            background:
              "conic-gradient(from 0deg at 99.78% 65% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, #03A9F4 324deg, rgb(255, 255, 255) 342deg)",
          }}
        ></div>
      </div>
      <img
        src="/home-images/7653e72d8193ce82bc196fa636e5bb4d23a48f98_low.webp"
        alt=""
        className="w-full h-full absolute object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      <div className="relative w-full bg-gradient-to-t from-black via-black[0.9] to-transparent h-full flex flex-col justify-end pb-20 z-20">
        <h1
          className="text-4xl bg-gradient-to-r from-blue-200/[0.09] to-blue-200 bg-clip-text lg:text-9xl p-4 w-screen h-auto"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(30deg)" }}
        >
          <h1 className="w-full text-transparent bg-clip-text h-auto">
            Create
          </h1>
          <h1 className="w-full text-transparent bg-clip-text h-auto pl-5 lg:pl-20">
            Advance
          </h1>
          <h1 className="w-full text-transparent bg-clip-text h-auto pl-10 lg:pl-40">
            Reimagine
          </h1>
        </h1>
      </div>
    </div>
  );
}

export default Hero