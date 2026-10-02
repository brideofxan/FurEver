import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserPage({ setUser }) {
  const [error, setError] = useState("");
  const [successfulLogout, setSuccessfulLogout] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const res = await fetch("/api/auth/user");
      const data = await res.json();
      if (!data.user) {
        navigate("/login");
      } else {
        setLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  const handleLogout = async () => {
    setError("");

    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      setSuccessfulLogout(data.message);
      setUser(null);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Något gick fel, vänligen försök igen senare.");
    }
  };

  if (!loggedIn) {
    return null;
  }

  return (
    <div>
      <img
        src="/wip-kitty.png"
        alt="En bild på en arbetande katt och en skylt som säger att sidan inte är klar ännu."
        className="mx-auto"
      />

      {error && <p className="mx-10 text-lg font-bold text-red-700">{error}</p>}
      {successfulLogout && (
        <p className="mx-10 text-lg font-bold text-green-700">
          {successfulLogout}
        </p>
      )}

      <button
        type="button"
        onClick={handleLogout}
        className="m-10 cursor-pointer rounded-md border border-taupe-400 bg-sky-200/70 px-10 py-3 text-lg font-bold shadow-xs transition duration-100 ease-in-out outline-none hover:bg-sky-300/50 focus-visible:bg-sky-300/50 focus-visible:ring-2 focus-visible:ring-taupe-500/50 active:bg-sky-300/70"
      >
        Logga ut
      </button>
    </div>
  );
}
