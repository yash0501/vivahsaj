"use client";

import Link from "next/link";
import { Home, Compass, Wallet, BookOpen, User } from "lucide-react";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-between items-center px-4 py-2">
        <NavItem href="/" icon={Home} label="Home" active={pathname === "/"} />
        <NavItem href="/explore" icon={Compass} label="Explore" active={pathname === "/explore"} />
        <NavItem href="/budget-planner" icon={Wallet} label="Budget" active={pathname === "/budget-planner"} />
        <NavItem href="/blogs" icon={BookOpen} label="Blogs" active={pathname === "/blogs"} />
        <NavItem href="/profile" icon={User} label="Profile" active={pathname === "/profile"} />
      </div>
    </nav>
  );
}

function NavItem({ href, icon: Icon, label, active }: { href: string; icon: React.ElementType; label: string; active: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center text-xs ${active ? "text-blue-600" : "text-gray-500 hover:text-gray-700"} transition`}>
      <Icon className="w-6 h-6 mb-1" />
      {label}
    </Link>
  );
}
