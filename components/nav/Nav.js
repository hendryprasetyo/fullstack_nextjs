import { useState } from "react";
import Link from "next/link";
import Dropdown from "../Dropdown/Dropdown";
import axios from "axios";
import Router from "next/router";

import Modal from "../controls/dialogPopup/Modal";
import Loading from "../Loading";

function Nav(props) {
  const [log, setLog] = useState(false);
  const [loading, setLoading] = useState(false);

  const logout = async (e) => {
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
    <div className="fixed left-0 top-0 w-full z-10  ease-in duration-300">
      <div className="m-auto flex justify-between  items-center p-4 text-black sm:bg-[var(--color-bg)]  h-[58px]">
        <Link href={"/dashboard"}>
          <h1 className="hidden sm:block font-semibold text-2xl">HENDRY</h1>
        </Link>
        <ul className="hidden sm:flex sm:mt-3">
          <li className="p-4">
            <Link href={"/dashboard/atendance"}>{props.atendance}</Link>
          </li>
          <li className="p-4">
            <Link href={"#galery"}>{props.galery}</Link>
          </li>
          <li className="p-4">
            <Link href={"#contact"}>{props.contact}</Link>
          </li>
          <li className="p-4">
            <Link href={"#contact"}>{props.contact}</Link>
          </li>
          <li className="p-4">
            <Dropdown setTrigger={handlerOut} />
          </li>
        </ul>
      </div>
      <Loading trigger={loading} />
      <Modal
        trigger={log}
        setTrigger={setLog}
        setTriggerOke={handleOke}
        p="Are you sure you want to exit? after this you have to log back in."
      />
    </div>
  );
}

export default Nav;
