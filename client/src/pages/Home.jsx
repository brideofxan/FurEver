import { useState, useEffect } from "react";
import AnimalCard from "../components/AnimalCard.jsx";
import { useFavorites } from "../hooks/useFavorites.js";
import { Link } from "react-router";

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const { favorites } = useFavorites();
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

  const favoriteAnimals = animals.filter((animal) =>
    favorites.includes(animal.id),
  );
  useEffect(() => {
    fetch("/api/animals/content/Home")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setIntro(data));
  }, []);

  return (
    <div>
      {intro && (
        <section className="mx-auto mb-5 max-w-4xl px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">{intro.heading}</h1>
          <p className="mt-4 text-2xl text-gray-700">{intro.body}</p>
        </section>
      )}

      <h2 className="p-4 text-lg">
        Adoptera från oss Vårt mål är att hitta rätt hem till varje djur och att
        det får stanna i sitt nya hem resten av sitt liv! Vi är mycket noga med
        vart våra djur flyttar och kontrollerar alltid de nya hemmen mot
        länsstyrelsens register över personer med djurförbud samt gör hembesök.
        <br />
        Vi bokar alltid in ett första besök där man får komma hit och träffa den
        individen vi tror kan passa, sedan vill vi att man åker hem och funderar
        i lugn och ro. Man får aldrig ta med ett djur på första besöket. Man är
        heller aldrig lovad ett djur, vi förbehåller oss rätten att för djurens
        bästa kunna neka en placering om det inte känns rätt.
        <br />
        <br />
        För oss är det också viktigt att ha fortsatt kontakt med det nya hemmet
        när djuren har flyttat. Innan du fattar beslutet att skaffa ett djur
        tänk på:
        <br />
        Kommer du att kunna ta hand om djuret hela dess livslängd? En kanin kan
        till exempel bli 10 år gammal.
        <br />
        Har du koll på vad djuret har för behov?
        <br />
        Har du tid?
        <br />
        Har du ekonomi?
        <br />
        Vem passar djuret om du reser bort?
        <br />
        Är du säker på att ingen i familjen har allergier?
      </h2>

      <h3 className="p-3 text-xl font-medium">
        Här är några av våra djur som söker nya hem.
        <br />
        <Link
          className="text-blue-700 italic underline underline-offset-2"
          to="/animals"
        >
          {" "}
          Klicka här
        </Link>{" "}
        för att se alla djur.
      </h3>

      {error && (
        <p className="p-10 text-center text-lg text-red-700">{error}</p>
      )}

      <section className="mx-auto grid max-w-[2000px] gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {animals.slice(0, 6).map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </section>

      {/* Sektion med Favoriterna, längre ner på sidan */}
      <section className="mx-auto mt-12 max-w-[2000px] border-t border-amber-200/60 p-4 pt-8">
        <div className="mb-6">
          <h3 className="text-3xl font-semibold tracking-wide text-gray-800">
            Dina favoriter
          </h3>
          <p className="mt-1 text-sm text-gray-500">
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
