"use client";

import clsx from "clsx";
import Link from "next/link";
import { NavbarLink } from "./navbar-link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { HiBars3 } from "react-icons/hi2";
import useTranslation from "next-translate/useTranslation";

const navbarLinks = [
  { id: 1, href: "/projects", title: "projects" },
  { id: 3, href: "/contact", title: "contact" },
];

export function Navbar() {
  const { t } = useTranslation("common");

  const classesProps = {
    activeClassName: "font-black",
    className: "text-base font-semibold leading-6",
    inactiveClassName: "",
  };

  const classesMobileProps = {
    activeClassName: "font-black",
    className:
      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-9 hover:bg-white/10 transition duration-150 ease-in",
    inactiveClassName: "",
  };

  return (
    <header className={clsx("transition duration-500 bg-transparent")}>
      <div className="mx-auto flex max-w-7xl justify-between px-9 py-6">
        <div className="flex items-center gap-x-12">
          <div className="-m-1.5 p-1.5">
            <p className="font-bold text-2xl text-primary">Made</p>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navbarLinks.map((links) => (
              <NavbarLink key={links.id} href={links.href} {...classesProps}>
                {links.title}
              </NavbarLink>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden relative">
          <Dialog>
            <DialogTrigger>
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </DialogTrigger>
            <DialogContent className="absolute left-0 min-h-screen h-full translate-x-0 max-w-xs lg:hidden">
              <div className="flex items-center justify-between">
                <div className="-m-1.5 p-1.5">
                  <Link href="/">
                    <p className="font-bold text-2xl text-primary">Made</p>
                  </Link>
                </div>
              </div>
              <nav className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="py-8">
                    {navbarLinks.map((links) => (
                      <NavbarLink
                        key={links.id}
                        href={links.href}
                        {...classesMobileProps}
                      >
                        {t(links.title)}
                      </NavbarLink>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-2 py-6">
                    {/* <LoginModalTrigger />
                    <RegisterModalTrigger /> */}
                  </div>
                </div>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <span>{t("login")}</span>
          <Button>{t("register")}</Button>
        </div>
      </div>
    </header>
  );
}
