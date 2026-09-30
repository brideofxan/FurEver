import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Animals from "./pages/Animals.jsx";
import AnimalDetail from "./pages/AnimalDetail.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";
import AdoptionProcess from "./pages/AdoptionProcess.jsx";
import AdminApplications from "./pages/AdminApplications.jsx";
import AdminForm from "./pages/AdminForm.jsx";
import AdminTextForm from "./pages/AdminTextForm.jsx";
import Login from "./pages/Login.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import UserPage from "./pages/UserPage.jsx";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/auth/user");
      const data = await res.json();
      setUser(data.user);
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:id" element={<AnimalDetail />} />
          <Route path="/animals/:id/apply" element={<ApplicationForm />} />
          <Route path="/adoption" element={<AdoptionProcess />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/user" element={<UserPage setUser={setUser} />} />
        </Route>

        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/admin/animals" element={<AdminForm />} />
        <Route path="/admin/texts" element={<AdminTextForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;