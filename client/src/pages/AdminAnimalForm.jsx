import { useState } from 'react';

export default function AdminAnimalForm() {
  const [statusMsg, setStatusMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Hane',
    description: '',
    activity_level: '',
    housing_type: '',
    good_with_kids: false,
    good_with_animals: false,
    special_needs: '',
    animal_type: 'Katt',
    status: 'Adopterbar',
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg('');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      // checkboxar skickas som 'on'/'' för att matcha backend-logiken
      if (typeof value === 'boolean') {
        data.append(key, value ? 'on' : '');
      } else {
        data.append(key, value);
      }
    });
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
        const response = await fetch('http://localhost:4000/api/admin/animals', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatusMsg('Djuret sparades!');
        setFormData({
          name: '',
          age: '',
          gender: 'Hane',
          description: '',
          activity_level: '',
          housing_type: '',
          good_with_kids: false,
          good_with_animals: false,
          special_needs: '',
          animal_type: 'Katt',
          status: 'Adopterbar',
        });
        setImageFile(null);
        e.target.reset();
      } else {
        setStatusMsg('Något gick fel vid sparande.');
      }
    } catch (err) {
      console.error(err);
      setStatusMsg('Kunde inte nå servern.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Lägg till nytt djur</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Namn</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Ålder</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Kön</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="Hane">Hane</option>
            <option value="Hona">Hona</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Beskrivning</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Aktivitetsnivå</label>
          <input
            type="text"
            name="activity_level"
            value={formData.activity_level}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Boendeform</label>
          <input
            type="text"
            name="housing_type"
            value={formData.housing_type}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="good_with_kids"
            checked={formData.good_with_kids}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label className="text-sm font-medium text-gray-700">Kan bo med barn</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="good_with_animals"
            checked={formData.good_with_animals}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label className="text-sm font-medium text-gray-700">Kan bo med andra djur</label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Särskilda behov/hälsa</label>
          <textarea
            name="special_needs"
            value={formData.special_needs}
            onChange={handleChange}
            rows={2}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Typ av djur</label>
          <select
            name="animal_type"
            value={formData.animal_type}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="Katt">Katt</option>
            <option value="Hund">Hund</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="Adopterbar">Adopterbar</option>
            <option value="Tingad">Tingad</option>
            <option value="Adopterad">Adopterad</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bild</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 w-full text-sm text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
        >
          Spara
        </button>

        {statusMsg && (
          <p className="text-center text-sm mt-2 text-gray-700">{statusMsg}</p>
        )}
      </form>
    </div>
  );
}