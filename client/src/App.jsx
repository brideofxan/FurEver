import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Animals from "./pages/Animals.jsx";
import AdoptionProcess from "./pages/AdoptionProcess.jsx";
import AdminForm from "./pages/AdminForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/adoption" element={<AdoptionProcess />} />
        <Route path="/admin/animals" element={<AdminForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;