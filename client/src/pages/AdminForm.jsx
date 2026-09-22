import { useState } from "react";
import AdminLayout from "../components/AdminLayout";

function AdminForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    animal_type: "",
    activity_level: "",
    housing: "",
    good_with_children: "",
    good_with_animals: "",
    special_needs: "",
    status: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) {
      data.append("image", image);
    }

    try {
      const res = await fetch("/api/admin/animals", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      setMessage(result.message || result.error);
    } catch (err) {
      console.error(err);
      setMessage("Något gick fel vid anropet.");
    }
  };

  return (
    <AdminLayout>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="text-xl font-semibold text-gray-800">Lägg till djur</h2>

        <div>
          <label className="block text-sm font-medium text-black">Namn</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Ålder</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Kön</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="">Välj...</option>
            <option value="hane">Hane</option>
            <option value="hona">Hona</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Typ av djur
          </label>
          <input
            type="text"
            name="animal_type"
            value={formData.animal_type}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Aktivitetsnivå
          </label>
          <input
            type="text"
            name="activity_level"
            value={formData.activity_level}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Boendeform
          </label>
          <input
            type="text"
            name="housing"
            value={formData.housing}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="good_with_children"
            checked={formData.good_with_children === "true"}
            onChange={(e) =>
              setFormData({
                ...formData,
                good_with_children: e.target.checked ? "true" : "false",
              })
            }
            className="h-4 w-4 rounded border-gray-300"
          />
          <label className="text-sm text-black">Kan bo med barn</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="good_with_animals"
            checked={formData.good_with_animals === "true"}
            onChange={(e) =>
              setFormData({
                ...formData,
                good_with_animals: e.target.checked ? "true" : "false",
              })
            }
            className="h-4 w-4 rounded border-gray-300"
          />
          <label className="text-sm text-black">Kan bo med andra djur</label>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Särskilda behov/hälsa
          </label>
          <input
            type="text"
            name="special_needs"
            value={formData.special_needs}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Status</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            Beskrivning
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">Bild</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 w-full text-sm text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-amber-500 py-2 text-black transition hover:bg-amber-600"
        >
          Spara djur
        </button>

        {message && <p className="mt-2 text-sm text-black">{message}</p>}
      </form>
    </AdminLayout>
  );
}

export default AdminForm;
