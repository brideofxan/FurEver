import Navbar from "./Navbar.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="max-w-7xl mx-auto p-8 text-center mt-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Välkommen till FurEver</h1>
        <p className="text-lg text-gray-600">Din framtida Bästa vän väntar på Dig.</p>
      </main>
    </div>
  );
}

