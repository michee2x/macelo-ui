import React from 'react'
import { ComponentJson } from '../Components/Componentsjson';
import { Link, Outlet } from 'react-router-dom';
import { RxComponent1 } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";

const ComponentsLayout = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  return (
    <div className="w-screen relative min-h-screen lg:pt-0 text-white">
      <main className="w-full flex gap-6 h-auto lg:p-4">
        {/* Sidebar */}
        <aside
          style={
            {
              "--radix-scroll-area-corner-width": "0px",
              "--radix-scroll-area-corner-height": "0px",
            } as React.CSSProperties
          }
          className={`lg:w-[250px] bg-black z-[90000] w-full  sticky top-16 shrink-0 h-auto lg:h-[calc(100vh-3.5rem)] overflow-y-auto p-4 border-r border-slate-800 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent hover:scrollbar-thumb-zinc-500 transition-colors duration-300 ${
            showSidebar ? "block" : "hidden lg:block"
          }`}
        >
          <div className='flex justify-between mt-10 mb-4 items-center px-2'>
            <h2 className="text-xl font-semibold">Categories</h2>
            <LiaTimesSolid className='text-2xl' onClick={() => setShowSidebar(false)} />
          </div>
          <ul className="space-y-2">
            {Object.keys(ComponentJson).map((category, index) => (
              <li key={index}>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                    showSidebar && setShowSidebar(false);
                  }}
                  to={`/components/${category}`}
                  className="block px-3 font-extralight py-2 rounded hover:bg-zinc-800 hover:text-white text-zinc-400 text-[12px] capitalize transition-colors duration-200"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div
          className={`lg:w-[80%] ${
            !showSidebar ? "block" : "hidden lg:block"
          } w-full flex-col relative flex justify-center`}
        >
          <div
            onClick={() => setShowSidebar((prev) => !prev)}
            className="text-3xl flex h-[9rem] bg-black py-6 z-[10000] sticky top-0 w-full items-end justify-between px-4 lg:hidden text-white"
          >
            <RxComponent1 />

            <span className="text-[12px] text-gray-500">
              Components Category
            </span>
          </div>
          <div className="w-full h-auto lg:mt-10">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ComponentsLayout