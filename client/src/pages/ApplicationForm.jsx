import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import Navbar from "../components/Navbar.jsx";

const translations = {
  animal_type: {
    cat: "Katt",
    dog: "Hund",
    rabbit: "Kanin",
    bird: "Fågel",
  },
};

function translate(category, value) {
  if (!value) return value;
  const key = String(value).toLowerCase();
  return translations[category]?.[key] || value;
}

export default function ApplicationForm() {
  const { id } = useParams();

  const [animal, setAnimal] = useState(null);
  const [formData, setFormData] = useState({
    applicant_name: "",
    applicant_email: "",
    housing_type: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitted, setSubmitted] = useState(false); // ← NY

  useEffect(() => {
    fetch(`/api/animals/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Djuret hittades inte");
        return res.json();
      })
      .then(setAnimal)
      .catch(() => setAnimal(null));
  }, [id]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.applicant_name.trim()) {
      newErrors.applicant_name = "Namn krävs";
    }
    if (!formData.applicant_email.trim()) {
      newErrors.applicant_email = "E-post krävs";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.applicant_email)) {
      newErrors.applicant_email = "Ange en giltig e-postadress";
    }
    if (!formData.housing_type) {
      newErrors.housing_type = "Boendesituation krävs";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          animal_id: Number(id),
          ...formData,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Kunde inte skicka ansökan");
      }

      setSubmitted(true); // ← Visa bekräftelse
    } catch (err) {
      setSubmitError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-8">
        <Link
          to={`/animals/${id}`}
          className="mb-4 inline-block rounded text-amber-600 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          ← Tillbaka till djuret
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Ansök om adoption
        </h1>

        {animal && !submitted && (
          <p className="mb-8 text-lg text-gray-700">
            Skicka in din intresseanmälan för <strong>{animal.name}</strong> (
            {translate("animal_type", animal.animal_type)})
          </p>
        )}

        {/* BEKRÄFTELSE — visas efter inskickning */}
        {submitted && (
          <div
            role="status"
            aria-live="polite"
            className="rounded-sm border-2 border-amber-500 bg-gray-50 p-6 text-center shadow-md"
          >
            <div
              className="mb-3 text-5xl text-amber-500"
              aria-hidden="true"
            >
              ✓
            </div>
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
              Tack för din ansökan!
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Vi har tagit emot din intresseanmälan
              {animal ? ` för ${animal.name}` : ""} och återkommer så snart vi
              kan.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to={`/animals/${id}`}
                className="rounded-sm border-2 border-amber-500 bg-amber-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-offset-2"
              >
                Tillbaka till djuret
              </Link>
              <Link
                to="/animals"
                className="rounded-sm border-2 border-amber-500 bg-white px-6 py-3 font-bold text-amber-600 shadow-md transition hover:bg-amber-50 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-offset-2"
              >
                Se alla djur
              </Link>
            </div>
          </div>
        )}

        {/* FORMULÄRET — visas bara innan inskickning */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-labelledby="form-heading"
            className="rounded-sm border-2 border-gray-200 bg-gray-50 p-6 shadow-md"
          >
            <h2 id="form-heading" className="sr-only">
              Intresseanmälan
            </h2>

            {/* Namn */}
            <div className="mb-5">
              <label
                htmlFor="applicant_name"
                className="mb-1 block font-semibold text-gray-800"
              >
                Namn{" "}
                <span className="text-red-600" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="applicant_name"
                name="applicant_name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!errors.applicant_name}
                aria-describedby={
                  errors.applicant_name ? "name-error" : undefined
                }
                value={formData.applicant_name}
                onChange={handleChange}
                className="w-full rounded-sm border-2 border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {errors.applicant_name && (
                <p
                  id="name-error"
                  role="alert"
                  className="mt-1 text-sm text-red-600"
                >
                  {errors.applicant_name}
                </p>
              )}
            </div>

            {/* E-post */}
            <div className="mb-5">
              <label
                htmlFor="applicant_email"
                className="mb-1 block font-semibold text-gray-800"
              >
                E-post{" "}
                <span className="text-red-600" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="applicant_email"
                name="applicant_email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!errors.applicant_email}
                aria-describedby={
                  errors.applicant_email ? "email-error" : undefined
                }
                value={formData.applicant_email}
                onChange={handleChange}
                className="w-full rounded-sm border-2 border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {errors.applicant_email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-1 text-sm text-red-600"
                >
                  {errors.applicant_email}
                </p>
              )}
            </div>

            {/* Boendesituation */}
            <div className="mb-6">
              <label
                htmlFor="housing_type"
                className="mb-1 block font-semibold text-gray-800"
              >
                Boendesituation{" "}
                <span className="text-red-600" aria-hidden="true">
                  *
                </span>
              </label>
              <select
                id="housing_type"
                name="housing_type"
                required
                aria-required="true"
                aria-invalid={!!errors.housing_type}
                aria-describedby={
                  errors.housing_type ? "housing-error" : undefined
                }
                value={formData.housing_type}
                onChange={handleChange}
                className="w-full rounded-sm border-2 border-gray-300 bg-white px-3 py-2 text-gray-800 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Välj boendesituation...</option>
                <option value="Lägenhet">Lägenhet</option>
                <option value="Hus">Hus</option>
                <option value="Radhus">Radhus</option>
                <option value="Övrigt">Övrigt</option>
              </select>
              {errors.housing_type && (
                <p
                  id="housing-error"
                  role="alert"
                  className="mt-1 text-sm text-red-600"
                >
                  {errors.housing_type}
                </p>
              )}
            </div>

            {submitError && (
              <p role="alert" className="mb-4 text-sm text-red-600">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-sm border-2 border-amber-500 bg-amber-500 px-8 py-3 text-lg font-bold text-white shadow-md transition hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-offset-2 disabled:opacity-50"
            >
              {submitting ? "Skickar..." : "Skicka ansökan"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}