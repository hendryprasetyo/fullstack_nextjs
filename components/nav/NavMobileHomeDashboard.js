import { AiOutlineHome, AiOutlineUser, AiFillPicture } from "react-icons/ai";
import { useState } from "react";
import { RiMessageLine } from "react-icons/ri";

import Link from "next/link";
import axios from "axios";
import Router from "next/router";

import styles from "./NavHome.module.css";
import DropdownDashboard from "../Dropdown/DropdownDashboard";
import Modal from "../controls/dialogPopup/Modal";
import Loading from "../Loading";

function NavMobileDashboard() {
  const [activeNav, setActiveNav] = useState("#");
  const [log, setLog] = useState(false);
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    await axios.post("/api/auth/logout");
    Router.push("/");
  };
  function handleOke() {
    setLog(false);
    logout();
  }
  function handlerOut() {
    setLog(true);
  }
  return (
    <>
      <Loading trigger={loading} />
      <Modal
        trigger={log}
        setTrigger={setLog}
        setTriggerOke={handleOke}
        p="Are you sure you want to exit? after this you have to log back in."
      />
      <nav className={styles.nav}>
        <Link
          href="/dashboard"
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
        <div className="text-white flex text-lg mt-3" id={styles.iconss}>
          {/* <AiOutlineLogin /> */}
          <DropdownDashboard setTrigger={handlerOut} />
        </div>
      </nav>
    </>
  );
}

export default NavMobileDashboard;
