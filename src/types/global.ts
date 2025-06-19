export interface Image {
  src: string;
  alt?: string;
}

export interface LinkType {
  href: string;
  text: string;
}

export interface SocLinkType extends Image {
  href: string;
}
