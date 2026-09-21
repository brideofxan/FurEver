import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/applications");
      if (!response.ok) {
        throw new Error("Kunde inte hämta ansökningar");
      }
      const data = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`/api/applications/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Kunde inte uppdatera statusen");
      }

      setApplications((prevApps) =>
        prevApps.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app,
        ),
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const getStatusColor = (status) => {
    const baseClasses = "shadow-sm border transition-all duration-200 hover:shadow-md hover:brightness-95";

    switch (status) {
      case "Mottagen":
        return `${baseClasses} bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-300 focus:ring-blue-500 focus:border-blue-500`;
      case "Under granskning":
        return `${baseClasses} bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 border-amber-300 focus:ring-amber-500 focus:border-amber-500`;
      case "Godkänd":
        return `${baseClasses} bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-green-300 focus:ring-green-500 focus:border-green-500`;
      case "Avslag":
        return `${baseClasses} bg-gradient-to-r from-red-50 to-red-100 text-red-800 border-red-300 focus:ring-red-500 focus:border-red-500`;
      default:
        return `${baseClasses} bg-gray-50 text-gray-900 border-gray-300`;
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchApplications();
    };
    loadData();
  }, []);

  return (
    <AdminLayout>
      <div className="w-full max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Adoptionsansökningar 
        </h1>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-4 text-red-700">{error}</div>
        )}

        <div className="overflow-hidden rounded-lg bg-white shadow-md border border-gray-200">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">
                <th className="px-5 py-3">Sökande</th>
                <th className="px-5 py-3">E-post</th>
                <th className="px-5 py-3">Djur</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr 
                  key={app.id} 
                  className={`border-b border-gray-200 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <td className="px-5 py-5 font-medium text-gray-900">
                    {app.applicant_name}
                  </td>
                  <td className="px-5 py-5 text-gray-600">
                    {app.applicant_email}
                  </td>
                  <td className="px-5 py-5 text-gray-600">
                    {app.animal_name || `ID: ${app.animal_id}`}
                  </td>
                  <td className="px-5 py-5">
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app.id, e.target.value)}
                      className={`block rounded-lg border p-2 text-sm font-semibold cursor-pointer ${getStatusColor(app.status)}`}
                    >
                      <option value="Mottagen" className="bg-white text-gray-950">Mottagen</option>
                      <option value="Under granskning" className="bg-white text-gray-950">Under granskning</option>
                      <option value="Godkänd" className="bg-white text-gray-950">Godkänd</option>
                      <option value="Avslag" className="bg-white text-gray-950">Avslag</option>
                    </select>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && !error && (
                <tr>
                  <td colSpan="4" className="px-5 py-5 text-center text-gray-500">
                    Inga ansökningar hittades i databasen.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
 