import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Animals from "./pages/Animals.jsx";
import AdoptionProcess from "./pages/AdoptionProcess.jsx";
import AdminApplications from "./pages/AdminApplications.jsx";
import AdminForm from "./pages/AdminForm.jsx";
import AnimalDetail from "./pages/AnimalDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/:id" element={<AnimalDetail />} />
        <Route path="/adoption" element={<AdoptionProcess />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/admin/animals" element={<AdminForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;