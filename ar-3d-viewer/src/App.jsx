import { Routes, Route } from "react-router-dom";
import ModelGallery from "./pages/ModelGallery.jsx";
import ViewerPage from "./pages/ViewerPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ModelGallery />} />
      <Route path="/viewer/:file" element={<ViewerPage />} />
    </Routes>
  );
}
