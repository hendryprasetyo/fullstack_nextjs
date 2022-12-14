import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";
import { unauthPage } from "../../middlewares/authorizationPage";
import { signIn } from "next-auth/react";
import DashboardPopup from "../../components/controls/popup/DashboardPopup";
import ReactTypingEffect from "react-typing-effect";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import styles from "../../styles/Login.module.css";
import Loading from "../../components/Loading";

export async function getServerSideProps(ctx) {
  await unauthPage(ctx);

  return {
    props: {},
  };
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const Auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/auth/login", {
        username: username,
        password: password,
      });
      Router.push("/dashboard");
    } catch (error) {
      if (error.response) {
        setLoading(false);
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="bg-gray-200">
        {/* modal error */}
        <DashboardPopup
          trigger={msg}
          setTrigger={setMsg}
          title={msg}
          icon={
            <BiErrorCircle className="text-9xl flex items-center justify-center text-red-500" />
          }
          btn="oke"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {/* loading page */}
        <Loading trigger={loading} />
        <div className={styles["container-login"]}>
          <div className={styles.box}>
            <form onSubmit={Auth} className={styles.form}>
              <ReactTypingEffect
                text={"Sign In"}
                speed={150}
                eraseDelay={1000}
                eraseSpeed={130}
                typingDelay={100}
                className="m-auto text-[1.7rem] text-[#45f4ff] mb-[-1.2rem] mt-[-1.3rem]"
              />
              <div className={styles.inputBox}>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span>Username</span>
                <i></i>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className={styles["links-wrap"]}>
                <Link href="" className={styles.forgot}>
                  Forgot Password
                </Link>
                <Link href={"/auth/register"} className={styles.sign}>
                  Signup
                </Link>
              </div>
              <button className=" py-2.5 font-medium justify-center text-lg bg-cyan-300 rounded-lg  flex items-center w-full mt-7 hover:bg-transparent  hover:border-2 transition-all hover:text-cyan-300">
                Login
              </button>

              <hr className="mt-6" />
              {/* button login with google */}
              <button
                aria-label="Continue with google"
                role="button"
                onClick={() => signIn("github")}
                className="focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-cyan-300 py-2.5 px-4 border rounded-lg border-cyan-200 flex items-center w-full mt-7"
              >
                <svg
                  width={19}
                  height={20}
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                    fill="#EB4335"
                  />
                </svg>
                <p className="text-base font-medium ml-4 text-cyan-200">
                  Login with Google
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
