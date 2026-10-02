import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function LoginUser({ setUser }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleLogin = async () => {
    setError("");

    if (!form.username || !form.password) {
      setError("Vänligen fyll i alla fält");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      setUser(data.user);
      setForm({ username: "", password: "" });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Något fick fel, vänligen försök igen senare.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        action={handleLogin}
        className="bg-fuchsia-white m-4 flex w-full max-w-md flex-col gap-8 rounded-lg border-2 border-gray-200 p-5 shadow-md sm:w-[70%] sm:max-w-2xl"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">
            Användarnamn <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
            className="rounded-md border border-taupe-300 bg-white p-3 shadow-xs outline-none focus:ring-2 focus:ring-taupe-300/50 sm:max-w-sm sm:p-2"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">
            Lösenord <sup className="font-bold">*</sup>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="rounded-md border border-taupe-300 bg-white p-3 shadow-xs outline-none focus:ring-2 focus:ring-taupe-300/50 sm:max-w-sm sm:p-2"
            required
          />
        </div>

        {error && <p className="font-bold text-red-700">{error}</p>}

        <div className="flex flex-wrap items-center justify-between gap-3 sm:pt-8">
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer rounded-md border border-taupe-400 bg-sky-200/70 p-3 font-bold shadow-xs transition duration-100 ease-in-out outline-none hover:bg-sky-300/50 focus-visible:bg-sky-300/50 focus-visible:ring-2 focus-visible:ring-taupe-500/50 active:bg-sky-300/70 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2"
          >
            {loading ? "Loggar in..." : "Logga in"}
          </button>
          <h4 className="w-full text-lg sm:w-auto sm:text-base">
            Saknar du konto?{" "}
            <Link
              to="/register"
              className="underline outline-none focus:ring-3 focus:ring-taupe-300 focus:ring-offset-2"
            >
              Registrera dig här
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
}
