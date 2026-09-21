import { useState } from "react";
import { Link } from "react-router";

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
    <div className="min-h-screen flex flex-col">
      <header className="bg-amber-500 text-black px-6 py-4">
        <h1 className="text-5xl font-semibold">Admin</h1>
      </header>

      <div className="flex flex-1">
        <aside className="w-56 bg-amber-200 border-r-2 border-amber-200 p-4">
          <nav className="space-y-2">
            <Link to="/admin/animals" className="block text-black hover:text-amber-600">
              Lägg till djur
            </Link>
            <Link to="/animals" className="block text-black hover:text-amber-600">
              Se alla djur
            </Link>
          </nav>
        </aside>

        <div className="flex-1 bg-gray-50 items-center px-90 py-10">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full ml-12 p-6 bg-white rounded-lg shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-800">Lägg till djur</h2>

            <div>
              <label className="block text-sm font-medium text-black">Namn</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Ålder</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Kön</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Välj...</option>
                <option value="hane">Hane</option>
                <option value="hona">Hona</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Typ av djur</label>
              <input
                type="text"
                name="animal_type"
                value={formData.animal_type}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Aktivitetsnivå</label>
              <input
                type="text"
                name="activity_level"
                value={formData.activity_level}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Boendeform</label>
              <input
                type="text"
                name="housing"
                value={formData.housing}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="good_with_children"
                checked={formData.good_with_children === "true"}
                onChange={(e) =>
                  setFormData({ ...formData, good_with_children: e.target.checked ? "true" : "false" })
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
                  setFormData({ ...formData, good_with_animals: e.target.checked ? "true" : "false" })
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <label className="text-sm text-black">Kan bo med andra djur</label>
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Särskilda behov/hälsa</label>
              <input
                type="text"
                name="special_needs"
                value={formData.special_needs}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Status</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black">Beskrivning</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
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
              className="w-full bg-amber-500 text-black py-2 rounded-md hover:bg-amber-600 transition cursor-pointer"
            >
              Spara djur
            </button>

            {message && <p className="text-sm text-black mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminForm;