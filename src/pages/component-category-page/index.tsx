import { useParams } from "react-router-dom";
import { ComponentJson, type ComponentItem } from "../../Components/Componentsjson";
import { useEffect, useState } from "react";

const ComponnentCategoryPage = () => {
  const { category } = useParams<{ category?: string }>(); // make `category` optional
  const [categoryData, setCategoryData] = useState<ComponentItem[]>([]);

  useEffect(() => {
    if (category) {
      console.log(`Category selected: ${category}`);
      const components = ComponentJson[category];
      console.log(components);
      setCategoryData(components || []);
      console.log("componenst category data", components);
    }
  }, [category]);

  return (
    <div className="w-full min-h-screen lg:p-16">
      {category ? (
        <div className="text-white w-full h-full">
          <h1 className="mb-6">
            Showing "{categoryData.length}" components for{" "}
            <span className="text-blue-600">
              &lt;<span className="text-white px-2">{category}</span> /&gt;
            </span>
          </h1>{" "}
          <div className="flex w-full h-auto justify-center">
            <div className="grid lg:grid-cols-2 gap-20">
              {categoryData.map((category, index) => {
                return (
                  <div
                    key={`${category}-${index}`}
                    className="max-w-sm p-4 bg-zinc-950 border rounded-lg shadow-sm border-slate-800"
                  >
                    <div className="w-full aspect-square rounded-xl bg-slate-700"></div>
                    <div>
                      <h5 className="mb-2 mt-6 text-[16px] lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {category?.title ?? category}
                      </h5>
                      <p className="font-normal text-[12px] text-gray-700 dark:text-gray-400">
                        {category?.bodyText ?? "No description available."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-white">No category selected.</h1>
      )}
    </div>
  );
};

export default ComponnentCategoryPage;
