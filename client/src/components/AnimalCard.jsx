export default function AnimalCard({ name, image }) {
  return (
    <>
      <article className="rounded-md border-2 border-gray-200 bg-olive-50 p-3 shadow-sm">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full object-cover p-3"
        />
        <h3 className="py-2 text-center text-2xl tracking-wide">{name}</h3>
      </article>
    </>
  );
}
