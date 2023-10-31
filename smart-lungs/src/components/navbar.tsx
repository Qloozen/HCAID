"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.svg";

type Props = { className?: string };

const Navbar = ({ className }: Props) => {
  const path = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Experiences",
      href: "/experiences",
    },
  ];

  const getClassname = (href: string) => {
    if (href === path) {
      return "text-main border-b-4 border-main";
    }
  };

  return (
    <div
      className={cn(
        "sticky inset-0 z-10 bg-white shadow-[0px_3px_20px_rgba(0,0,0,0.2)]",
        className,
      )}
    >
      <nav className="flex-around m-auto w-[80%] p-3">
        <div className="flex gap-5">
          <Image src={logo} alt="logo" width={30} />
          <h1 className="text-main text-xl font-bold">Smart Lungs</h1>
        </div>

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${getClassname(link.href)}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
