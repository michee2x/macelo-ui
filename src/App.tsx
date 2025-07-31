import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import PagesLayout from "./Layouts/PagesLayout";
import ComponentsPage from "./pages/components-page";
import TemplatesPage from "./pages/templates-page";
import DocsPage from "./pages/docs-page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/docs" element={<DocsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
