import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard.jsx";

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [intro, setIntro] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/animals")
      .then((res) => {
        if (!res.ok) throw new Error("Server fel");
        return res.json();
      })
      .then((data) => setAnimals(data))
      .catch(() => setError("Kunde inte hämta djuren, vänligen försök igen"));
  }, []);

  useEffect(() => {
    fetch("/api/animals/content/Detaljsida")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setIntro(data));
  }, []);

  return (
    <div>
      {intro && (
        <section className="mx-auto max-w-4xl px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{intro.heading}</h1>
          {intro.body && (
            <p className="mt-4 text-lg text-gray-700">{intro.body}</p>
          )}
        </section>
      )}

      {error && (
        <p className="p-10 text-center text-lg text-red-700">{error}</p>
      )}

      <section className="mx-auto grid max-w-[2000px] gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </section>
    </div>
  );
}
