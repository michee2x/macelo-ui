import SearchInput from "../../Components/inputs/SearchInput";
import {ComponentJson} from "../../Components/Componentsjson";

/**
 * 
 * @returns 
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 83.2%, 0% 100%)",
        }}
 */

const ComponentsPage = () => {
  return (
    <div className="w-full mt-10 flex-col gap-6 flex justify-center">
      <h1 className="text-center lg:hidden">All Components category</h1>

      <div className="w-[90%] max-w-3xl mx-auto mt-8 mb-4">
        <SearchInput />
      </div>

      <div className="flex w-full h-auto justify-center">
        <div className="grid lg:grid-cols-2 gap-20">
          {Object.keys(ComponentJson).map((category, index) => {
            const firstComponent = ComponentJson[category][0];

            return (
              <div
                key={`${category}-${index}`}
                className="max-w-sm p-4 bg-zinc-950 border rounded-lg shadow-sm border-slate-800"
              >
                <div className="w-full aspect-square rounded-xl bg-slate-700"></div>
                <div>
                  <h5 className="mb-2 mt-6 text-[16px] lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {firstComponent?.title ?? category}
                  </h5>
                  <p className="font-normal text-[12px] text-gray-700 dark:text-gray-400">
                    {firstComponent?.bodyText ?? "No description available."}
                  </p>
                </div>

                <span className="text-xs flex mt-10">
                  more in this catergory
                </span>
                <span className="text-xs flex mt-2">type: {category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;


