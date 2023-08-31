import { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

interface Props {
  activeClassName?: string;
  className?: string;
  inactiveClassName?: string;
  href: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
}

export function NavbarLink({
  activeClassName,
  className,
  inactiveClassName,
  href,
  children,
  onClick,
}: Props) {
  const asPath = usePathname();
  const isActive = asPath?.match(`^${href}`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        className,
        isActive ? activeClassName : inactiveClassName
      )}
    >
      {children}
    </Link>
  );
}
