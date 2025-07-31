import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import PagesLayout from "./Layouts/PagesLayout";
import ComponentsPage from "./pages/components-page";
import TemplatesPage from "./pages/templates-page";
import DocsPage from "./pages/docs-page";
import ComponnentCategoryPage from "./pages/component-category-page";
import ComponentsLayout from "./Layouts/ComponentsLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/components" element={<ComponentsLayout />}>
              <Route
                index
                element={<ComponentsPage />}
              />
              <Route
                path="/components/:category"
                element={<ComponnentCategoryPage />}
              />
            </Route>
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
