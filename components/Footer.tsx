import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-secondary text-background-main mt-10 py-6 border-t-2 border-brand-primary">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Vivaahsaj. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy" className="text-background-main hover:text-brand-primary transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-background-main hover:text-brand-primary transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
