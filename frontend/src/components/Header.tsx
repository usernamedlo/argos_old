'use client';

import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Turn as Hamburger } from 'hamburger-react';

import Link from "next/link";

const routes = [
  { key: "id_1", href: "/", label: "Features" },
  { key: "id_2", href: "/", label: "Team" },
  { key: "id_3", href: "/", label: "Blog" },
  { key: "id_4", href: "/", label: "Contact" },
];

const Header = () => {

  const [isOpen, setOpen] = useState(false)


  return (
    <Sheet>
      <SheetTrigger><Hamburger toggled={isOpen} toggle={setOpen} /></SheetTrigger>
      <SheetContent side={"top"} className="flex flex-col justify-center items-center" >
        <SheetHeader>
          <SheetDescription>
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.key}
                  href={route.href}
                  className="block px-2 py-1 text-lg"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
};

export default Header;
