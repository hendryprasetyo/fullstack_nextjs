import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLogin,
  AiFillPicture,
} from "react-icons/ai";
import { RiMessageLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import styles from "./NavHome.module.css";

function NavMobileHome() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        id={styles.iconss}
      >
        <AiOutlineHome />
      </Link>
      <Link
        href="#galery"
        onClick={() => setActiveNav("#galery")}
        className={activeNav === "#galery" ? "active" : ""}
        id={styles.iconss}
      >
        <AiFillPicture />
      </Link>
      <Link
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        id={styles.iconss}
      >
        <AiOutlineUser />
      </Link>
      <Link
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        id={styles.iconss}
      >
        <RiMessageLine />
      </Link>
      <Link href="/auth/login" id={styles.iconss}>
        <AiOutlineLogin />
      </Link>
    </nav>
  );
}

export default NavMobileHome;
