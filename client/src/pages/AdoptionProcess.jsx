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
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop",
    ring: "ring-amber-300",
    text: "text-amber-600",
  },
  {
    type: "Katt",
    price: 2500,
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop",
    ring: "ring-emerald-300",
    text: "text-emerald-600",
  },
  {
    type: "Kanin",
    price: 1500,
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=200&h=200&fit=crop",
    ring: "ring-sky-300",
    text: "text-sky-600",
  },
];

export function AdoptionProcess() {
  return (
    <section
      id="adoption"
      className="bg-gradient-to-b from-amber-50 to-stone-50 py-20 scroll-mt-24"
    >

      <div className="max-w-3xl mx-auto px-6 text-center mb-14">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 mb-3">
          Så funkar det
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
          Adoptionsprocessen
        </h1>
        <p className="text-stone-600 max-w-xl mx-auto">
          Från ansökan till godkänd adoption — fyra enkla steg.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-4 mb-20">
        {steps.map((s) => (
          <div
            key={s.nr}
            className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-amber-200 transition"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 text-white text-lg font-bold flex items-center justify-center shadow-md">
              {s.nr}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-stone-800 text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Priser */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-3">
            Priser
          </h2>
          <p className="text-stone-600">
            Vaccination, chip och hälsokontroll ingår.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-10 mb-14">
          {animals.map((a) => (
            <div key={a.type} className="text-center">
              <img
                src={a.img}
                alt={a.type}
                className={`w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full object-cover shadow-lg ring-4 ${a.ring}`}
              />
              <div className="font-semibold text-stone-800 text-lg mb-1">
                {a.type}
              </div>
              <div className={`text-2xl font-bold ${a.text}`}>
                {a.price}
                <span className="text-sm font-medium text-stone-500 ml-1">kr</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA med färgad bakgrund */}
        <div className="bg-amber-500 rounded-3xl p-8 md:p-10 shadow-lg text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Redo att hitta din nya vän?
          </h3>
          <p className="text-sm text-amber-50 mb-6">
            Fyll i vårt formulär — det tar bara några minuter.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-semibold px-10 py-3 rounded-full transition shadow-md"
          >
            Skicka ansökan
          </a>
        </div>
      </div>

    </section>
  );
}