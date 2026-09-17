import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Animals from "./pages/Animals.jsx";
import AdoptionProcess from "./pages/AdoptionProcess.jsx";
import AdminApplications from "./pages/AdminApplications.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/adoption" element={<AdoptionProcess />} />
        <Route path="/admin" element={<AdminApplications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;