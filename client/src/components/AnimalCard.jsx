import { useFavorites } from '../hooks/useFavorites';

export default function AnimalCard({ animal }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(animal.id);

  const toggleFavorite = (e) => {
    e.stopPropagation(); 
    if (favorite) {
      removeFavorite(animal.id);
    } else {
      addFavorite(animal.id);
    }
  };

  return (
    <>
      <article className="relative cursor-pointer rounded-sm border-2 border-gray-200 bg-gray-50 p-3 shadow-md duration-200 ease-in-out hover:scale-102 sm:hover:scale-105">
        <button
          onClick={toggleFavorite}
          className="absolute top-5 right-5 z-10 bg-white/10 p-2 text-xl shadow-sm backdrop-blur-xs transition hover:scale-110 hover:bg-white [text-shadow:_0_0_2px_rgba(0,0,0,1)]"

          title={favorite ? "Ta bort från favoriter" : "Lägg till som favorit"}
        >
          {favorite ? '❤️' : '🤍'}
        </button>

        <img
          src={animal.image_path}
          alt={`En bild på en ${animal.animal_type} som heter ${animal.name}.`}
          className="aspect-square w-full object-cover p-3"
        />
        <p className="py-2 text-center text-2xl tracking-wide">{animal.name}</p>
      </article>
    </>
  );
}
