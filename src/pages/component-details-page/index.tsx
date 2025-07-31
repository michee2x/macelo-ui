import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ComponentJson, type ComponentItem } from "../../Components/Componentsjson";
import RotatingCards from "../../Components/Cards/RotatingCard";

const ComponentsDetailPage = () => {
    const { component } = useParams<{ component?: string }>();

    const [result, setResult] = useState<{
      category: string;
      item: ComponentItem;
    } | null>(null);

    useEffect(() => {
      if (!component) return;

      for (const category in ComponentJson) {
        const found = ComponentJson[category].find(
          (item) => item.title.toLowerCase() === component.toLowerCase()
        );
        if (found) {
          setResult({ category, item: found });
          return;
        }
      }

      setResult(null);
    }, [component]); // ✅ only re-run when `component` changes

    useEffect(() => {
      console.log("this is the result: ", result); // ✅ logs updated result
    }, [result]);  
  return (
    <div className="w-full min-h-screen pt-6">
      {result === null ? (
        <div className="w-full h-full flex items-center justify-center">
          loading
        </div>
      ) : (
        <div className="w-full lg:p-6 h-full">
          <h1 className="lg:text-3xl px-4">{result.item.title}</h1>
          <h3 className="text-[12px] px-4 mt-7 text-gray-200">
            {result.item.bodyText}
          </h3>

          <div className="w-full relative lg:mt-6 h-auto">
            <RotatingCards>
              <div className="w-full flex justify-center h-full">
                <img
                  src="/home-images/WhatsApp_Image_2025-07-31_at_2.27.21_AM-removebg-preview.png"
                  alt=""
                  className="absolute w-full lg:w-1/2 h-full bottom-0 object-cover"
                />
              </div>
            </RotatingCards>
          </div>



          <section className="w-full min-h-screen">
            <h1 className="text-4xl px-4 mt-10">installation</h1>

            <div className="w-full mt-5 h-screen flex text-gray-400 justify-center items-center bg-zinc-950">
                Installation workflow goes here
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default ComponentsDetailPage