import { PUBLIC_ROUTES } from "@/shared/enums/public-routes";
import type { NavigationItem } from "@/features/footer/shared/interfaces/navigation-options";

const MY_ACCOUNT_NAV_COLUMN: NavigationItem[] = [
  {
    title: "My Account",
    links: [
      { title: "My Account", href: "/" },
      { title: "Order History", href: "/" },
      { title: "Shoping Cart", href: "/" },
      { title: "Wishlist", href: "/" },
    ],
  },
];

const HELPS_NAV_COLUMN: NavigationItem[] = [
  {
    title: "Helps",
    links: [
      { title: "Contact", href: PUBLIC_ROUTES.CONTACT },
      { title: "Faqs", href: PUBLIC_ROUTES.FAQS },
      { title: "Terms & Condition", href: "/" },
      { title: "Privacy Policy", href: "/" },
    ],
  },
];

const PROXY_NAV_COLUMN: NavigationItem[] = [
  {
    title: "Proxy",
    links: [
      { title: "About", href: PUBLIC_ROUTES.ABOUT },
      { title: "Shop", href: "/" },
      { title: "Product", href: "/" },
      { title: "Track Order", href: "/" },
    ],
  },
];

const CATEGORIES_NAV_COLUMN: NavigationItem[] = [
  {
    title: "Categories",
    links: [
      { title: "Fruit & Vegetables", href: "/" },
      { title: "Meat & Fish", href: "/" },
      { title: "Bread & Bakery", href: "/" },
      { title: "Beauty & Health", href: "/" },
    ],
  },
];

export {
  MY_ACCOUNT_NAV_COLUMN,
  HELPS_NAV_COLUMN,
  PROXY_NAV_COLUMN,
  CATEGORIES_NAV_COLUMN,
};
