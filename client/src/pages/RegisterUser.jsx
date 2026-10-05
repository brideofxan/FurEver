import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Link, useNavigate } from "react-router";

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="cursor-pointer rounded-md border border-taupe-400 bg-sky-200/70 p-3 font-bold shadow-xs transition duration-100 ease-in-out outline-none hover:bg-sky-300/50 focus-visible:bg-sky-300/50 focus-visible:ring-2 focus-visible:ring-taupe-500/50 active:bg-sky-300/70 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2"
    >
      {pending ? "Registrar..." : "Registrera"}
    </button>
  );
}

export default function RegisterUser() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [pwdRequirements, setPwdRequirements] = useState([]);
  const [successfulRegistration, setSuccessfulRegistration] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleRegister = async () => {
    setError("");
    setPwdRequirements([]);
    setSuccessfulRegistration("");

    if (!form.username || !form.password || !form.confirmPassword) {
      setError("Vänligen fyll i alla fält");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Lösenorden måste matcha, vänligen försök igen");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setPwdRequirements(data.passwordRequirements || []);
        return;
      }

      setSuccessfulRegistration(data.message);
      setForm({ username: "", password: "", confirmPassword: "" });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Något fick fel, vänligen försök igen senare.");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        action={handleRegister}
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

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-lg">
            Bekräfta lösenord <sup className="font-bold">*</sup>
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="rounded-md border border-taupe-300 bg-white p-3 shadow-xs outline-none focus:ring-2 focus:ring-taupe-300/50 sm:max-w-sm sm:p-2"
            required
          />
        </div>

        {error && <p className="font-bold text-red-700">{error}</p>}

        {pwdRequirements.length > 0 && (
          <ul className="list-disc pl-5 text-red-700 italic">
            {pwdRequirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        )}

        {successfulRegistration && (
          <p className="font-bold text-green-700">{successfulRegistration}</p>
        )}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:pt-8">
          <RegisterButton />
          <h4 className="text-lg sm:text-base">
            Har du redan ett konto?{" "}
            <Link
              to="/login"
              className="underline outline-none focus:ring-3 focus:ring-taupe-300 focus:ring-offset-2"
            >
              Logga in här
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
}
