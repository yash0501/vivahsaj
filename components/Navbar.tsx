"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-background-main text-text-primary shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left section - Only visible on desktop */}
          <div className="hidden md:block w-1/3">
            <div className="flex space-x-6">
              <NavLink href="/vendors" label="Vendors" />
              <NavLink href="/bookings" label="Bookings" />
            </div>
          </div>
          
          {/* Center section - Logo */}
          <div className="flex-1 md:flex-none text-center">
            <Link href="/" className="text-2xl font-bold text-brand-primary inline-block">
              Vivahsaj
            </Link>
          </div>
          
          {/* Right section - Only visible on desktop */}
          <div className="hidden md:block w-1/3">
            <div className="flex space-x-6 justify-end">
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu className="w-6 h-6 text-text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Sheet for Mobile Navigation */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)}></div>

          {/* Sidebar */}
          <div className="fixed inset-y-0 left-0 w-64 bg-background-main shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b border-utility-lightGray">
              <span className="text-xl font-semibold text-brand-secondary">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-text-primary" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              <NavLink href="/vendors" label="Vendors" />
              <NavLink href="/bookings" label="Bookings" />
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* Reusable NavLink Component */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-text-primary hover:text-brand-primary transition font-medium"
    >
      {label}
    </Link>
  );
}
