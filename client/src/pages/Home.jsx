import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import AnimalCard from "../components/AnimalCard.jsx";
import { useFavorites } from "../hooks/useFavorites.js";

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const { favorites } = useFavorites();

  useEffect(() => {
    fetch("/api/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const favoriteAnimals = animals.filter((animal) => favorites.includes(animal.id))

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <section className="mx-auto grid max-w-[2000px] gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {animals.slice(0, 6).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </section>
       
       {/* Sektion med Favoriterna, längre ner på sidan */}
      <section className="mx-auto max-w-[2000px] border-t border-amber-200/60 p-4 mt-12 pt-8">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-800">
            Dina favoriter
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {favorites.length === 0 
              ? "Du har inte sparat några favoriter ännu. Klicka på hjärtat på ett djur!" 
              : `Sparade favoriter: ${favorites.length} av max 3 (utan konto)`}
          </p>
        </div>

        {favoriteAnimals.length > 0 && (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </section>    
    </div>
  );
}