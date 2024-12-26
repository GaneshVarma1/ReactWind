export interface NavItem {
  title: string;
  href: string;
}

export interface FooterLink {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ComponentType;
}