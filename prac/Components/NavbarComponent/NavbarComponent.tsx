import Link from "next/link";

import css from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  return (
    <nav className={css.nav}>
      <Link href="/" className={css.link}>
        Home
      </Link>
      <Link href="/home" className={css.link}>
        Home Page
      </Link>
    </nav>
  );
};

export default NavbarComponent;
