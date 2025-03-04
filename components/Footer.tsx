import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Vivaahsaj. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}