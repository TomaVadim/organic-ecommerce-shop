import type { SelectWithOptions } from "@/features/header/types/navigation.type";

export const navigation: SelectWithOptions[] = [
  {
    id: 1,
    name: "Home",
    options: [
      { id: 1, name: "Home" },
      { id: 2, name: "Home 2" },
    ],
  },
  {
    id: 2,
    name: "Shop",
    options: [
      { id: 1, name: "Shop" },
      { id: 2, name: "Shop 2" },
    ],
  },
  {
    id: 3,
    name: "About",
    options: [
      { id: 1, name: "About" },
      { id: 2, name: "About 2" },
    ],
  },
  {
    id: 4,
    name: "Contact",
    options: [
      { id: 1, name: "Contact" },
      { id: 2, name: "Contact 2" },
    ],
  },
];
