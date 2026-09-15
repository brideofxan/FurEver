export default function AnimalCard({ animal }) {
  return (
    <>
      <article className="cursor-pointer rounded-sm border-2 border-gray-200 bg-gray-50 p-3 shadow-md duration-200 ease-in-out hover:scale-105">
        <img
          src={animal.image_path}
          alt={animal.name}
          className="aspect-square w-full object-cover p-3"
        />
        <h3 className="py-2 text-center text-2xl tracking-wide">
          {animal.name}
        </h3>
      </article>
    </>
  );
}
