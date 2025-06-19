import clsx from "clsx";
import Link from "next/link";

import { Container } from "@/common/Container";
import { Button } from "@/components/base/Button";
import { LinkType } from "@/types/global";
import { HEADER_DATA } from "@/utils/header.mock";
import "@/components/main/Header/Header.scss";
import "@/components/components.scss";

interface HeaderProps {
  navLinks?: LinkType[];
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const { navLinks } = HEADER_DATA;

  return (
    <header className={clsx("header", className)}>
      <div className="header__inner">
        <Container>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {index === 0 ? (
                    <Link href={link.href}>
                      <Button className="button">{link.text}</Button>
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="link"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
