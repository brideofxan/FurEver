const steps = [
  { nr: "1", title: "Skicka ansökan", text: "Fyll i formuläret med dina uppgifter och berätta kort om dig själv, ditt hem och vilket djur du är intresserad av. Det tar några minuter." },
  { nr: "2", title: "Vi granskar", text: "Vårt team läser igenom din ansökan och matchar dig med rätt djur. Vi hör av oss inom 48 timmar med besked om nästa steg." },
  { nr: "3", title: "Träffa djuret", text: "Vi bokar ett möte på plats där du får träffa djuret och ställa frågor du har. Ta gärna med familjen." },
  { nr: "4", title: "Godkänd adoption", text: "Efter ett beslut om din ansökan är godkänd skriver vi avtal, går genom vaccination och chip — sen är det bara att ta din nya vän hem!" },
];

const animals = [
  {
    type: "Hund",
    price: 3000,
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
    alt: "Glad golden retriever som tittar mot kameran",
  },
  {
    type: "Katt",
    price: 2500,
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    alt: "Svartvit katt som sitter och tittar framåt",
  },
  {
    type: "Kanin",
    price: 1500,
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop",
    alt: "Vit kanin med rosa öron i grön miljö",
  },
];

export default function AdoptionProcess() {
  return (
    <div>
      <section aria-labelledby="adoption-heading">
        <h1
          id="adoption-heading"
          className="m-5 p-4 text-center text-3xl font-bold sm:text-2xl"
        >
          Adoptionsprocessen
        </h1>
        <p className="px-4 pb-4 text-center text-lg text-gray-700">
          Från ansökan till godkänd adoption — fyra enkla steg.
        </p>

        <ol className="mx-auto max-w-4xl space-y-6 px-4 py-8">
          {steps.map((s) => (
            <li
              key={s.nr}
              className="flex items-start gap-5 rounded-sm border-2 border-gray-200 bg-gray-50 p-5 shadow-md"
            >
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-white"
                aria-hidden="true"
              >
                {s.nr}
              </span>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">{s.title}</h2>
                <p className="pt-1 text-lg leading-relaxed text-gray-700">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="prices-heading">
        <h2
          id="prices-heading"
          className="m-5 p-4 text-center text-3xl font-bold sm:text-2xl"
        >
          Priser
        </h2>
        <p className="px-4 pb-4 text-center text-lg text-gray-700">
          Vaccination, chip och hälsokontroll ingår.
        </p>

        <div className="mx-auto grid max-w-[2000px] gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((a) => (
            <article
              key={a.type}
              className="cursor-pointer rounded-sm border-2 border-gray-200 bg-gray-50 p-3 shadow-md duration-200 ease-in-out hover:scale-102 sm:hover:scale-105"
            >
              <img
                src={a.img}
                alt={a.alt}
                className="aspect-square w-full object-cover p-3"
              />
              <p className="py-2 text-center text-2xl tracking-wide">{a.type}</p>
              <p className="pb-2 text-center text-2xl font-bold text-amber-600">
                {a.price}
                <span className="text-base font-medium text-gray-600 ml-1">kr</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <a
          href="#contact"
          className="inline-block rounded-sm border-2 border-amber-500 bg-amber-500 px-10 py-3 text-lg font-bold text-white shadow-md transition hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-offset-2"
        >
          Skicka ansökan
        </a>
      </div>
    </div>
  );
}