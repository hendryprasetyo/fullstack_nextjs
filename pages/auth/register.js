import { useState } from "react";
import { unauthPage } from "../../middlewares/authorizationPage";

import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import ReactTypingEffect from "react-typing-effect";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

import styles from "../../styles/Register.module.css";
import Loading from "../../components/Loading";
import DashboardPopup from "../../components/controls/popup/DashboardPopup";

export async function getServerSideProps(ctx) {
  // const cookie = nookies.get(ctx);

  // if (cookie.token) {
  //   return {
  //     redirect: {
  //       destination: "/dashboard",
  //     },
  //   };
  // }
  await unauthPage(ctx);

  return {
    props: {},
  };
}

export default function Register() {
  /**
   ** ini menggunakan fetch
   const [fields, setFields] = useState({
     nas: "",
     username: "",
     name: "",
     password: "",
     confPassword: "",
    });
    
    async function registerHandler(e) {
      e.preventDefault();
      
      const registerReq = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const registerRes = await registerReq.json();
    console.log(registerRes);
  }

  // ini untuk input registernya dengan  menggunakan attribute name
  function fieldHandler(e) {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }
  */

  /* ini menggunakan axios */
  const [nas, setNas] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msgErr, setMsgErr] = useState(false, "");
  const [loading, setLoading] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  const Regist = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/auth/register", {
        nas: nas,
        name: name,
        username: username,
        password: password,
        confPassword: confPassword,
      });
      setLoading(false);
      setMsgSuccess("Register Successfuly, please login!");
    } catch (error) {
      if (error.response) {
        setLoading(false);
        setMsgErr(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="bg-gray-200">
        {/* modal error */}
        <DashboardPopup
          trigger={msgErr}
          setTrigger={setMsgErr}
          title={msgErr}
          icon={
            <BiErrorCircle className="text-9xl flex items-center justify-center text-red-500" />
          }
          btn="oke"
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {/* modal success */}
        <DashboardPopup
          trigger={msgSuccess}
          setTrigger={setMsgSuccess}
          title={msgSuccess}
          icon={
            <AiOutlineCheckCircle className="text-9xl flex items-center justify-center text-green-400" />
          }
          btn="oke"
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {/* Loading component */}
        <Loading trigger={loading} />

        <div className={styles["container-register"]}>
          {/* <LoginMsg title={msg} trigger={msg} setTrigger={setMsgErr} /> */}
          <div className={styles["box-register"]}>
            <form onSubmit={Regist} className={styles["form-register"]}>
              <ReactTypingEffect
                text={"Sign Up"}
                speed={150}
                eraseDelay={1000}
                eraseSpeed={130}
                typingDelay={100}
                className="m-auto text-[1.8rem] text-[#45f4ff] mb-[-.5rem] mt-[-0.5rem]"
              />
              <div className={styles["inputBox-register"]}>
                <input
                  type="integer"
                  required
                  value={nas}
                  onChange={(e) => setNas(e.target.value)}
                />
                <span>NAS</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span>Username</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Name</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="password"
                  required
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
                <span>Confirm Password</span>
                <i></i>
              </div>
              <div className={styles["links"]}>
                <Link
                  href={"/auth/login"}
                  className="text-[#45f3ff] mt-6 border border-[#45f3ff]  px-2 rounded-lg hover:py-1 transition-all"
                >
                  Login
                </Link>
              </div>
              <button type="submit" className={styles["btn-register"]}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
