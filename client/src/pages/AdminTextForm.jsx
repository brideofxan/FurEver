import { useState } from "react";
import AdminLayout from "../components/AdminLayout";

const initialText = {
  heading: "",
  body: "",
};

export default function AdminTextForm() {
  const [text, setText] = useState(initialText);
  const [savedText, setSavedText] = useState(initialText);
  const [confirmation, setConfirmation] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setText((currentText) => ({ ...currentText, [name]: value }));
    setConfirmation("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSavedText(text);
    setConfirmation("Ändringarna har sparats.");
  }

  function handleCancel() {
    setText(savedText);
    setConfirmation("");
  }

  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md"
      >
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Redigera text
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Uppdatera rubriken och texten som visas på sidan.
          </p>
        </div>

        <div>
          <label
            htmlFor="heading"
            className="block text-sm font-medium text-gray-800"
          >
            Rubrik
          </label>
          <input
            id="heading"
            name="heading"
            type="text"
            value={text.heading}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-800"
          >
            Text
          </label>
          <textarea
            id="body"
            name="body"
            value={text.body}
            onChange={handleChange}
            required
            rows="6"
            className="mt-1 w-full resize-y rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-md bg-amber-500 px-5 py-2 font-medium text-black transition hover:bg-amber-600"
          >
            Spara
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Avbryt
          </button>
        </div>

        {confirmation && (
          <p role="status" className="text-sm font-medium text-green-700">
            {confirmation}
          </p>
        )}
      </form>
    </AdminLayout>
  );
}
