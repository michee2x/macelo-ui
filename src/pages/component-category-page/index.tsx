import { Link, useParams } from "react-router-dom";
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
        <div className="text-white px-4 pt-4 w-full h-full">
          <h1 className="mb-6">
            Showing "{categoryData.length}" components for{" "}
            <span className="text-blue-600">
              &lt;<span className="text-white px-2">{category}</span> /&gt;
            </span>
          </h1>{" "}
          <div className="flex w-full h-auto justify-center">
            <div className="grid lg:grid-cols-2 gap-20">
              {categoryData.map((componentCategory, index) => {
                return (
                  <Link
                    to={`/components/${category}/${componentCategory?.title}`}
                    key={`${category}-${index}`}
                    className="max-w-sm p-4 bg-zinc-950 border rounded-lg shadow-sm border-slate-800"
                  >
                    <div className="w-full aspect-square rounded-xl bg-slate-700"></div>
                    <div>
                      <h5 className="mb-2 mt-6 text-[16px] lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {componentCategory?.title ?? componentCategory}
                      </h5>
                      <p className="font-normal text-[12px] text-gray-700 dark:text-gray-400">
                        {componentCategory?.bodyText ?? "No description available."}
                      </p>
                    </div>
                  </Link>
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
