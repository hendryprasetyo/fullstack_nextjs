import { useState } from "react";
import { authPage } from "../../../middlewares/authorizationPage";
import { MdArrowBackIosNew } from "react-icons/md";

import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

import styles from "../../../components/atendance/Form.module.css";

export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);
  return {
    props: {
      token,
    },
  };
}

export default function In(props) {
  const [nas, setNas] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  async function createHandler(e) {
    e.preventDefault();

    setStatus("loading");
    const { token } = props;

    const create = await axios.post("/api/atendance/checkin", {
      nas: nas,
      name: name,
    });
    setStatus("success");
    Router.push("/dashboard/atendance");
  }

  return (
    <div className={styles["container-login"]}>
      <div className={styles.box}>
        <form onSubmit={createHandler.bind(this)} className={styles.form}>
          <div className="absolute flex top-7 left-6 text-3xl bg-slate-300 hover:bg-slate-400 rounded-md">
            <Link href="/dashboard/atendance">
              <MdArrowBackIosNew />
            </Link>
          </div>
          <ReactTypingEffect
            text={"Absent In"}
            speed={150}
            eraseDelay={1000}
            eraseSpeed={130}
            typingDelay={100}
            className="m-auto text-[1.7rem] text-[#45f4ff] mb-[-1.2rem] mt-[-1.3rem]"
          />
          <div className={styles.inputBox}>
            <input
              type="integer"
              required
              name="nas"
              value={nas}
              onChange={(e) => setNas(e.target.value)}
            />
            <span>NAS</span>
            <i></i>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Name</span>
            <i></i>
          </div>
          <button className=" py-2.5 justify-center text-lg bg-cyan-300 rounded-lg  flex items-center w-full mt-7 hover:bg-transparent  hover:border-2 transition-all hover:text-cyan-300 font-semibold tracking-wide">
            Submit
          </button>
          <p>{status}</p>
        </form>
      </div>
    </div>
  );
}
