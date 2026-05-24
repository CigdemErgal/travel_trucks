import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CamperDetailsPage />} />
    </Routes>
  );
}

export default App;
