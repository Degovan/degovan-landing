interface MenuItem {
  label: string;
  path: string;
}

export interface HeaderProps {
  logo: string;
  menu: MenuItem[];
}
