"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Vivaahsaj
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/vendors" className="text-gray-700 hover:text-gray-900">Vendors</Link>
          <Link href="/bookings" className="text-gray-700 hover:text-gray-900">Bookings</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 p-4">
          <Link href="/vendors" className="text-gray-700 hover:text-gray-900">Vendors</Link>
          <Link href="/bookings" className="text-gray-700 hover:text-gray-900">Bookings</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
      )}
    </nav>
  );
}