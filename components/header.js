import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex flex-wrap items-center justify-between lg:container mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link passHref href="https://www.manomano.fr/">
            <Image
              src="/mano.png"
              width={175}
              height={55}
              priority
              alt="ManoMano logo"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
