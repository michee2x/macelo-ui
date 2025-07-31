import React from 'react'
import { ComponentJson } from '../Components/Componentsjson';
import { Link, Outlet } from 'react-router-dom';

const ComponentsLayout = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);
  return (
    <div className="w-screen relative min-h-screen lg:pt-0 pt-32 text-white">
      <main className="w-full flex gap-6 h-auto p-4">
        {/* Sidebar */}
        <aside
          style={
            {
              "--radix-scroll-area-corner-width": "0px",
              "--radix-scroll-area-corner-height": "0px",
            } as React.CSSProperties
          }
          className={`lg:w-[250px] w-full  sticky top-16 shrink-0 h-[calc(100vh-3.5rem)] overflow-y-auto p-4 border-r border-slate-800 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent hover:scrollbar-thumb-zinc-500 transition-colors duration-300 ${
            showSidebar ? "block" : "hidden lg:block"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {Object.keys(ComponentJson).map((category, index) => (
              <li key={index}>
                <Link
                  onClick={() => {window.scrollTo(0, 0); showSidebar && setShowSidebar(false)}}
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
          } w-full mt-5 lg:mt-10 flex-col gap-6 flex justify-center`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default ComponentsLayout