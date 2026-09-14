const steps = [
  { nr: "1", title: "Skicka ansökan", text: "Fyll i formuläret med dina uppgifter." },
  { nr: "2", title: "Vi granskar", text: "Svar inom 48 timmar." },
  { nr: "3", title: "Träffa djuret", text: "Vi bokar ett möte på plats." },
  { nr: "4", title: "Godkänd adoption", text: "Välkommen hem tillsammans!" },
];

const animals = [
  { type: "Hund", price: 2500, emoji: "🐕" },
  { type: "Katt", price: 1500, emoji: "🐈" },
  { type: "Kanin", price: 500, emoji: "🐇" },
];

export function AdoptionProcess() {
  return (
    <section id="adoption" className="bg-stone-50 py-16">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-3">
          Adoptionsprocessen
        </h1>
        <p className="text-center text-stone-600 mb-12">
          Från ansökan till godkänd adoption — fyra enkla steg.
        </p>

        <div className="space-y-4 mb-16">
          {steps.map((s) => (
            <div
              key={s.nr}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-stone-100"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center">
                {s.nr}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-stone-800">{s.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">
          Priser
        </h2>
        <p className="text-center text-stone-600 mb-8">
          Vaccination, chip och hälsokontroll ingår.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-12">
          {animals.map((a) => (
            <div
              key={a.type}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-stone-100 hover:shadow-md transition"
            >
              <div className="text-4xl mb-3">{a.emoji}</div>
              <div className="font-semibold text-stone-800 mb-2">{a.type}</div>
              <div className="text-2xl font-bold text-amber-600">
                {a.price}
                <span className="text-base font-medium text-stone-500 ml-1">kr</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-sm"
          >
            Skicka ansökan
          </a>
        </div>

      </div>
    </section>
  );
}