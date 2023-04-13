import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contacto",
    href: "/contacto",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  const activeLinks = menuItems.map((item, index) => (
    <ActiveLink key={index} text={item.text} href={item.href} />
  ));

  return <nav className={styles["menu-container"]}>{activeLinks}</nav>;
};
