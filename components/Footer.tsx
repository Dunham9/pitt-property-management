import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F9F5EE]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">

        {/* Logo */}
        <Image
          src="/primary-logo-new.svg"
          alt="Pitt Property Management"
          width={240}
          height={80}
          priority
          className="mx-auto h-auto w-[210px]"
        />

        {/* Gold Divider */}
        <div className="mx-auto my-6 h-px w-20 bg-[#C8A86B]" />

        {/* Social Links */}
        <div className="mb-5 flex items-center justify-center gap-3">
          
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61593022056295"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-[#0B1B2B] transition hover:border-[#C8A86B] hover:text-[#C8A86B]"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M13.5 8.5V6.8c0-.8.5-1 1-1h2.4V2.1L13.6 2C10.3 2 9 4 9 6.5v2H6v4h3V22h4.5v-9.5h3l.5-4h-3.5z" />
            </svg>
          </a>

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
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
          <Link href="/privacy-policy" className="transition hover:text-black">
            Privacy Policy
          </Link>

          <Link href="/cookie-policy" className="transition hover:text-black">
            Cookie Policy
          </Link>

          <Link href="/terms-of-use" className="transition hover:text-black">
            Terms of Use
          </Link>

          <Link
            href="/complaints-procedure"
            className="transition hover:text-black"
          >
            Complaints Procedure
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 border-t border-gray-300 pt-4">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">

            {/* Property Redress */}
            <a
              href="https://www.propertyredress.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                src="/the-redress-logo.png"
                alt="Member of the Property Redress Scheme"
                width={82}
                height={32}
                className="h-auto w-[82px]"
              />
            </a>

            <span className="hidden text-gray-300 sm:inline">·</span>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Pitt Property Management Ltd.
              <span className="mx-2">·</span>
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

      </div>
    </footer>
  );
}