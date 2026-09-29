// client/src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 rounded-sm border-2 border-gray-200 bg-gray-100 text-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-8 grid gap-6 sm:grid-cols-3 text-center sm:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-2">FurEver</h3>
          <p className="text-sm text-gray-700">
            Vi hjälper djur att hitta ett kärleksfullt hem för alltid.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
          <p className="text-sm text-gray-700">info@furever.se</p>
          <p className="text-sm text-gray-700">012-345 67 89</p>
        </div>

        {/* Opening hours */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Öppettider</h3>
          <p className="text-sm text-gray-700">Mån–Fre: 10–17</p>
          <p className="text-sm text-gray-700">Lör–Sön: 11–15</p>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-600">
        © {currentYear} FurEverTeam. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}