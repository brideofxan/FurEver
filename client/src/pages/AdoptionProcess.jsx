// Adoptionsprocessen — visas som sektion på startsidan
// Länkas från navbaren via id="adoption"

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
    ring: "ring-amber-400",
    text: "text-amber-700",
    alt: "Glad golden retriever som tittar mot kameran",
  },
  {
    type: "Katt",
    price: 2500,
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
    ring: "ring-emerald-400",
    text: "text-emerald-700",
    alt: "Svartvit katt som sitter och tittar framåt",
  },
  {
    type: "Kanin",
    price: 1500,
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop",
    ring: "ring-sky-400",
    text: "text-sky-700",
    alt: "Vit kanin med rosa öron i grön miljö",
  },
];

export function AdoptionProcess() {
  return (
    <section
      id="adoption"
      className="bg-gradient-to-b from-amber-50 to-stone-50 py-20 scroll-mt-24"
      aria-labelledby="adoption-heading"
    >

      {/* Rubrik-sektion */}
      <header className="max-w-3xl mx-auto px-6 text-center mb-16">
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-700 mb-4">
          Så funkar det
        </span>
        <h1
          id="adoption-heading"
          className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
        >
          Adoptionsprocessen
        </h1>
        <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
          Från ansökan till godkänd adoption — fyra enkla steg.
        </p>
      </header>

      {/* Steg — numrerad lista för skärmläsare */}
      <ol className="max-w-3xl mx-auto px-6 space-y-6 mb-24">
        {steps.map((s) => (
          <li
            key={s.nr}
            className="flex items-start gap-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-stone-200"
          >
            <span
              className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-500 text-white text-xl font-bold flex items-center justify-center shadow-md"
              aria-hidden="true"
            >
              {s.nr}
            </span>
            <div className="flex-1">
              <h2 className="font-bold text-stone-900 text-xl md:text-2xl mb-2">
                {s.title}
              </h2>
              <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Priser */}
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Priser
          </h2>
          <p className="text-lg text-stone-700">
            Vaccination, chip och hälsokontroll ingår.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
          {animals.map((a) => (
            <div key={a.type} className="text-center">
              <img
                src={a.img}
                alt={a.alt}
                className={`w-40 h-40 md:w-48 md:h-48 mx-auto mb-5 rounded-full object-cover shadow-lg ring-4 ${a.ring}`}
              />
              <h3 className="font-bold text-stone-900 text-xl md:text-2xl mb-2">
                {a.type}
              </h3>
              <p className={`text-3xl md:text-4xl font-bold ${a.text}`}>
                {a.price}
                <span className="text-lg font-medium text-stone-600 ml-1">kr</span>
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-amber-500 rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Redo att hitta din nya vän?
          </h2>
          <p className="text-lg text-amber-50 mb-8 max-w-lg mx-auto">
            Fyll i vårt formulär — det tar bara några minuter.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-amber-700 hover:bg-amber-100 font-bold text-lg px-10 py-4 rounded-full transition shadow-md focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-amber-500"
          >
            Skicka ansökan
          </a>
        </div>
      </div>

    </section>
  );
}