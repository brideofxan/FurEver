import { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";

// Add more sections here ifyou need them
const SECTIONS = [
  { key: "Home", label: "Hemsidan" },
  { key: "Adoption", label: "Adoptionsprocess" },
  { key: "Detaljsida", label: "Djurens detaljsida" },
];

const emptyText = { heading: "", body: "" };

export default function AdminTextForm() {
  const [texts, setTexts] = useState(
    Object.fromEntries(SECTIONS.map((s) => [s.key, emptyText])),
  );
  const [savedTexts, setSavedTexts] = useState(texts);
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState(null);
  const [confirmationKey, setConfirmationKey] = useState(null);
  const [errorKey, setErrorKey] = useState(null);

  // Fetch all existing text once when the page loads
  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      try {
        const response = await fetch("/api/admin/animals/content");
        if (!response.ok) throw new Error("Kunde inte hämta texterna.");

        const rows = await response.json(); // [{key, heading, body}, ...]
        const byKey = Object.fromEntries(rows.map((r) => [r.key, r]));

        const merged = Object.fromEntries(
          SECTIONS.map((s) => [
            s.key,
            {
              heading: byKey[s.key]?.heading ?? "",
              body: byKey[s.key]?.body ?? "",
            },
          ]),
        );

        setTexts(merged);
        setSavedTexts(merged);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  function handleChange(key, field, value) {
    setTexts((current) => ({
      ...current,
      [key]: { ...current[key], [field]: value },
    }));
    setConfirmationKey(null);
  }

  async function handleSave(key) {
    setSavingKey(key);
    setErrorKey(null);
    setConfirmationKey(null);

    try {
      const response = await fetch(`/api/admin/animals/content/${key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(texts[key]),
      });

      if (!response.ok) throw new Error("Kunde inte spara.");

      setSavedTexts((current) => ({ ...current, [key]: texts[key] }));
      setConfirmationKey(key);
    } catch (err) {
      console.error(err);
      setErrorKey(key);
    } finally {
      setSavingKey(null);
    }
  }

  function handleCancel(key) {
    setTexts((current) => ({ ...current, [key]: savedTexts[key] }));
    setConfirmationKey(null);
    setErrorKey(null);
  }

  if (loading) {
    return (
      <AdminLayout>
        <p className="text-gray-600">Laddar...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="w-full max-w-2xl space-y-6">
        {SECTIONS.map(({ key, label }) => (
          <div
            key={key}
            className="space-y-4 rounded-lg bg-white p-6 shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-800">{label}</h2>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Rubrik
              </label>
              <input
                type="text"
                value={texts[key].heading}
                onChange={(e) => handleChange(key, "heading", e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800">
                Text
              </label>
              <textarea
                value={texts[key].body}
                onChange={(e) => handleChange(key, "body", e.target.value)}
                rows="4"
                className="mt-1 w-full resize-y rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {errorKey === key && (
              <p className="text-sm font-medium text-red-600">
                Kunde inte spara ändringarna...
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleSave(key)}
                disabled={savingKey === key}
                className="cursor-pointer rounded-md bg-gray-800 px-5 py-2 font-medium text-white transition-colors duration-200 hover:bg-gray-800/85 disabled:opacity-50"
              >
                {savingKey === key ? "Sparar..." : "Spara"}
              </button>
              <button
                type="button"
                onClick={() => handleCancel(key)}
                className="cursor-pointer rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Avbryt
              </button>
            </div>

            {confirmationKey === key && (
              <p className="text-sm font-medium text-green-700">
                Ändringarna har sparats.
              </p>
            )}
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
