import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center border-b border-gray-200 bg-white shadow-sm sm:h-24">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link to="/">
            <img
              src="/logo_furever.png"
              alt="FurEver Logo"
              className="h-12 w-auto transition-all duration-200 sm:h-20"
            />
          </Link>
        </div>

        {/* Sökfält */}
        <div className="mx-2 max-w-md flex-1 sm:mx-8">
          <div className="relative flex items-center">
            {/* Förstoringsglas */}
            <div className="pointer-events-none absolute left-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border border-gray-300 bg-gray-100 py-1.5 pr-3 pl-9 text-sm text-gray-600 focus:ring-1 focus:ring-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Meny */}
        <div className="hidden items-center space-x-2 text-sm font-medium text-gray-700 sm:flex">
          <Link
            to="/animals"
            className="cursor-pointer transition-colors hover:text-amber-600"
          >
            Djur
          </Link>
          <span className="text-gray-300">|</span>
          <a
            href="#adoption"
            className="cursor-pointer transition-colors hover:text-amber-600"
          >
            Adoption
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#contact"
            className="cursor-pointer transition-colors hover:text-amber-600"
          >
            Kontakt
          </a>
          <span className="text-gray-300">|</span>
          <a
            href="#prices"
            className="cursor-pointer transition-colors hover:text-amber-600"
          >
            Priser
          </a>
          <span className="text-gray-300">|</span>

          {/* Gubb-ikon */}
          <a
            href="#mypages"
            className="cursor-pointer pl-1 transition-colors hover:text-amber-600"
            title="Mina sidor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </a>
        </div>

        {/* Hamburgerknapp (streck/kryss) */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-2 text-gray-600 hover:text-amber-600 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Utvikbar mobilmeny */}
      {isOpen && (
        <div className="absolute top-16 left-0 z-40 flex w-full flex-col items-center space-y-3 border-b border-gray-200 bg-white px-6 py-4 shadow-lg sm:hidden">
          <Link
            to="/animals"
            className="block w-full border-b border-gray-100 py-3 text-center text-base font-medium text-gray-700 hover:text-amber-600"
            onClick={() => setIsOpen(false)}
          >
            Djur
          </Link>
          <a
            href="#adoption"
            className="block w-full border-b border-gray-100 py-3 text-center text-base font-medium text-gray-700 hover:text-amber-600"
            onClick={() => setIsOpen(false)}
          >
            Adoption
          </a>
          <a
            href="#contact"
            className="w- full block border-b border-gray-100 py-3 text-center text-base font-medium text-gray-700 hover:text-amber-600"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
          <a
            href="#prices"
            className="block w-full border-b border-gray-100 py-3 text-center text-base font-medium text-gray-700 hover:text-amber-600"
            onClick={() => setIsOpen(false)}
          >
            Priser
          </a>
          <a
            href="#mypages"
            className="block w-full border-b border-gray-100 py-3 text-center text-base font-medium text-gray-700 hover:text-amber-600"
            onClick={() => setIsOpen(false)}
          >
            Mina sidor
          </a>
        </div>
      )}
    </nav>
  );
}
