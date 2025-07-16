"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import webhost_logo from "../../public/WPHost.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 relative">
      <Link href="/">
        <Image src={webhost_logo} alt="webhost logo" width={120} priority />
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

      <nav className="hidden md:flex items-center w-full gap-8">
        <ul className="flex gap-6 justify-center flex-1">
          <li>
            <Link href="#">Accueil</Link>
          </li>
          <li>
            <Link href="#">Domaine</Link>
          </li>
          <li>
            <Link href="#">Hébergement</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-4 justify-end">
          <li>
            <Link href="/login">Connexion</Link>
          </li>
          <li>
            <Link href="/register">S'inscrire</Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <nav className="absolute top-20 right-4 bg-white shadow-lg rounded-md p-6 flex flex-col gap-4 w-56 md:hidden z-40">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" onClick={() => setMenuOpen(false)}>
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
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Connexion
              </Link>
            </li>
            <li>
              <Link href="/register" onClick={() => setMenuOpen(false)}>
                S'inscrire
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
