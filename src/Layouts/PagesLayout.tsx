import Nav from "../Components/Navbar";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const PagesLayout = () => {
  return (
    <div className="relative max-w-[100vw] flex justify-center w-screen min-h-[120vh] text-white bg-white font-batman font-bold">
      <Nav />
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 83.2%, 0% 100%)",
        }}
        className="w-full relative h-full bg-black"
      >
        <Outlet />
      </div>
      <div className="w-auto h-auto text-2xl gap-3 p-4 flex flex-col items-end z-10 text-black absolute bottom-0 right-0">
        <div className="w-full h-auto justify-end min-w-fit flex items-center gap-4">
          <FaDiscord />
          <FaGithub />
          <FaTwitter />
        </div>
        <p className="text-[16px]">
          built by{" "}
          <a className="underline" href="https://github.com/michee2x">
            michee2x
          </a>
        </p>
      </div>
    </div>
  );
};

export default PagesLayout;
