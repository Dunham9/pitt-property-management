import Image from "next/image";
import Link from "next/link";

import LegalPage from "@/components/LegalPage";

export default function PropertyRedressPage() {
  return (
    <LegalPage
      title="Property Redress"
      updated="9 September 2026"
    >
      <div className="mt-14">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">
          1. Our Membership
        </h2>

        <p className="mb-6">
          Pitt Property Management is a member of the Property Redress Scheme,
          an independent redress scheme for property professionals.
        </p>

        <p>
          Our membership provides consumers with access to an independent
          complaints process where a complaint cannot be resolved directly with
          us.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">
          2. Complaints
        </h2>

        <p className="mb-6">
          If you have a complaint, please contact us first so that we have the
          opportunity to investigate and resolve the matter through our internal
          complaints procedure.
        </p>

        <p>
          You can read our full{" "}
          <Link
            href="/complaints-procedure"
            className="font-medium text-[var(--ppm-navy)] underline underline-offset-4"
          >
            Complaints Procedure
          </Link>
          .
        </p>
      </div>

      <div className="mt-14">
        <h2 className="mb-6 text-3xl font-semibold text-slate-900">
          3. Property Redress Scheme
        </h2>

        <p className="mb-8">
          Further information about the Property Redress Scheme can be found on
          their website.
        </p>

        <div className="mt-8">
          <a
            href="https://www.propertyredress.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/the-redress-logo.png"
              alt="Member of the Property Redress Scheme"
              width={150}
              height={60}
              className="h-auto w-[150px]"
            />
          </a>
        </div>
      </div>
    </LegalPage>
  );
}