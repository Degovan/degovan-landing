interface MenuItem {
  label: string;
  path: string;
}

export interface HeaderProps {
  logo: string;
  menu: MenuItem[];
}

export const menuItems = [
  {
    label: "Beranda",
    path: "/",
  },
  {
    label: "Cara Kerja Kami",
    path: "/how-we-work",
  },
  {
    label: "Proyek",
    path: "/projects",
  },
  {
    label: "Kontributor",
    path: "/contributors",
  },
];
