import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
    
  return (
    <Link href="/" className="inline-flex items-center">
 <Image
  src="/logo.svg"
  alt="PPM Property Management"
  width={180}
  height={72}
  className={light ? "brightness-0 invert" : ""}
  priority
/>
    </Link>
  );
}