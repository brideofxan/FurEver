import { Link } from "react-router";

export default function AnimalCard({ animal }) {
  return (
    <Link to={`/animals/${animal.id}`}>
      <article className="cursor-pointer rounded-sm border-2 border-gray-200 bg-gray-50 p-3 shadow-md duration-200 ease-in-out hover:scale-102 sm:hover:scale-105">
        <img
          src={animal.image_path}
          alt={animal.name}
          className="aspect-square w-full object-cover p-3"
        />
        <p className="py-2 text-center text-2xl tracking-wide">
          {animal.name}
        </p>
      </article>
    </Link>
  );
}