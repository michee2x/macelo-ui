import Hero from './hero'

const HomePage = () => {
  return (
    <div
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 83.2%, 0% 100%)",
      }}
      className="w-screen relative bg-black min-h-[120vh]"
    >
      <Hero />
    </div>
  );
}

export default HomePage