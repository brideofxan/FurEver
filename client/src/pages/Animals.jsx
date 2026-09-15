import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import AnimalCard from "../components/AnimalCard.jsx";

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/api/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <h3 className="m-5 p-4 text-center text-3xl font-bold sm:text-2xl">
        Våra djur som är tillgängliga för adoption
      </h3>
      <section className="mx-auto grid max-w-[2000px] gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </section>
    </div>
  );
}
