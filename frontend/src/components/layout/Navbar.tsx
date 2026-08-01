"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">🎵 Music Catalog</h1>

        <div className="flex gap-6">
          <Link href="/search" className="hover:text-blue-600">
            Search
          </Link>

          <Link href="/library" className="hover:text-blue-600">
            Library
          </Link>
        </div>
      </div>
    </nav>
  );
}