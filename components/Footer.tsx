import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F9F5EE]">
      <div className="mx-auto max-w-6xl px-6 py-7 text-center">

        {/* Logo */}
        <Image
          src="/primary-logo-new.svg"
          alt="Pitt Property Management"
          width={240}
          height={80}
          priority
          className="mx-auto h-auto w-[190px] sm:w-[210px]"
        />

        {/* Gold Divider */}
        <div className="mx-auto my-5 h-px w-16 bg-[#C8A86B]" />

        {/* Social Links */}
        <div className="mb-5 flex items-center justify-center gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/pittpropertymanagementuk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#0B1B2B] transition hover:border-[#C8A86B] hover:text-[#C8A86B]"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-600 sm:gap-x-8 sm:text-sm">
          <Link
            href="/privacy-policy"
            className="transition hover:text-black"
          >
            Privacy Policy
          </Link>

          <Link
            href="/cookie-policy"
            className="transition hover:text-black"
          >
            Cookie Policy
          </Link>

          <Link
            href="/terms-of-use"
            className="transition hover:text-black"
          >
            Terms of Use
          </Link>

          <Link
            href="/complaints-procedure"
            className="transition hover:text-black"
          >
            Complaints Procedure
          </Link>
            <Link
            href="/property-redress"
            className="transition hover:text-black"
          >
           Property Redress
          </Link>
        </div>

        

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-300 pt-4 text-xs text-gray-500 sm:text-sm">
          <p>© {new Date().getFullYear()} Pitt Property Management Ltd.</p>

          <p className="mt-1">
            Built by{" "}
            <a
              href="https://goodfruitcreative.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-[#C9A96E]"
            >
              Good Fruit Creative
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}