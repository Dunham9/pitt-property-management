import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F9F5EE]">
     <div className="mx-auto max-w-6xl px-6 pt-12 pb-5 text-center">

        {/* Logo */}
        <Image
          src="/primary-logo-new.svg"
          alt="Pitt Property Management"
          width={240}
          height={210}
          priority
          className="mx-auto"
        />
        

        {/* Gold Divider */}
        <div className="mx-auto my-10 h-px w-24 bg-[#C8A86B]" />

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
          <Link href="/privacy-policy" className="hover:text-black transition">
            Privacy Policy
          </Link>

          <Link href="/cookie-policy" className="hover:text-black transition">
            Cookie Policy
          </Link>

          <Link href="/terms-of-use" className="hover:text-black transition">
            Terms of Use
          </Link>

          <Link
            href="/complaints-procedure"
            className="hover:text-black transition"
          >
            Complaints Procedure
          </Link>
        </div>

        {/* Property Redress */}
        <div className="mt-12">
          <a
            href="https://www.propertyredress.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/the-redress-logo.png"
              alt="Member of the Property Redress Scheme"
              width={120}
              height={47}
              className="mx-auto"
            />
          </a>
        </div>

     {/* Copyright */}
 <div className="mt-6 border-t border-gray-300 pt-5">
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
    </footer>
  );
}