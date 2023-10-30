"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

type Props = { className?: string };

const MobileNav = ({ className }: Props) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
        `sticky inset-0 flex w-full flex-col bg-white p-5 shadow-[0px_3px_20px_rgba(0,0,0,0.2)] ${
          isOpen ? "h-screen" : "h-full"
        }`,
        className,
      )}
    >
      <button
        onClick={toggle}
        className="flex flex-col items-center justify-center self-end"
      >
        <span
          className={`bg-steel-500 block h-0.5 w-6 rounded-sm border-b-2 border-black 
                    transition-all duration-300 ease-out ${
                      isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-steel-500 my-0.5 block h-0.5 w-6 rounded-sm border-b-2 
                    border-black transition-all duration-300 ease-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-steel-500 block h-0.5 w-6 rounded-sm border-b-2 border-black 
                    transition-all duration-300 ease-out ${
                      isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                    }`}
        ></span>
      </button>

      <nav
        className={`z-10 ${isOpen ? "flex-around h-1/2 flex-col" : "hidden"}`}
      >
        <div className="flex gap-5">
          <Image src={logo} alt="logo" width={30} />
          <h1 className="text-main text-xl font-bold">Smart Lungs</h1>
        </div>
        {links.map((link) => (
          <Link
            onClick={toggle}
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

export default MobileNav;
