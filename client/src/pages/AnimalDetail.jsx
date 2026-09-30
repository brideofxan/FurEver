import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function AnimalDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/animals/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Djuret hittades inte");
        return res.json();
      })
      .then((data) => {
        setAnimal(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {loading && (
        <p className="text-center text-lg text-gray-700">Laddar...</p>
      )}

      {error && (
        <div className="text-center">
          <p className="text-lg text-red-600">{error}</p>
          <Link
            to="/animals"
            className="mt-4 inline-block text-amber-600 hover:underline"
          >
            ← Tillbaka till alla djur
          </Link>
        </div>
      )}

      {animal && (
        <>
          <Link
            to="/animals"
            className="mb-4 inline-block text-amber-600 hover:underline"
          >
            ← Tillbaka till alla djur
          </Link>

          <article className="rounded-sm border-2 border-gray-200 bg-gray-50 p-6 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <img
                  src={animal.image_path}
                  alt={animal.name}
                  className="aspect-square w-full rounded-sm object-cover"
                />
              </div>

              <div>
                <h1 className="mb-4 text-3xl font-bold text-gray-800">
                  {animal.name}
                </h1>

                <dl className="space-y-2 text-gray-700">
                  {animal.age && (
                    <div>
                      <dt className="font-semibold">Ålder</dt>
                      <dd>{animal.age}</dd>
                    </div>
                  )}
                  {animal.gender && (
                    <div>
                      <dt className="font-semibold">Kön</dt>
                      <dd>{animal.gender}</dd>
                    </div>
                  )}
                  {animal.animal_type && (
                    <div>
                      <dt className="font-semibold">Typ</dt>
                      <dd>{animal.animal_type}</dd>
                    </div>
                  )}
                  {animal.activity_level && (
                    <div>
                      <dt className="font-semibold">Aktivitetsnivå</dt>
                      <dd>{animal.activity_level}</dd>
                    </div>
                  )}
                  {animal.housing && (
                    <div>
                      <dt className="font-semibold">Boende</dt>
                      <dd>{animal.housing}</dd>
                    </div>
                  )}
                  {animal.good_with_children && (
                    <div>
                      <dt className="font-semibold">Bra med barn</dt>
                      <dd>{animal.good_with_children}</dd>
                    </div>
                  )}
                  {animal.good_with_animals && (
                    <div>
                      <dt className="font-semibold">Bra med andra djur</dt>
                      <dd>{animal.good_with_animals}</dd>
                    </div>
                  )}
                  {animal.special_needs && (
                    <div>
                      <dt className="font-semibold">Särskilda behov</dt>
                      <dd>{animal.special_needs}</dd>
                    </div>
                  )}
                  {animal.status && (
                    <div>
                      <dt className="font-semibold">Status</dt>
                      <dd className="font-bold text-amber-600">
                        {animal.status}
                      </dd>
                    </div>
                  )}
                </dl>

                {animal.description && (
                  <div className="mt-6">
                    <h2 className="mb-2 font-semibold text-gray-800">
                      Om {animal.name}
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                      {animal.description}
                    </p>
                  </div>
                )}

                <Link
                  to={`/animals/${animal.id}/apply`}
                  className="mt-8 inline-block w-full rounded-sm border-2 border-amber-500 bg-amber-500 px-8 py-3 text-center text-lg font-bold text-white shadow-md transition hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 focus:ring-offset-2 focus:outline-none sm:w-auto"
                >
                  Ansök om adoption
                </Link>
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
}
