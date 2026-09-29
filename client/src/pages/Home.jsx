import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    fetch("/api/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    fetch("/api/animals/content/Home")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setIntro(data));
  }, []);

  return (
    <div>
      {intro && (
        <section className="mx-auto max-w-4xl px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{intro.heading}</h1>
          <p className="mt-4 text-lg text-gray-700">{intro.body}</p>
        </section>
      )}
      <section className="mx-auto grid max-w-[2000px] gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {animals.slice(0, 6).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
