import Link from "next/link";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex flex-wrap items-center justify-between lg:container mx-auto md:flex-no-wrap md:px-6">
        <Link passHref href="https://www.manomano.fr/">
          <Image
            src="/mano.png"
            width={175}
            height={55}
            priority
            alt="ManoMano logo"
          />
        </Link>
        <ShoppingCartIcon sx={{ fontSize: 35 }} className="mr-3"/>
      </div>
    </header>
  );
}
