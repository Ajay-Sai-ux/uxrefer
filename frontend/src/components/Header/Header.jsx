import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.title}
        src="/uxrLogo.svg"
        alt="UxRefer Logo"
        width={142}
        height={20}
      />
      <nav className={styles.nav}>
        <Link href="#">Pages</Link>
        <Link href="#">Landing pages</Link>
        <Link href="#">OG Images</Link>
        <Link href="#">Sections</Link>
      </nav>
    </header>
  );
};

export default Header;
