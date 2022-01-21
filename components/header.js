import Link from "next/link";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { forwardRef } from "react";
import Btn from "./Btn";

const LinkImage = forwardRef(function Img({ onClick, href }, ref) {
  return (
    <div href={href} ref={ref} onClick={onClick}>
      <Image
        src="/mano.png"
        width={175}
        height={55}
        priority
        alt="ManoMano logo"
      />
    </div>
  );
});

export default function Header() {
  return (
    <header className="bg-white shadow-xl">
      <div className="flex flex-wrap items-center justify-between lg:container mx-auto md:flex-no-wrap md:px-6">
        <Link passHref href="https://www.manomano.fr/">
          <LinkImage />
        </Link>
        <div className="flex flex-wrap">
          <Link passHref href="/admin">
            <Btn content={"Admin"} />
          </Link>
          <ShoppingCartIcon sx={{ fontSize: 45 }} className="ml-14 mr-3" />
        </div>
      </div>
    </header>
  );
}
