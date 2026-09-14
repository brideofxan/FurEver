import Navbar from "../components/Navbar.jsx";
import AnimalCard from "../components/AnimalCard.jsx";

export default function Animals() {
  const fakeAnimals = [
    { id: 1, name: "Dawg", image: "https://placedog.net/400?id=1" },
    { id: 2, name: "Hunden", image: "https://placedog.net/400?id=2" },
    { id: 3, name: "Vovve", image: "https://placedog.net/400?id=3" },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <p>Animals page test</p>
      <section className="mx-auto grid max-w-lg gap-10 p-4 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {fakeAnimals.map((animal) => (
          <AnimalCard key={animal.id} name={animal.name} image={animal.image} />
        ))}
      </section>
    </div>
  );
}
