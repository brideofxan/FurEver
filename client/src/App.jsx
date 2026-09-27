import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Animals from "./pages/Animals.jsx";
import AnimalDetail from "./pages/AnimalDetail.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";
import AdoptionProcess from "./pages/AdoptionProcess.jsx";
import AdminForm from "./pages/AdminForm.jsx";
import AdminApplications from "./pages/AdminApplications.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/:id" element={<AnimalDetail />} />
        <Route path="/animals/:id/apply" element={<ApplicationForm />} />
        <Route path="/adoption" element={<AdoptionProcess />} />
        <Route path="/admin/animals" element={<AdminForm />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;