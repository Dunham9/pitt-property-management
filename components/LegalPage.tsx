import type { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalPage({
  title,
  updated,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-[#f9f5ee]">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="font-serif text-5xl text-slate-900 md:text-6xl">
          {title}
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Last updated: {updated}
        </p>

        <div className="my-10 h-px w-20 bg-[#c8a86b]" />

        <div className="prose prose-neutral max-w-none lg:prose-lg">
          {children}
        </div>
      </div>
    </main>
  );
}