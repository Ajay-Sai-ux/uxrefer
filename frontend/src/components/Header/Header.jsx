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
        width={66}
        height={24}
      />
      <nav className={styles.nav}>
        <Link href="#">About</Link>
        <Link href="#">Donate</Link>
      </nav>
    </header>
  );
};

export default Header;
