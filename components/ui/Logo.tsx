import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/ppm-logo-horizontal.svg"
      alt="Pitt Property Management"
      width={520}
      height={150}
      priority
      className="h-16 w-auto"
    />
  );
}