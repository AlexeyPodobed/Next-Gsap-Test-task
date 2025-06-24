import clsx from "clsx";
import Link from "next/link";

import { Container } from "@/common/Container";
import SocLink from "@/components/base/SocLink";
import "@/components/components.scss";
import { LinkType, SocLinkType } from "@/types/global";
import { FOOTER_DATA } from "@/utils/footer.mock";
import "@/components/main/Footer/Footer.scss";

interface FooterProps {
  navLinks?: LinkType[];
  socLinks?: SocLinkType[];
  legalLinks?: LinkType[];
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const { navLinks, socLinks, legalLinks } = FOOTER_DATA;

  return (
    <footer className={clsx("footer", className)}>
      <Container>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="link"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__devider" />

        <div className="footer__sub-nav">
          {!!socLinks.length && (
            <ul className="footer__soc-list">
              {socLinks.map((link, index) => (
                <li key={index}>
                  <SocLink
                    link={link}
                    className="footer__soc-link"
                  />
                </li>
              ))}
            </ul>
          )}

          {!!legalLinks.length && (
            <ul className="footer__sub-links">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="footer__sub-link"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
