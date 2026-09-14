import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16 sm:h-24 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="#">
            <img 
              src="/logo_furever.png" 
              alt="FurEver Logo" 
              className="h-12 sm:h-20 w-auto transition-all duration-200" 
            />
          </a>
        </div>

        {/* Sökfält */}
        <div className="flex-1 max-w-md mx-2 sm:mx-8">
          <div className="relative flex items-center">
            {/* Förstoringsglas */}
            <div className="absolute left-3 pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 border border-gray-300 rounded pl-9 pr-3 py-1.5 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* Meny */}
        <div className="hidden sm:flex items-center space-x-2 text-sm font-medium text-gray-700">
          <a href="#animals" className="transition-colors hover:text-amber-600 cursor-pointer">Djur</a>
          <span className="text-gray-300">|</span>
          <a href="#adoption" className="transition-colors hover:text-amber-600 cursor-pointer">Adoption</a>
          <span className="text-gray-300">|</span>
          <a href="#contact" className="transition-colors hover:text-amber-600 cursor-pointer">Kontakt</a>
          <span className="text-gray-300">|</span>
          <a href="#prices" className="transition-colors hover:text-amber-600 cursor-pointer">Priser</a>
          <span className="text-gray-300">|</span>

          {/* Gubb-ikon */}
          <a href="#mypages" className="pl-1 transition-colors hover:text-amber-600 cursor-pointer" title="Mina sidor">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </a>
        </div>

        {/* Hamburgerknapp (streck/kryss) */}
        <div className="flex items-center sm:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-amber-600 focus:outline-none p-2 cursor-pointer"
          >
            {isOpen ? (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div> 

      {/* Utvikbar mobilmeny */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 px-6 py-4 flex flex-col items-center space-y-3 shadow-lg z-40">
          <a href="#animals" className="block w-full text-base font-medium text-gray-700 hover:text-amber-600 py-3 text-center border-b border-gray-100" onClick={() => setIsOpen(false)}>Djur</a>
          <a href="#adoption" className="block w-full text-base font-medium text-gray-700 hover:text-amber-600 py-3 text-center border-b border-gray-100" onClick={() => setIsOpen(false)}>Adoption</a>
          <a href="#contact" className="block w- full text-base font-medium text-gray-700 hover:text-amber-600 py-3 text-center border-b border-gray-100" onClick={() => setIsOpen(false)}>Kontakt</a>
          <a href="#prices" className="block w-full text-base font-medium text-gray-700 hover:text-amber-600 py-3 text-center border-b border-gray-100" onClick={() => setIsOpen(false)}>Priser</a>
          <a href="#mypages" className="block w-full text-base font-medium text-gray-700 hover:text-amber-600 py-3 text-center border-b border-gray-100" onClick={() => setIsOpen(false)}>Mina sidor</a>
        </div>
      )}
    </nav>
  );
}
