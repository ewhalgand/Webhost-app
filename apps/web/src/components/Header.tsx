"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import webhost_logo from "../../public/WPHost.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === path) {
      return "bg-[rgba(39,222,191,0.19)] text-[#27DEBF] px-4 p-2 rounded-full";
    }

    if (pathname === "/" && path === "/register") {
      return "bg-[rgba(39,222,191,0.19)] text-[#27DEBF] px-4 p-2 rounded-full";
    }

    return "text-[#9B9B9B] hover:text-[#c2c2c2]";
  };

  return (
    <header className="relative flex items-center justify-between p-8">
      <Link href="/">
        <Image
          src={webhost_logo}
          alt="webhost logo"
          width={120}
          priority={false}
        />
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-3 rounded-md bg-black transition-transform duration-300 ease-in-out ${
            menuOpen ? "rotate-45 translate-y-1 w-6" : "translate-y-0"
          }`}
        />
        <span
          className={`h-0.5 w-6 rounded-md bg-black transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-3 rounded-md bg-black self-end transition-transform duration-300 ease-in-out ${
            menuOpen ? "-rotate-45 -translate-y-3 w-6" : "translate-y-0"
          }`}
        />
      </button>

      <nav className="items-center hidden w-full gap-8 md:flex">
        <ul className="flex justify-center flex-1 gap-6">
          <li>
            <Link href="/" className="text-[#9B9B9B] hover:text-[#c2c2c2]">
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="#domain"
              className="text-[#9B9B9B] hover:text-[#c2c2c2]"
            >
              Domaine
            </Link>
          </li>
          <li>
            <Link
              href="#pricing-plan"
              className="text-[#9B9B9B] hover:text-[#c2c2c2]"
            >
              Hébergement
            </Link>
          </li>
          <li>
            <Link href="#" className="text-[#9B9B9B] hover:text-[#c2c2c2]">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex justify-end gap-4">
          <li>
            <Link href="/login" className={isActive("/login")}>
              Connexion
            </Link>
          </li>
          <li>
            <Link href="/register" className={isActive("/register")}>
              S'inscrire
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <nav className="absolute z-40 flex flex-col w-56 gap-4 p-6 bg-white rounded-md shadow-lg top-20 right-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Domaine
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Hébergement
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <hr />
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/login"
                className={isActive("/login")}
                onClick={() => setMenuOpen(false)}
              >
                Connexion
              </Link>
            </li>

            <li>
              <Link
                href="/register"
                className={isActive("/register")}
                onClick={() => setMenuOpen(false)}
              >
                S'inscrire
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
