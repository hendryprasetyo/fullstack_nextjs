import styles from "./Form.module.css";
import { useState } from "react";
import { authPage } from "../../middlewares/authorizationPage";
import axios from "axios";
import Router from "next/router";
import ReactTypingEffect from "react-typing-effect";

export async function getServerSideProps(ctx) {
  const { token } = await authPage(ctx);
  return {
    props: {
      token,
    },
  };
}

export default function Form(props) {
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
    <div className="bg-gray-200">
      <div className={styles["container-login"]}>
        <div className={styles.box}>
          <form onSubmit={createHandler.bind(this)} className={styles.form}>
            <ReactTypingEffect
              text={props.title}
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
            <button className=" py-2.5 font-medium justify-center text-lg bg-cyan-300 rounded-lg  flex items-center w-full mt-7 hover:bg-transparent  hover:border-2 transition-all hover:text-cyan-300">
              Submit
            </button>
            <p>{status}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
