interface LinkOptions {
  title: string;
  href: string;
}

export interface NavigationItem {
  title: string;
  links: LinkOptions[];
}
