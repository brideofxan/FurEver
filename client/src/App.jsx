import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Animals from "./pages/Animals.jsx";
import AnimalDetail from "./pages/AnimalDetail.jsx";
import ApplicationForm from "./pages/ApplicationForm.jsx";
import AdoptionProcess from "./pages/AdoptionProcess.jsx";
import AdminForm from "./pages/AdminForm.jsx";
import AdminApplications from "./pages/AdminApplications.jsx";
import Login from "./pages/Login.jsx";
import RegisterUser from "./pages/RegisterUser.jsx";
import UserPage from "./pages/UserPage.jsx";

function App() {
  const [user, setUser] = useState(null);

  // Kolla om användaren är inloggad (via session) vid sidladdning
  useEffect(() => {
    fetch("/api/auth/user")
      .then((res) => res.json())
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => setUser(null));
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
          <Route path="/admin/animals" element={<AdminForm />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route
            path="/user"
            element={<UserPage user={user} setUser={setUser} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;