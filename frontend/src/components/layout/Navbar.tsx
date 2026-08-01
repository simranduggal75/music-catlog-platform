"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
 const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  toast.success("Logged out successfully");

  router.replace("/login");
};

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/search"
          className="text-2xl font-bold text-blue-600"
        >
          🎵 Music Catalog
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/search"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Search
          </Link>

          <Link
            href="/library"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Library
          </Link>

          <Link
            href="/dashboard"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Dashboard
          </Link>

          <button
  onClick={handleLogout}
  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
>
  Logout
</button>
        </div>
      </div>
    </nav>
  );
}